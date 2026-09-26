function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-section__inner">

        <div className="services-section__header">
          <span className="services-section__index section-index">
            03
          </span>

          <span className="section-index">02</span>
          <h2>
            WHAT
            <br />
            WE MAKE
          </h2>
        </div>

        <div className="services-list">

          {/* WEB */}
          <article className="service service--featured">
            <div className="service__number">
              01
            </div>

            <div className="service__main">
              <div className="service__heading">
                <span className="service__label">
                  FLAGSHIP
                </span>

                <h3>WEB</h3>
              </div>

              <p className="service__description">
                Give the idea somewhere to exist.
              </p>
            </div>

            <div className="service__details">
              <p>
                Landing pages, business websites and
                custom digital experiences.
              </p>

              <span className="service__arrow">
                →
              </span>
            </div>
          </article>

          {/* CONTENT */}
          <article className="service">
            <div className="service__number">
              02
            </div>

            <div className="service__main">
              <div className="service__heading">
                <h3>CONTENT</h3>
              </div>

              <p className="service__description">
                Give the idea something to say.
              </p>
            </div>

            <div className="service__details">
              <p>
                Short-form video, captions, creative
                direction and visual storytelling.
              </p>

              <span className="service__arrow">
                →
              </span>
            </div>
          </article>

          {/* TOOLS */}
          <article className="service">
            <div className="service__number">
              03
            </div>

            <div className="service__main">
              <div className="service__heading">
                <h3>TOOLS</h3>
              </div>

              <p className="service__description">
                Make the work around it easier.
              </p>
            </div>

            <div className="service__details">
              <p>
                Automations, dashboards, workflows,
                prototypes and small digital solutions.
              </p>

              <span className="service__arrow">
                →
              </span>
            </div>
          </article>

        </div>

      </div>
    </section>
  )
}

export default ServicesSection