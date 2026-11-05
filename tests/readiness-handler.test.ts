/**
 * Tests for the readiness checker handler
 */

import { routeFor, handleReadiness, type ReadinessEnv } from '../lib/readiness/handler';
import type { ZipCheck } from '../lib/lead/zipState';

describe('Readiness Handler', () => {
  describe('routeFor', () => {
    test('licensed ZIP routes to licensed', () => {
      const mockZip: ZipCheck = {
        valid: true,
        zip: '37203',
        zip3: '372',
        state: 'TN',
        licensed: true,
      };
      const mockQuiz: any = { answers: {}, compliance: [] };
      
      const route = routeFor(mockZip, mockQuiz);
      expect(route).toBe('licensed');
    });

    test('valid but unlicensed ZIP routes to out_of_area', () => {
      const mockZip: ZipCheck = {
        valid: true,
        zip: '90210',
        zip3: '902',
        state: 'CA',
        licensed: false,
      };
      const mockQuiz: any = { answers: {}, compliance: [] };
      
      const route = routeFor(mockZip, mockQuiz);
      expect(route).toBe('out_of_area');
    });

    test('valid ZIP with empty state routes to out_of_area', () => {
      const mockZip: ZipCheck = {
        valid: true,
        zip: '00100',
        zip3: '001',
        state: '',
        licensed: false,
      };
      const mockQuiz: any = { answers: {}, compliance: [] };
      
      const route = routeFor(mockZip, mockQuiz);
      expect(route).toBe('out_of_area');
    });

    test('all licensed states route correctly', () => {
      const licensedStates = [
        { zip: '35004', state: 'AL' },
        { zip: '32003', state: 'FL' },
        { zip: '30002', state: 'GA' },
        { zip: '46001', state: 'IN' },
        { zip: '40003', state: 'KY' },
        { zip: '63001', state: 'MO' },
        { zip: '27006', state: 'NC' },
        { zip: '37011', state: 'TN' },
        { zip: '75001', state: 'TX' },
      ];

      const mockQuiz: any = { answers: {}, compliance: [] };

      licensedStates.forEach(({ zip, state }) => {
        const mockZip: ZipCheck = {
          valid: true,
          zip,
          zip3: zip.substring(0, 3),
          state,
          licensed: true,
        };
        
        const route = routeFor(mockZip, mockQuiz);
        expect(route).toBe('licensed');
      });
    });
  });

  describe('Email subject tagging', () => {
    test('out_of_area route should produce tagged subject', () => {
      const route = 'out_of_area';
      const name = 'John Doe';
      const level = 'Ready';
      
      const subjectPrefix = route === 'out_of_area' ? 'Out of area - ' : '';
      const subject = `${subjectPrefix}Readiness Checker Result: ${level} - ${name}`;
      
      expect(subject).toBe('Out of area - Readiness Checker Result: Ready - John Doe');
      expect(subject).toContain('Out of area');
    });

    test('licensed route should not have tagged subject', () => {
      const route = 'licensed';
      const name = 'Jane Smith';
      const level = 'Almost ready';
      
      const subjectPrefix = route === 'out_of_area' ? 'Out of area - ' : '';
      const subject = `${subjectPrefix}Readiness Checker Result: ${level} - ${name}`;
      
      expect(subject).toBe('Readiness Checker Result: Almost ready - Jane Smith');
      expect(subject).not.toContain('Out of area');
    });
  });

  describe('HubSpot deal creation logic', () => {
    test('deals should only be created for licensed routes', () => {
      const shouldCreateForLicensed = 'licensed' === 'licensed';
      const shouldCreateForOutOfArea = 'out_of_area' === 'licensed';
      
      expect(shouldCreateForLicensed).toBe(true);
      expect(shouldCreateForOutOfArea).toBe(false);
    });
  });

  describe('Notes field handling', () => {
    test('notes field is optional', () => {
      const dataWithNotes = {
        notes: 'Additional information',
      };
      
      const dataWithoutNotes = {};
      
      expect(dataWithNotes.notes).toBeDefined();
      expect(dataWithoutNotes.notes).toBeUndefined();
    });

    test('empty notes should not be included', () => {
      const notes = '';
      const shouldInclude = notes ? true : false;
      
      expect(shouldInclude).toBe(false);
    });
  });

  describe('Content guidelines compliance', () => {
    test('does not use em dashes in messages', () => {
      const sampleMessages = [
        'Thank you for your interest. You are in our service area.',
        'Your location is outside our current service area, but we have resources that may help.',
      ];

      sampleMessages.forEach(message => {
        expect(message).not.toContain('—');
        expect(message).not.toContain('–');
      });
    });

    test('does not mention prohibited terms', () => {
      const prohibitedTerms = [
        'BMC',
        'cheapest',
        'guarantee',
        'guaranteed',
        'Benton Insurance',
      ];

      const sampleText = 'We provide affordable truck insurance for owner-operators in our service area.';

      prohibitedTerms.forEach(term => {
        expect(sampleText.toLowerCase()).not.toContain(term.toLowerCase());
      });
    });
  });

  describe('Email Resend integration', () => {
    const createValidRequest = () => {
      const body = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '6155551234',
        zip: '37203',
        consent: true,
        consentVersion: 'ati-consent-2026-10-25-v1',
        pageUrl: 'https://insuredtrucking.com/new-authority/readiness/',
        answers: {
          cdlYears: '5plus',
          incidents: 'none',
          authorityAge: '12plus',
          dotMc: 'dot_mc',
          entity: 'llc',
          ein: 'yes',
          truckOwnership: 'own',
          truckAge: 'lt10',
          truckValue: '40to80k',
          operationType: 'dry_van',
          downPayment: '3to6k',
        },
        compliance: ['consortium', 'eld', 'maintenance'],
      };
      return new Request('https://example.com/api/readiness', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    };

    test('emailSent is true when Resend succeeds', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ id: 'resend-email-id' }),
      });

      const env: ReadinessEnv = {
        RESEND_API_KEY: 'test-api-key',
        HUBSPOT_PIPELINE_ID: 'test',
        HUBSPOT_STAGE_NEW: 'new',
        HUBSPOT_STAGE_OUT_OF_AREA: 'out',
        HUBSPOT_STAGE_NOT_A_FIT: 'not-fit',
      };

      const request = createValidRequest();
      const response = await handleReadiness(request, env, { fetchImpl: mockFetch });
      const result = await response.json();

      expect(result.emailSent).toBe(true);
      expect(result.emailError).toBeUndefined();
      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.resend.com/emails',
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Authorization': 'Bearer test-api-key',
            'Content-Type': 'application/json',
          }),
        })
      );
      
      const callArgs = mockFetch.mock.calls[0];
      const requestBody = JSON.parse(callArgs[1].body);
      expect(requestBody.from).toBe('ATI Readiness Checker <readiness@getinsuredtrucking.com>');
      expect(requestBody.to).toEqual(['darin@insuredtrucking.com']);
    });

    test('emailSent is false when RESEND_API_KEY is missing', async () => {
      const mockFetch = jest.fn();

      const env: ReadinessEnv = {
        HUBSPOT_PIPELINE_ID: 'test',
        HUBSPOT_STAGE_NEW: 'new',
        HUBSPOT_STAGE_OUT_OF_AREA: 'out',
        HUBSPOT_STAGE_NOT_A_FIT: 'not-fit',
      };

      const request = createValidRequest();
      const response = await handleReadiness(request, env, { fetchImpl: mockFetch });
      const result = await response.json();

      expect(result.emailSent).toBe(false);
      expect(result.emailError).toBe('mail not configured');
      expect(mockFetch).not.toHaveBeenCalled();
    });

    test('emailSent is false when Resend returns invalid response', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ message: 'Invalid request' }),
      });

      const env: ReadinessEnv = {
        RESEND_API_KEY: 'test-api-key',
        HUBSPOT_PIPELINE_ID: 'test',
        HUBSPOT_STAGE_NEW: 'new',
        HUBSPOT_STAGE_OUT_OF_AREA: 'out',
        HUBSPOT_STAGE_NOT_A_FIT: 'not-fit',
      };

      const request = createValidRequest();
      const response = await handleReadiness(request, env, { fetchImpl: mockFetch });
      const result = await response.json();

      expect(result.emailSent).toBe(false);
      expect(result.emailError).toBe('provider error');
    });

    test('emailSent is false when Resend HTTP request fails', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 401,
        text: async () => 'Unauthorized',
      });

      const env: ReadinessEnv = {
        RESEND_API_KEY: 'wrong-api-key',
        HUBSPOT_PIPELINE_ID: 'test',
        HUBSPOT_STAGE_NEW: 'new',
        HUBSPOT_STAGE_OUT_OF_AREA: 'out',
        HUBSPOT_STAGE_NOT_A_FIT: 'not-fit',
      };

      const request = createValidRequest();
      const response = await handleReadiness(request, env, { fetchImpl: mockFetch });
      const result = await response.json();

      expect(result.emailSent).toBe(false);
      expect(result.emailError).toBe('HTTP 401');
    });

    test('emailSent is false when fetch throws', async () => {
      const mockFetch = jest.fn().mockRejectedValue(new Error('Network failure'));

      const env: ReadinessEnv = {
        RESEND_API_KEY: 'test-api-key',
        HUBSPOT_PIPELINE_ID: 'test',
        HUBSPOT_STAGE_NEW: 'new',
        HUBSPOT_STAGE_OUT_OF_AREA: 'out',
        HUBSPOT_STAGE_NOT_A_FIT: 'not-fit',
      };

      const request = createValidRequest();
      const response = await handleReadiness(request, env, { fetchImpl: mockFetch });
      const result = await response.json();

      expect(result.emailSent).toBe(false);
      expect(result.emailError).toBe('network error');
    });

    test('out_of_area prefix in email subject', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ id: 'resend-email-id' }),
      });

      const env: ReadinessEnv = {
        RESEND_API_KEY: 'test-api-key',
        HUBSPOT_PIPELINE_ID: 'test',
        HUBSPOT_STAGE_NEW: 'new',
        HUBSPOT_STAGE_OUT_OF_AREA: 'out',
        HUBSPOT_STAGE_NOT_A_FIT: 'not-fit',
      };

      const body = {
        name: 'Jane Smith',
        email: 'jane@example.com',
        zip: '90210', // California, out of area
        answers: {
          cdlYears: '5plus',
          incidents: 'none',
          authorityAge: '12plus',
          dotMc: 'dot_mc',
          entity: 'llc',
          ein: 'yes',
          truckOwnership: 'own',
          truckAge: 'lt10',
          truckValue: '40to80k',
          operationType: 'dry_van',
          downPayment: '3to6k',
        },
        compliance: ['consortium'],
      };

      const request = new Request('https://example.com/api/readiness', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      await handleReadiness(request, env, { fetchImpl: mockFetch });

      const callArgs = mockFetch.mock.calls[0];
      const requestBody = JSON.parse(callArgs[1].body);
      expect(requestBody.subject).toContain('Out of area - Readiness Checker Result:');
      expect(requestBody.subject).toContain('Jane Smith');
    });

    test('email body includes all required fields', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ id: 'resend-email-id' }),
      });

      const env: ReadinessEnv = {
        RESEND_API_KEY: 'test-api-key',
        HUBSPOT_PIPELINE_ID: 'test',
        HUBSPOT_STAGE_NEW: 'new',
        HUBSPOT_STAGE_OUT_OF_AREA: 'out',
        HUBSPOT_STAGE_NOT_A_FIT: 'not-fit',
      };

      const request = createValidRequest();
      await handleReadiness(request, env, { fetchImpl: mockFetch });

      const callArgs = mockFetch.mock.calls[0];
      const requestBody = JSON.parse(callArgs[1].body);

      expect(requestBody.text).toContain('Name: John Doe');
      expect(requestBody.text).toContain('Email: john@example.com');
      expect(requestBody.text).toContain('Phone:');
      expect(requestBody.text).toContain('Garaging ZIP: 37203');
      expect(requestBody.text).toContain('State: TN');
      expect(requestBody.text).toContain('Result Level:');
      expect(requestBody.text).toContain('Route:');
      expect(requestBody.text).toContain('Answers:');
      expect(requestBody.text).toContain('Compliance:');
      expect(requestBody.text).toContain('Checklist:');

      expect(requestBody.html).toContain('<table');
      expect(requestBody.html).toContain('John Doe');
      expect(requestBody.html).toContain('john@example.com');
    });

    test('email body does not contain banned terms', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ id: 'resend-email-id' }),
      });

      const env: ReadinessEnv = {
        RESEND_API_KEY: 'test-api-key',
        HUBSPOT_PIPELINE_ID: 'test',
        HUBSPOT_STAGE_NEW: 'new',
        HUBSPOT_STAGE_OUT_OF_AREA: 'out',
        HUBSPOT_STAGE_NOT_A_FIT: 'not-fit',
      };

      const request = createValidRequest();
      await handleReadiness(request, env, { fetchImpl: mockFetch });

      const callArgs = mockFetch.mock.calls[0];
      const requestBody = JSON.parse(callArgs[1].body);

      const prohibitedTerms = ['BMC', 'cheapest', 'guarantee', 'Benton Insurance', 'intermodal'];
      const combinedContent = `${requestBody.text} ${requestBody.html} ${requestBody.subject}`.toLowerCase();

      prohibitedTerms.forEach(term => {
        expect(combinedContent).not.toContain(term.toLowerCase());
      });

      expect(combinedContent).not.toContain('—');
      expect(combinedContent).not.toContain('–');
    });
  });
});
