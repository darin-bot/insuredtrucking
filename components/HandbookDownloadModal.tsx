'use client'

import { useState } from 'react'

const FORM_ACTION = 'https://formsubmit.co/darin@insuredtrucking.com'

interface HandbookDownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HandbookDownloadModal({ isOpen, onClose }: HandbookDownloadModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append('email', email)
    formData.append('name', name || 'Not provided')
    formData.append('_subject', 'New Authority Insurance Handbook Download')
    formData.append('_captcha', 'false')
    formData.append('_template', 'table')
    formData.append('handbook', 'ATI New Authority Insurance Handbook')

    try {
      const response = await fetch(FORM_ACTION, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitted(true)
        // Trigger PDF download
        const link = document.createElement('a')
        link.href = '/ati-new-authority-insurance-handbook.pdf'
        link.download = 'ati-new-authority-insurance-handbook.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        setError('Failed to submit. Please try again or email darin@insuredtrucking.com directly.')
      }
    } catch (err) {
      setError('Failed to submit. Please try again or email darin@insuredtrucking.com directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setEmail('')
      setName('')
      setSubmitted(false)
      setError('')
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={handleClose}>
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-navy">
              {submitted ? 'Download Ready!' : 'Download Handbook'}
            </h2>
            <button
              onClick={handleClose}
              className="text-steel hover:text-navy transition-colors"
              disabled={isSubmitting}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {submitted ? (
            <div>
              <div className="mb-6">
                <svg className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-steel mb-4">
                  Your download should begin automatically. If it doesn&apos;t, click the button below.
                </p>
              </div>
              <a
                href="/ati-new-authority-insurance-handbook.pdf"
                download="ati-new-authority-insurance-handbook.pdf"
                className="btn-primary w-full block text-center mb-4"
              >
                Download PDF
              </a>
              <p className="text-sm text-steel text-center">
                Questions? Email{' '}
                <a href="mailto:darin@insuredtrucking.com" className="text-navy hover:underline font-semibold">
                  darin@insuredtrucking.com
                </a>
              </p>
            </div>
          ) : (
            <>
              <p className="text-steel mb-6">
                Enter your email to download the free <strong>New Authority Insurance Handbook</strong>. We&apos;ll send you the handbook and may follow up with helpful information about new authority insurance.
              </p>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-300 rounded-lg">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Name <span className="text-steel font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-xs text-steel">
                    <strong className="text-navy">Privacy:</strong> Your email is only used to send you the handbook and follow up about new authority insurance. We don&apos;t sell or share your information.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Handbook PDF'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
