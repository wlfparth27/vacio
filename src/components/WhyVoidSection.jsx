function WhyVoidSection() {
  const principles = [
    {
      number: '01',
      title: 'DIRECT',
      description: 'You talk to the people doing the work.',
    },
    {
      number: '02',
      title: 'INVOLVED',
      description: 'We stay close to the project from idea to launch.',
    },
    {
      number: '03',
      title: 'FAST',
      description: 'Less hierarchy. Faster iteration.',
    },
    {
      number: '04',
      title: 'CURIOUS',
      description: 'We like figuring things out.',
    },
  ]

  return (
    <section className="why-void-section" id="why-void">
      <div className="why-void-section__inner">

        <div className="why-void-section__index section-index">
          07
        </div>

        <div className="why-void-section__header">
          <h2>
            SMALL
            <br />
            BY
            <br />
            DESIGN.
          </h2>

          <p>
            Three people means fewer layers between
            the idea and the people making it.
          </p>
        </div>

        <div className="principles-list">
          {principles.map((principle) => (
            <article
              className="principle"
              key={principle.number}
            >
              <span className="principle__number">
                {principle.number}
              </span>

              <h3>
                {principle.title}
              </h3>

              <p>
                {principle.description}
              </p>

              <span
                className="principle__arrow"
                aria-hidden="true"
              >
                →
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyVoidSection