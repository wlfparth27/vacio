import { useEffect, useRef, useState } from 'react'

const logoFragments = [
  'northwest',
  'north',
  'northeast',
  'middle-left',
  'middle-right',
  'southwest',
  'south',
  'southeast',
]

function VoidIntro({ onComplete }) {
  const [leaving, setLeaving] = useState(false)
  const buttonRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    buttonRef.current?.focus({ preventScroll: true })

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleTakeLeap = () => {
    if (leaving) return

    document.body.classList.add('void-site-revealing')

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reducedMotion) {
      onComplete()
      return
    }

    setLeaving(true)
    timeoutRef.current = window.setTimeout(onComplete, 1700)
  }

  return (
    <div
      className={`void-intro ${leaving ? 'void-intro--leaving' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="void-intro-title"
      onKeyDown={(event) => {
        if (event.key === 'Tab') {
          event.preventDefault()
          buttonRef.current?.focus()
        }
      }}
    >
      <div className="void-intro__stars" aria-hidden="true" />
      <div className="void-intro__content">
        <h1 className="void-intro__sr-only" id="void-intro-title">
          Vacio.
        </h1>

        <div className="void-intro__logo-stage" aria-hidden="true">
          <img
            className="void-intro__logo"
            src="/vacio-hero-logo.png"
            alt=""
          />

          {logoFragments.map((fragment) => (
            <img
              key={fragment}
              className={`void-intro__fragment void-intro__fragment--${fragment}`}
              src="/vacio-hero-logo.png"
              alt=""
            />
          ))}
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="void-intro__button"
          onClick={handleTakeLeap}
          aria-disabled={leaving ? 'true' : undefined}
        >
          Take the leap <span aria-hidden="true">↗</span>
        </button>
      </div>
    </div>
  )
}

export default VoidIntro
