'use client'
import { useState } from 'react'

export default function MailchimpFastForm() {
  const [formData, setFormData] = useState({ email: '', name: '', phone: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    try {
      const res = await fetch('/api/mailchimp-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSubmitted(true)
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setErrorMsg('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div style={{
        padding: '28px',
        backgroundColor: '#f0fdf4',
        border: '1px solid #86efac',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(22, 101, 52, 0.08)'
      }}>
        <div style={{ fontSize: '36px', marginBottom: '10px' }}>🎉</div>
        <h3 style={{ margin: '0 0 8px 0', color: '#166534', fontSize: '20px', fontWeight: '700' }}>
          Brochure Request Confirmed!
        </h3>
        <p style={{ margin: '0 0 12px 0', color: '#15803d', fontSize: '14px', lineHeight: '1.5' }}>
          Thank you, <strong>{formData.name}</strong>. Your details have been successfully synced to our Mailchimp audience list.
        </p>
        <p style={{ margin: '0', fontSize: '13px', color: '#4b5563' }}>
          Please check your inbox at <strong>{formData.email}</strong> for the brochure and price breakdown.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '14px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
      border: '1px solid #f1f5f9'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ margin: '0 0 6px 0', color: '#0f172a', fontSize: '20px', fontWeight: '700' }}>
          Download Project Brochure
        </h3>
        <p style={{ margin: '0', color: '#64748b', fontSize: '13.5px' }}>
          Enter your details below to receive the official master plan & pricing via Mailchimp.
        </p>
      </div>

      {errorMsg && (
        <div style={{
          backgroundColor: '#fef2f2',
          border: '1px solid #fecaca',
          color: '#b91c1c',
          padding: '10px 14px',
          borderRadius: '8px',
          marginBottom: '16px',
          fontSize: '13.5px'
        }}>
          {errorMsg}
        </div>
      )}

      <div style={{ marginBottom: '14px' }}>
        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600', color: '#334155' }}>
          Full Name <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <input 
          type="text" 
          required
          placeholder="e.g. Rahul Sharma"
          value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{
            width: '100%',
            padding: '11px 14px',
            fontSize: '14px',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border-color 0.2s',
            color: '#1e293b'
          }}
        />
      </div>

      <div style={{ marginBottom: '14px' }}>
        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600', color: '#334155' }}>
          Email Address <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <input 
          type="email" 
          required
          placeholder="e.g. rahul@example.com"
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{
            width: '100%',
            padding: '11px 14px',
            fontSize: '14px',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border-color 0.2s',
            color: '#1e293b'
          }}
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        style={{
          width: '100%',
          padding: '13px 20px',
          backgroundColor: loading ? '#94a3b8' : '#78350f',
          color: '#ffffff',
          fontSize: '14.5px',
          fontWeight: '600',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginTop: '8px',
          boxShadow: '0 4px 10px rgba(120, 53, 15, 0.25)',
          transition: 'all 0.2s ease'
        }}>
        {loading ? 'Sending to Mailchimp...' : 'Get Instant Brochure →'}
      </button>

      <p style={{ margin: '14px 0 0 0', textAlign: 'center', fontSize: '11.5px', color: '#94a3b8' }}>
        🔒 Your privacy is valued. No spam guaranteed.
      </p>
    </form>
  )
}
