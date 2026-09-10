const steps = [
  {
    number: '01',
    title: 'EMPTY SPACE',
    description: 'We figure out what needs to exist.',
  },
  {
    number: '02',
    title: 'FORM',
    description: 'We decide what it should look and feel like.',
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'We make it real.',
  },
  {
    number: '04',
    title: 'REFINE',
    description: "We remove what doesn't belong.",
  },
  {
    number: '05',
    title: 'RELEASE',
    description: 'It leaves the void.',
  },
]

function ProcessSection() {
  return (
    <section className="process-section" id="process">
      <div className="process-section__inner">

        <div className="process-section__index">
          008 / PROCESS
        </div>

        <div className="process-section__header">
          <h2>
            FROM
            <br />
            NOTHING
            <br />
            TO REAL.
          </h2>

          <p>
            Everything starts undefined.
            The work is figuring out what comes next.
          </p>
        </div>

        <div className="process-list">
          {steps.map((step) => (
            <article
              className="process-step"
              key={step.number}
            >
              <span className="process-step__number">
                {step.number}
              </span>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

              <span
                className="process-step__marker"
                aria-hidden="true"
              >
                /
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProcessSection