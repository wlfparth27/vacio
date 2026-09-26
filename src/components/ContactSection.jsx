import { useState } from 'react'
import Reveal from './Reveal'

const FORM_ENDPOINT = 'https://formspree.io/f/xgaedlkd'

function ContactSection() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    setStatus('submitting')
    setError('')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(
          data?.errors?.map((item) => item.message).join(', ') ||
            'Unable to send your message.',
        )
      }

      form.reset()
      setStatus('success')
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Unable to send your message. Please try again.',
      )
      setStatus('error')
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__inner">
        <Reveal
          className="contact-section__index"
          delay={0}
          duration={600}
        >
          <div>09</div>
        </Reveal>

        <div className="contact-section__header">
          <Reveal
            className="contact-section__title-wrap reveal--mask"
            delay={80}
            duration={950}
          >
            <h2>
              WHAT SHOULD
              <br />
              WE CREATE
              <br />
              NEXT?
            </h2>
          </Reveal>

          <Reveal
            className="contact-section__intro reveal--focus"
            delay={180}
            duration={900}
          >
            <p className="contact-section__lead">
              Tell us what you're thinking.
            </p>

            <p className="contact-section__body">
              It doesn't need to be figured out yet.
            </p>
          </Reveal>
        </div>

        <Reveal
          className="reveal--preview contact-form-wrap"
          delay={140}
          duration={850}
        >
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: 'none' }}
            />

            <div className="contact-form__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="business">Business / Brand</label>
              <input
                id="business"
                name="business"
                type="text"
                placeholder="Your business or brand"
                autoComplete="organization"
              />
            </div>

            <div className="contact-form__field contact-form__field--select">
              <label htmlFor="project-type">What are you looking to build?</label>
              <div className="contact-form__select-wrap">
                <select id="project-type" name="project_type" defaultValue="" required>
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="Website">Website</option>
                  <option value="Content">Content</option>
                  <option value="Tools / Digital Solution">
                    Tools / Digital Solution
                  </option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
                <span className="contact-form__select-arrow" aria-hidden="true">↓</span>
              </div>
            </div>

            <div className="contact-form__field contact-form__field--select">
              <label htmlFor="budget">Budget</label>
              <div className="contact-form__select-wrap">
                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="Under ₹10k">Under ₹10k</option>
                  <option value="₹10–25k">₹10–25k</option>
                  <option value="₹25–45k">₹25–45k</option>
                  <option value="₹45k+">₹45k+</option>
                  <option value="Not sure">Not sure</option>
                </select>
                <span className="contact-form__select-arrow" aria-hidden="true">↓</span>
              </div>
            </div>

            <div className="contact-form__field contact-form__field--wide">
              <label htmlFor="message">Tell us about it</label>
              <textarea
                id="message"
                name="message"
                placeholder="What are you trying to make, improve or put into the world?"
                required
              />
            </div>

            {status === 'error' && (
              <p className="contact-form__status contact-form__status--error" role="alert">
                {error}
              </p>
            )}

            {status === 'success' && (
              <div className="contact-form__success" role="status">
                <p className="contact-form__status">
                  MESSAGE RECEIVED.
                </p>
                <p className="contact-form__success-copy">
                  Thanks. We&rsquo;ll get back to you soon.
                </p>
                <button
                  type="button"
                  className="contact-form__reset"
                  onClick={() => setStatus('idle')}
                >
                  SEND ANOTHER →
                </button>
              </div>
            )}

            {status !== 'success' && (
              <button
                className="contact-form__submit"
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting'
                  ? 'SENDING...'
                  : 'SEND IT INTO THE VOID →'}
              </button>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactSection
