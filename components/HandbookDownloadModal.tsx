'use client'

import { useState } from 'react'

interface HandbookDownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HandbookDownloadModal({ isOpen, onClose }: HandbookDownloadModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [pdfUnlocked, setPdfUnlocked] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('email', email)
      if (name) {
        formData.append('name', name)
      }
      formData.append('_subject', 'New Authority Insurance Handbook Download')
      
      // Note: _captcha false requires FormSubmit form settings to allow it
      // If this doesn't work, remove _captcha parameter and Darin must configure
      // the form in FormSubmit dashboard to disable captcha
      formData.append('_captcha', 'false')

      const response = await fetch('https://formsubmit.co/ajax/darin@insuredtrucking.com', {
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
      // Only unlock PDF when success is explicitly true
      const success = data.success === true || data.success === 'true'
      
      if (success) {
        // Success - unlock PDF download
        setPdfUnlocked(true)
        
        // Trigger PDF download
        const link = document.createElement('a')
        link.href = '/new-authority-insurance-handbook.pdf'
        link.download = 'New-Authority-Insurance-Handbook.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        // FormSubmit returned success: false
        // This means form wasn't delivered - likely needs activation
        setError(
          data.message || 
          'Form submission failed. The FormSubmit form may need to be activated. ' +
          'Please check your email confirmation from FormSubmit or contact us directly at darin@insuredtrucking.com'
        )
      }
    } catch (err) {
      setError(
        'Unable to submit form. Please try again or email us directly at darin@insuredtrucking.com'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDownloadAgain = () => {
    const link = document.createElement('a')
    link.href = '/new-authority-insurance-handbook.pdf'
    link.download = 'New-Authority-Insurance-Handbook.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {pdfUnlocked ? (
          // Success state
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-navy mb-2">Download Started</h2>
            <p className="text-steel mb-6">
              Your handbook download should begin automatically. We&apos;ve notified Affordable Truck Insurance Inc so we can follow up with you.
            </p>
            <button
              onClick={handleDownloadAgain}
              className="btn-secondary mb-3 w-full"
            >
              Download Again
            </button>
            <button
              onClick={onClose}
              className="text-steel hover:text-navy text-sm"
            >
              Close
            </button>
          </div>
        ) : (
          // Form state
          <>
            <h2 className="text-2xl font-bold text-navy mb-2">
              Download the Handbook
            </h2>
            <p className="text-steel mb-6">
              Enter your email to download the handbook. We will notify Affordable Truck Insurance Inc so we can follow up.
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-300 rounded-lg">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent disabled:bg-gray-100"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent disabled:bg-gray-100"
                  placeholder="Your name"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Download Handbook'}
              </button>

              <p className="text-xs text-steel text-center">
                By downloading, you agree to receive follow-up from Affordable Truck Insurance Inc about your insurance needs.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
