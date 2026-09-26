import LivePreview from './LivePreview'

const projects = [
  {
    number: '01',
    title: 'FORM FORCE',
    category: 'EXPERIMENTAL DIGITAL EXPERIENCE',
    label: 'SELF-INITIATED CONCEPT',
    description:
      'An experimental digital experience exploring form, movement and structure through interaction.',
    url: 'https://form-force.vercel.app/',
  },
  {
    number: '02',
    title: 'MITTI & BEAN',
    category: 'HOSPITALITY / WEB',
    label: 'SELF-INITIATED CONCEPT',
    description:
      'A full-stack café website built around story, menu, space and reservations.',
    url: 'https://mitti-and-bean.vercel.app/',
  },
  {
    number: '03',
    title: 'RELAY',
    category: 'PRODUCT / SAAS',
    label: 'SELF-INITIATED CONCEPT',
    description:
      'A SaaS product experience focused on clear product communication, interface and conversion.',
    url: 'https://relay-saas-black.vercel.app/',
  },
]

function WorkSection() {
  return (
    <section className="work-section" id="work">
      <div className="work-section__inner">

        <header className="work-section__header">
          <span className="work-section__index section-index">
            04
          </span>

          <div className="work-section__intro">
            <span className="section-index">01</span>
            <h2>
              THINGS
              <br />
              WE MADE.
            </h2>

            <p>
              Three self-initiated concepts.
              Different problems. Different forms.
            </p>
          </div>
        </header>

        <div className="work-list">

          {projects.map((project, index) => (
            <article
              className={`work-project ${
                index === 0
                  ? 'work-project--featured'
                  : ''
              }`}
              key={project.title}
            >

              <div className="work-project__meta">
                <span>
                  {project.number}
                </span>

                <span>
                  {project.label}
                </span>
              </div>

              <div className="work-project__heading">
                <p className="work-project__category">
                  {project.category}
                </p>

                <h3>
                  {project.title}
                </h3>
              </div>

              <LivePreview
                src={project.url}
                title={project.title}
              />

              <div className="work-project__footer">
                <p>
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="work-project__link"
                >
                  VIEW PROJECT <span>↗</span>
                </a>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default WorkSection