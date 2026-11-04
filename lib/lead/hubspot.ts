// HubSpot API client for lead submission: upsert contact and create deal

export interface HubSpotEnv {
  HUBSPOT_PIPELINE_ID?: string
  HUBSPOT_STAGE_NEW?: string
  HUBSPOT_STAGE_OUT_OF_AREA?: string
  HUBSPOT_STAGE_NOT_A_FIT?: string
}

export interface HubSpotPayload {
  contact: {
    idProperty: string
    id: string
    properties: Record<string, string>
  }
  deal: {
    properties: Record<string, string>
  }
}

/**
 * Upsert contact and create deal in HubSpot via the Private Apps API.
 * Returns the created/updated contact ID and deal ID on success.
 * Throws on API errors.
 */
export async function sendToHubSpot(
  payload: HubSpotPayload,
  token: string,
  fetchImpl: typeof fetch = fetch
): Promise<{ contactId: string; dealId: string }> {
  const baseUrl = 'https://api.hubapi.com'
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  }

  // 1. Upsert contact by email
  const contactRes = await fetchImpl(`${baseUrl}/crm/v3/objects/contacts`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      properties: payload.contact.properties,
    }),
  })

  if (!contactRes.ok) {
    // If 409 conflict, the contact exists; fetch it by email
    if (contactRes.status === 409) {
      const searchRes = await fetchImpl(
        `${baseUrl}/crm/v3/objects/contacts/search`,
        {
          method: 'POST',
          headers,
          body: JSON.stringify({
            filterGroups: [
              {
                filters: [
                  {
                    propertyName: 'email',
                    operator: 'EQ',
                    value: payload.contact.id,
                  },
                ],
              },
            ],
            properties: ['email'],
            limit: 1,
          }),
        }
      )
      if (!searchRes.ok) throw new Error(`HubSpot contact search failed: ${searchRes.status}`)
      const searchData = (await searchRes.json()) as { results: Array<{ id: string }> }
      if (!searchData.results.length) throw new Error('Contact not found after conflict')
      const contactId = searchData.results[0].id
      // Update the existing contact
      const updateRes = await fetchImpl(`${baseUrl}/crm/v3/objects/contacts/${contactId}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ properties: payload.contact.properties }),
      })
      if (!updateRes.ok) throw new Error(`HubSpot contact update failed: ${updateRes.status}`)
    } else {
      throw new Error(`HubSpot contact create failed: ${contactRes.status}`)
    }
  }

  const contactData = (await contactRes.json()) as { id: string }
  const contactId = contactData.id

  // 2. Create deal associated with this contact
  const dealPayload = {
    properties: payload.deal.properties,
    associations: [
      {
        to: { id: contactId },
        types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }],
      },
    ],
  }

  const dealRes = await fetchImpl(`${baseUrl}/crm/v3/objects/deals`, {
    method: 'POST',
    headers,
    body: JSON.stringify(dealPayload),
  })

  if (!dealRes.ok) throw new Error(`HubSpot deal create failed: ${dealRes.status}`)
  const dealData = (await dealRes.json()) as { id: string }

  return { contactId, dealId: dealData.id }
}
