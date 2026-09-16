import { useEffect, useState } from 'react'
import './App.css'

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

  return (
    <nav
      className={`site-nav ${scrolled ? 'site-nav--floating' : ''}`}
      aria-label="Main navigation"
    >
      <a href="#home" className="site-nav__logo">
        VACIO.
      </a>

      <div className="site-nav__links">
        <a href="#work">WORK</a>
        <a href="#services">SERVICES</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>

      <a href="#contact" className="site-nav__cta">
        START A PROJECT <span>→</span>
      </a>
    </nav>
  )
}

function App() {
  return (
    <>
      <SiteNav />

      <main>
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

            <div className="hero__mark" aria-hidden="true">
              <img
                src="/vacio-hero-logo.png"
                alt=""
                style={{
                  width: '78%',
                  marginLeft: 'auto',
                  filter: 'brightness(1.35)',
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

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  )
}

export default App
