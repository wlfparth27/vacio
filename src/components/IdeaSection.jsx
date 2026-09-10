import Reveal from './Reveal'

function IdeaSection() {
  return (
    <section className="idea-section" id="idea">
      <div className="idea-section__inner">

        <Reveal
          className="idea-section__index"
          delay={0}
          duration={600}
        >
          <div>002 / IDEA</div>
        </Reveal>

        <Reveal
          className="idea-section__statement reveal--mask"
          delay={80}
          duration={900}
        >
          <h2>
            EVERYTHING
            <br />
            STARTS
            <br />
            UNDEFINED.
          </h2>
        </Reveal>

        <Reveal
          className="idea-section__middle reveal--focus"
          delay={180}
          duration={1000}
        >
          <p>
            An idea is only the beginning.
          </p>
        </Reveal>

        <Reveal
          className="idea-section__conclusion reveal--mask"
          delay={160}
          duration={1000}
        >
          <div>
            <p className="idea-section__label">
              THE SPACE BEFORE
            </p>

            <h3>
              WE GIVE
              <br />
              IT FORM.
            </h3>
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default IdeaSection