function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-section__inner">

        <div className="about-section__index section-index">
          06
        </div>

        <div className="about-section__header">
          <h2>
            THREE PEOPLE.
            <br />
            ONE STUDIO.
          </h2>
        </div>

        <div className="about-section__intro">
          <p className="about-section__lead">
            Vacio. is an independent digital studio
            run by three college students in Dehradun.
          </p>

          <p className="about-section__body">
            We started Vacio. to make things that are
            interesting, useful and worth putting into
            the world.
          </p>
        </div>

        <div className="about-section__team">

          <article className="team-member">
            <span className="team-member__number">
              01
            </span>

            <div>
              <h3>PARTH</h3>
              <p>WEB / BACKEND</p>
            </div>
          </article>

          <article className="team-member">
            <span className="team-member__number">
              02
            </span>

            <div>
              <h3>RAKSHIT</h3>
              <p>CONTENT / DEVELOPMENT</p>
            </div>
          </article>

          <article className="team-member">
            <span className="team-member__number">
              03
            </span>

            <div>
              <h3>RAGHAV</h3>
              <p>DEVELOPMENT / SUPPORT</p>
            </div>
          </article>

        </div>

      </div>
    </section>
  )
}

export default AboutSection
