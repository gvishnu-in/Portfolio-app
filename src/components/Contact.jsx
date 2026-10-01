import { useState } from 'react'
import './Contact.css'

// Formspree endpoint — every submission forwards straight to your inbox,
// no backend of your own required. Formspree dashboard: https://formspree.io/forms
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpqzbre'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!formData.message.trim()) nextErrors.message = 'Message is required.'
    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    if (FORMSPREE_ENDPOINT.includes('your-form-id')) {
      // Formspree endpoint hasn't been set yet — see the note above.
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.target),
      })

      if (response.ok) {
        setStatus('sent')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">06 / Contact</span>
          <h2>Let's build something useful.</h2>
        </div>

        <div className="contact-layout">
          <div className="contact-copy">
            <p>Open to entry-level Full Stack Python Developer opportunities.</p>
            <a href="mailto:gv2047@gmail.com">gv2047@gmail.com</a>
            <a href="tel:+919573580365">+91 95735 80365</a>
            <a href="https://github.com/gvishnu-in" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/replace-with-your-linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
            <span>Hyderabad, India</span>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            aria-busy={status === 'sending'}
          >
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span className="form-error" id="name-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span className="form-error" id="email-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span className="form-error" id="message-error">
                {errors.message}
              </span>
            )}
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'sent' && (
            <p className="form-status" role="status">
              Thanks — your message is on its way to my inbox.
            </p>
          )}

          {status === 'error' && (
            <p className="form-status form-status-error" role="status">
              Your message could not be sent. Please try again or email me directly.
            </p>
          )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
