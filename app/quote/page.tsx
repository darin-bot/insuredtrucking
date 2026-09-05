'use client'

import type { Metadata } from 'next'
import { useState } from 'react'

const FORM_ACTION = 'https://formsubmit.co/ajax/darin@insuredtrucking.com'

const STATES = ['Alabama', 'Florida', 'Georgia', 'Indiana', 'Kentucky', 'Missouri', 'North Carolina', 'Tennessee', 'Texas']
const MAKES = ['Freightliner', 'Peterbilt', 'Kenworth', 'Volvo', 'International', 'Mack', 'Western Star', 'Other']
const CURRENT_YEAR = new Date().getFullYear()
const YEARS = Array.from({ length: CURRENT_YEAR - 1979 + 2 }, (_, i) => CURRENT_YEAR + 1 - i)

type Driver = {
  id: string
  name: string
  dob: string
  dlNumber: string
  cdlYear: string
  licenseFile: File | null
}

type Equipment = {
  id: string
  type: string
  year: string
  make: string
  makeOther: string
  model: string
  value: string
}

export default function Quote() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  const [drivers, setDrivers] = useState<Driver[]>([{
    id: '1',
    name: '',
    dob: '',
    dlNumber: '',
    cdlYear: '',
    licenseFile: null
  }])

  const [equipment, setEquipment] = useState<Equipment[]>([{
    id: '1',
    type: 'Tractor',
    year: '',
    make: '',
    makeOther: '',
    model: '',
    value: ''
  }])

  const addDriver = () => {
    setDrivers([...drivers, {
      id: Date.now().toString(),
      name: '',
      dob: '',
      dlNumber: '',
      cdlYear: '',
      licenseFile: null
    }])
  }

  const removeDriver = (id: string) => {
    if (drivers.length > 1) {
      setDrivers(drivers.filter(d => d.id !== id))
    }
  }

  const updateDriver = (id: string, field: keyof Driver, value: string | File | null) => {
    setDrivers(drivers.map(d => d.id === id ? { ...d, [field]: value } : d))
  }

  const addEquipment = () => {
    setEquipment([...equipment, {
      id: Date.now().toString(),
      type: 'Tractor',
      year: '',
      make: '',
      makeOther: '',
      model: '',
      value: ''
    }])
  }

  const removeEquipment = (id: string) => {
    if (equipment.length > 1) {
      setEquipment(equipment.filter(e => e.id !== id))
    }
  }

  const updateEquipment = (id: string, field: keyof Equipment, value: string) => {
    setEquipment(equipment.map(e => e.id === id ? { ...e, [field]: value } : e))
  }

  const validateForm = (formData: FormData): boolean => {
    const errors: Record<string, string> = {}

    // Validate DOT number
    if (!formData.get('dot_number')) {
      errors.dot_number = 'DOT number is required'
    }

    // Validate drivers
    drivers.forEach((driver, index) => {
      if (!driver.name) {
        errors[`driver_${index}_name`] = 'Driver name is required'
      }
      if (!driver.dob) {
        errors[`driver_${index}_dob`] = 'Date of birth is required'
      }
      // If no file attached, DL number is required
      if (!driver.licenseFile && !driver.dlNumber) {
        errors[`driver_${index}_dl`] = 'Either attach a license copy or enter the DL number'
      }
    })

    // Validate equipment
    equipment.forEach((unit, index) => {
      if (!unit.year) {
        errors[`equipment_${index}_year`] = 'Year is required'
      }
      if (!unit.make) {
        errors[`equipment_${index}_make`] = 'Make is required'
      }
      if (unit.make === 'Other' && !unit.makeOther) {
        errors[`equipment_${index}_make_other`] = 'Please specify make'
      }
    })

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setValidationErrors({})

    const formData = new FormData(e.currentTarget)

    // Add FormSubmit configuration
    formData.append('_subject', 'Quote Request - Affordable Truck Insurance')
    formData.append('_captcha', 'false')

    // Add driver details as structured text
    drivers.forEach((driver, index) => {
      formData.append(`driver_${index + 1}_name`, driver.name)
      formData.append(`driver_${index + 1}_dob`, driver.dob)
      formData.append(`driver_${index + 1}_dl_number`, driver.dlNumber || 'See attachment')
      formData.append(`driver_${index + 1}_cdl_year`, driver.cdlYear)
      if (driver.licenseFile) {
        formData.append(`driver_${index + 1}_license`, driver.licenseFile)
      }
    })

    // Add equipment details
    equipment.forEach((unit, index) => {
      const make = unit.make === 'Other' ? unit.makeOther : unit.make
      formData.append(`equipment_${index + 1}`, 
        `${unit.type} - ${unit.year} ${make} ${unit.model} - Value: $${unit.value}`)
    })

    if (!validateForm(formData)) {
      setError('Please fix the errors below')
      return
    }

    try {
      const response = await fetch(FORM_ACTION, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const data = await response.json()
      
      // FormSubmit AJAX returns { success: true/false, message: "..." }
      // Only mark as submitted when success is explicitly true
      const success = data.success === true || data.success === 'true'
      
      if (success) {
        setSubmitted(true)
        window.scrollTo(0, 0)
      } else {
        // FormSubmit returned success: false - form wasn't delivered
        setError(
          data.message || 
          'Form submission failed. The FormSubmit form may need to be activated. ' +
          'Please check your email or contact us directly at darin@insuredtrucking.com'
        )
      }
    } catch (err) {
      setError('Failed to submit form. Please try again or email darin@insuredtrucking.com directly.')
    }
  }

  if (submitted) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h1 className="text-3xl font-bold text-navy mb-4">Quote Request Received</h1>
              <p className="text-lg text-steel mb-6">
                Thank you for your quote request. We will review your information and respond within 1-2 business days.
              </p>
              <p className="text-steel">
                If you have questions, email us at{' '}
                <a href="mailto:darin@insuredtrucking.com" className="text-navy hover:underline font-semibold">
                  darin@insuredtrucking.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Get a Quote
            </h1>
            <p className="text-lg text-steel mb-4">
              Request a commercial trucking insurance quote. We serve motor carriers in Alabama, Florida, Georgia, Indiana, Kentucky, Missouri, North Carolina, Tennessee, and Texas.
            </p>
            <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
              <p className="text-sm text-steel">
                <strong>Privacy Notice:</strong> All uploaded documents are used only to quote coverage and are not stored on this website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg">
                <p className="text-red-800 font-semibold">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-6">Company Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        DOT Number *
                      </label>
                      <input
                        type="text"
                        name="dot_number"
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent ${
                          validationErrors.dot_number ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {validationErrors.dot_number && (
                        <p className="text-red-600 text-sm mt-1">{validationErrors.dot_number}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        MC Number
                      </label>
                      <input
                        type="text"
                        name="mc_number"
                        placeholder="Optional"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Base State *
                    </label>
                    <select
                      name="base_state"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    >
                      <option value="">Select state...</option>
                      {STATES.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    <p className="text-sm text-steel mt-1">
                      We are licensed in these 9 states only
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Authority Status *
                    </label>
                    <select
                      name="authority_status"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="new">New Venture / New Authority</option>
                      <option value="existing">Existing Operation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Years in Business
                    </label>
                    <input
                      type="number"
                      name="years_in_business"
                      min="0"
                      placeholder="0 if new venture"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Fleet Size / Power Units *
                    </label>
                    <select
                      name="fleet_size"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    >
                      <option value="">Select fleet size...</option>
                      <option value="1">1 truck (owner-operator)</option>
                      <option value="2">2 trucks</option>
                      <option value="3-5">3-5 trucks</option>
                      <option value="6-10">6-10 trucks</option>
                      <option value="11+">11+ trucks</option>
                    </select>
                    <p className="text-sm text-steel mt-1">
                      Total number of power units (tractors)
                    </p>
                  </div>
                </div>
              </div>

              {/* Drivers */}
              <div className="card">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-navy">Drivers</h2>
                  <button
                    type="button"
                    onClick={addDriver}
                    className="btn-secondary text-sm py-2 px-4"
                  >
                    + Add Driver
                  </button>
                </div>

                <div className="space-y-6">
                  {drivers.map((driver, index) => (
                    <div key={driver.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-navy">Driver {index + 1}</h3>
                        {drivers.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeDriver(driver.id)}
                            className="text-red-600 hover:text-red-800 text-sm font-semibold"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-navy mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={driver.name}
                            onChange={(e) => updateDriver(driver.id, 'name', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent ${
                              validationErrors[`driver_${index}_name`] ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {validationErrors[`driver_${index}_name`] && (
                            <p className="text-red-600 text-sm mt-1">{validationErrors[`driver_${index}_name`]}</p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-navy mb-2">
                              Date of Birth *
                            </label>
                            <input
                              type="date"
                              value={driver.dob}
                              onChange={(e) => updateDriver(driver.id, 'dob', e.target.value)}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent ${
                                validationErrors[`driver_${index}_dob`] ? 'border-red-500' : 'border-gray-300'
                              }`}
                            />
                            {validationErrors[`driver_${index}_dob`] && (
                              <p className="text-red-600 text-sm mt-1">{validationErrors[`driver_${index}_dob`]}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-navy mb-2">
                              Year CDL Received
                            </label>
                            <select
                              value={driver.cdlYear}
                              onChange={(e) => updateDriver(driver.id, 'cdlYear', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                            >
                              <option value="">Select year...</option>
                              {YEARS.map(year => (
                                <option key={year} value={year}>{year}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-navy mb-2">
                            Driver&apos;s License Number {!driver.licenseFile && '*'}
                          </label>
                          <input
                            type="text"
                            value={driver.dlNumber}
                            onChange={(e) => updateDriver(driver.id, 'dlNumber', e.target.value)}
                            placeholder={driver.licenseFile ? 'Optional if file attached' : 'Required if no file attached'}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent ${
                              validationErrors[`driver_${index}_dl`] ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {validationErrors[`driver_${index}_dl`] && (
                            <p className="text-red-600 text-sm mt-1">{validationErrors[`driver_${index}_dl`]}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-navy mb-2">
                            Attach Copy of Driver&apos;s License
                          </label>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) => {
                              const file = e.target.files?.[0] || null
                              updateDriver(driver.id, 'licenseFile', file)
                            }}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-navy file:text-white hover:file:bg-navy-dark"
                          />
                          {driver.licenseFile && (
                            <p className="text-sm text-green-600 mt-1">
                              ✓ {driver.licenseFile.name}
                            </p>
                          )}
                          <p className="text-sm text-steel mt-1">
                            Image or PDF. If attached, DL number is optional.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              <div className="card">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-navy">Equipment</h2>
                  <button
                    type="button"
                    onClick={addEquipment}
                    className="btn-secondary text-sm py-2 px-4"
                  >
                    + Add Unit
                  </button>
                </div>

                <div className="space-y-6">
                  {equipment.map((unit, index) => (
                    <div key={unit.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-navy">Unit {index + 1}</h3>
                        {equipment.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeEquipment(unit.id)}
                            className="text-red-600 hover:text-red-800 text-sm font-semibold"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-navy mb-2">
                            Type
                          </label>
                          <select
                            value={unit.type}
                            onChange={(e) => updateEquipment(unit.id, 'type', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                          >
                            <option value="Tractor">Tractor</option>
                            <option value="Trailer">Trailer</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-navy mb-2">
                              Year *
                            </label>
                            <select
                              value={unit.year}
                              onChange={(e) => updateEquipment(unit.id, 'year', e.target.value)}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent ${
                                validationErrors[`equipment_${index}_year`] ? 'border-red-500' : 'border-gray-300'
                              }`}
                            >
                              <option value="">Select year...</option>
                              {YEARS.map(year => (
                                <option key={year} value={year}>{year}</option>
                              ))}
                            </select>
                            {validationErrors[`equipment_${index}_year`] && (
                              <p className="text-red-600 text-sm mt-1">{validationErrors[`equipment_${index}_year`]}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-navy mb-2">
                              Make *
                            </label>
                            <select
                              value={unit.make}
                              onChange={(e) => updateEquipment(unit.id, 'make', e.target.value)}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent ${
                                validationErrors[`equipment_${index}_make`] ? 'border-red-500' : 'border-gray-300'
                              }`}
                            >
                              <option value="">Select make...</option>
                              {MAKES.map(make => (
                                <option key={make} value={make}>{make}</option>
                              ))}
                            </select>
                            {validationErrors[`equipment_${index}_make`] && (
                              <p className="text-red-600 text-sm mt-1">{validationErrors[`equipment_${index}_make`]}</p>
                            )}
                          </div>
                        </div>

                        {unit.make === 'Other' && (
                          <div>
                            <label className="block text-sm font-semibold text-navy mb-2">
                              Specify Make *
                            </label>
                            <input
                              type="text"
                              value={unit.makeOther}
                              onChange={(e) => updateEquipment(unit.id, 'makeOther', e.target.value)}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent ${
                                validationErrors[`equipment_${index}_make_other`] ? 'border-red-500' : 'border-gray-300'
                              }`}
                            />
                            {validationErrors[`equipment_${index}_make_other`] && (
                              <p className="text-red-600 text-sm mt-1">{validationErrors[`equipment_${index}_make_other`]}</p>
                            )}
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-navy mb-2">
                              Model
                            </label>
                            <input
                              type="text"
                              value={unit.model}
                              onChange={(e) => updateEquipment(unit.id, 'model', e.target.value)}
                              placeholder="e.g. Cascadia, 389"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-navy mb-2">
                              Value $
                            </label>
                            <input
                              type="number"
                              value={unit.value}
                              onChange={(e) => updateEquipment(unit.id, 'value', e.target.value)}
                              placeholder="0"
                              min="0"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operations */}
              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-6">Operations</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-3">
                      Commodities Hauled *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="commodity_general"
                          value="General Freight"
                          className="w-5 h-5 text-navy border-gray-300 rounded focus:ring-navy"
                        />
                        <span className="ml-3 text-steel">General Freight</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="commodity_flatbed"
                          value="Flatbed"
                          className="w-5 h-5 text-navy border-gray-300 rounded focus:ring-navy"
                        />
                        <span className="ml-3 text-steel">Flatbed</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="commodity_reefer"
                          value="Reefer"
                          className="w-5 h-5 text-navy border-gray-300 rounded focus:ring-navy"
                        />
                        <span className="ml-3 text-steel">Reefer</span>
                      </label>
                    </div>
                    <div className="mt-3">
                      <input
                        type="text"
                        name="commodity_other"
                        placeholder="Other commodities..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Operating Radius *
                    </label>
                    <select
                      name="radius"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    >
                      <option value="">Select radius...</option>
                      <option value="Local (0-100 miles)">Local (0-100 miles)</option>
                      <option value="Regional (100-500 miles)">Regional (100-500 miles)</option>
                      <option value="OTR (500+ miles)">OTR (500+ miles)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Typical Lanes / Routes
                    </label>
                    <input
                      type="text"
                      name="typical_lanes"
                      placeholder="e.g. KY to TX, Southeast regional"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-6">Documents</h2>
                <p className="text-sm text-steel mb-6">
                  Optional: Attach supporting documents to help us provide an accurate quote. Multiple files can be selected for each upload.
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Attach Loss Runs
                    </label>
                    <input
                      type="file"
                      name="loss_runs"
                      accept=".pdf,image/*"
                      multiple
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-navy file:text-white hover:file:bg-navy-dark"
                    />
                    <p className="text-sm text-steel mt-1">
                      PDF or image files. You can select multiple files at once.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Attach IFTA Reports
                    </label>
                    <input
                      type="file"
                      name="ifta_reports"
                      accept=".pdf,image/*"
                      multiple
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-navy file:text-white hover:file:bg-navy-dark"
                    />
                    <p className="text-sm text-steel mt-1">
                      PDF or image files. You can select multiple files at once.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-steel">
                      <strong className="text-navy">Privacy Notice:</strong> All uploaded documents (license copies, loss runs, IFTA reports) are used only to quote coverage and are not stored on this website.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-6">Contact Information</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contact_name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="contact_email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="contact_phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Additional Information / Notes
                    </label>
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="Any additional details about your operation"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Disclaimers */}
              <div className="card bg-gray-50">
                <p className="text-sm text-steel mb-3">
                  <strong className="text-navy">Important:</strong> Submitting this form does not bind coverage. All coverage is subject to underwriting approval and policy terms.
                </p>
                <p className="text-sm text-steel">
                  We are licensed to write commercial trucking insurance in Alabama, Florida, Georgia, Indiana, Kentucky, Missouri, North Carolina, Tennessee, and Texas only.
                </p>
              </div>

              {/* Submit Button - Sticky on mobile */}
              <div className="fixed bottom-0 left-0 right-0 md:relative bg-white md:bg-transparent border-t md:border-0 border-gray-200 p-4 md:p-0 z-40">
                <button
                  type="submit"
                  className="btn-primary w-full text-lg"
                >
                  Submit Quote Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
