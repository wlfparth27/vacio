import { useEffect, useState } from 'react'
import './App.css'
import './refinements.css'

import IdeaSection from './components/IdeaSection'
import ServicesSection from './components/ServicesSection'
import WorkSection from './components/WorkSection'
import GapSection from './components/GapSection'
import AboutSection from './components/AboutSection'
import WhyVoidSection from './components/WhyVoidSection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <nav
      className={`site-nav ${scrolled ? 'site-nav--floating' : ''} ${open ? 'site-nav--open' : ''}`}
      aria-label="Main navigation"
    >
      <a href="#home" className="site-nav__logo">
        VACIO.
      </a>

      <div className="site-nav__links" id="site-nav-links">
        <a href="#work" onClick={closeMenu}>WORK</a>
        <a href="#services" onClick={closeMenu}>SERVICES</a>
        <a href="#about" onClick={closeMenu}>ABOUT</a>
        <a href="#contact" onClick={closeMenu}>CONTACT</a>
      </div>

      <a href="#contact" className="site-nav__cta" onClick={closeMenu}>
        START A PROJECT <span>→</span>
      </a>

      <button
        type="button"
        className="site-nav__toggle"
        aria-expanded={open}
        aria-controls="site-nav-links"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'CLOSE' : 'MENU'}
      </button>
    </nav>
  )
}

function App() {
  return (
    <>
      <SiteNav />

      <a href="#main" className="skip-link">Skip to content</a>

      <main id="main" tabIndex={-1}>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero__grid">
            <div className="hero__content">
              <p className="hero__label">VACIO. / 001</p>

              <h1>
                GIVE IDEAS
                <br />
                SOMEWHERE
                <br />
                TO EXIST.
              </h1>

              <div className="hero__bottom">
                <div className="hero__info">
                  <p className="hero__description">
                    We design and build websites, content and practical digital tools for businesses and emerging brands.
                  </p>

                  <p className="hero__location">DEHRADUN, INDIA</p>
                </div>

                <div className="hero__actions">
                  <a href="#work" className="button button--primary">
                    SEE OUR WORK <span>↗</span>
                  </a>

                  <a href="#contact" className="button button--secondary">
                    START A PROJECT <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="hero__mark"
              aria-hidden="true"
              style={{
                left: '24%',
                right: 'auto',
              }}
            >
              <img
                src="/vacio-hero-logo.png"
                alt=""
                style={{
                  width: '78%',
                  marginLeft: 'auto',
                  filter: 'brightness(1.5)',
                }}
              />
            </div>
          </div>
        </section>

        {/* IDEA */}
        <IdeaSection />

        {/* WHAT WE MAKE */}
        <ServicesSection />

        {/* WORK */}
        <WorkSection />

        {/* THE GAP */}
        <GapSection />

        {/* ABOUT */}
        <AboutSection />

        {/* WHY VOID */}
        <WhyVoidSection />

        {/* PROCESS */}
        <ProcessSection />

        {/* CONTACT */}
        <ContactSection />

      </main>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default App
