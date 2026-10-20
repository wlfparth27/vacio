import { useEffect, useRef, useState } from 'react'

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

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reducedMotion) {
      onComplete()
      return
    }

    setLeaving(true)
    timeoutRef.current = window.setTimeout(onComplete, 1050)
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
      <div className="void-intro__halo" aria-hidden="true" />

      <div className="void-intro__content">
        <h1 className="void-intro__sr-only" id="void-intro-title">
          Vacio.
        </h1>

        <img
          className="void-intro__logo"
          src="/vacio-hero-logo.png"
          alt=""
          aria-hidden="true"
        />

        <button
          ref={buttonRef}
          type="button"
          className="void-intro__button"
          onClick={handleTakeLeap}
          disabled={leaving}
        >
          Take the leap <span aria-hidden="true">↗</span>
        </button>
      </div>
    </div>
  )
}

export default VoidIntro
