import Reveal from './Reveal'

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__inner">
        <Reveal className="contact-section__index" delay={0} duration={600}>
          <div>009 / CONTACT</div>
        </Reveal>

        <div className="contact-section__header">
          <Reveal className="contact-section__title reveal--mask" delay={80} duration={900}>
            <h2>
              WHAT SHOULD
              <br />
              WE CREATE
              <br />
              NEXT?
            </h2>
          </Reveal>

          <Reveal className="contact-section__intro reveal--focus" delay={180} duration={900}>
            <p className="contact-section__lead">
              Tell us what you're thinking.
            </p>
            <p className="contact-section__body">
              It doesn't need to be figured out yet.
            </p>
          </Reveal>
        </div>

        <Reveal className="contact-form-wrap" delay={120} duration={900}>
          <form className="contact-form">
            <div className="contact-form__field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-business">Business / Brand</label>
              <input
                id="contact-business"
                name="business"
                type="text"
                autoComplete="organization"
                placeholder="Who are we building for?"
              />
            </div>

            <div className="contact-form__field contact-form__field--select">
              <label htmlFor="contact-project">What are you looking to build?</label>
              <div className="contact-form__select-wrap">
                <select id="contact-project" name="project">
                  <option value="">Choose one</option>
                  <option value="website">Website</option>
                  <option value="content">Content</option>
                  <option value="tools">Tools / Digital Solution</option>
                  <option value="unsure">Not sure yet</option>
                </select>
                <span className="contact-form__select-arrow" aria-hidden="true">↓</span>
              </div>
            </div>

            <div className="contact-form__field contact-form__field--select">
              <label htmlFor="contact-budget">Budget</label>
              <div className="contact-form__select-wrap">
                <select id="contact-budget" name="budget">
                  <option value="">Choose a range</option>
                  <option value="under-10">Under ₹10k</option>
                  <option value="10-25">₹10–25k</option>
                  <option value="25-45">₹25–45k</option>
                  <option value="45-plus">₹45k+</option>
                  <option value="unsure">Not sure</option>
                </select>
                <span className="contact-form__select-arrow" aria-hidden="true">↓</span>
              </div>
            </div>

            <div className="contact-form__field contact-form__field--wide">
              <label htmlFor="contact-message">Tell us about it</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="What are you thinking about building?"
                required
              />
            </div>

            <button className="contact-form__submit" type="submit">
              <span>SEND IT INTO THE VOID</span>
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactSection
