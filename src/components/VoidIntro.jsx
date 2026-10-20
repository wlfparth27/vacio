import { useEffect, useRef, useState } from 'react'

function VoidIntro({ onComplete }) {
  const [leaving, setLeaving] = useState(false)
  const [revealing, setRevealing] = useState(false)
  const buttonRef = useRef(null)
  const stageRef = useRef(null)
  const logoRef = useRef(null)
  const canvasRef = useRef(null)
  const timeoutRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    buttonRef.current?.focus({ preventScroll: true })

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!leaving) return undefined

    const stage = stageRef.current
    const logo = logoRef.current
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!stage || !logo || !canvas || !context || !logo.complete || !logo.naturalWidth) {
      return undefined
    }

    const bounds = stage.getBoundingClientRect()
    const width = bounds.width
    const height = bounds.height
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)

    canvas.width = Math.max(1, Math.round(width * pixelRatio))
    canvas.height = Math.max(1, Math.round(height * pixelRatio))
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

    const sourceCanvas = document.createElement('canvas')
    sourceCanvas.width = canvas.width
    sourceCanvas.height = canvas.height

    const sourceContext = sourceCanvas.getContext('2d', {
      willReadFrequently: true,
    })

    if (!sourceContext) return undefined

    const scale = Math.min(
      sourceCanvas.width / logo.naturalWidth,
      sourceCanvas.height / logo.naturalHeight,
    )
    const imageWidth = logo.naturalWidth * scale
    const imageHeight = logo.naturalHeight * scale
    const imageX = (sourceCanvas.width - imageWidth) / 2
    const imageY = (sourceCanvas.height - imageHeight) / 2

    sourceContext.drawImage(logo, imageX, imageY, imageWidth, imageHeight)

    let pixels

    try {
      pixels = sourceContext.getImageData(
        0,
        0,
        sourceCanvas.width,
        sourceCanvas.height,
      ).data
    } catch {
      return undefined
    }

    const particles = []
    const sampleStep = Math.max(3, Math.round(3.2 * pixelRatio))

    for (let y = 0; y < sourceCanvas.height; y += sampleStep) {
      for (let x = 0; x < sourceCanvas.width; x += sampleStep) {
        const pixelIndex = (y * sourceCanvas.width + x) * 4
        const red = pixels[pixelIndex]
        const green = pixels[pixelIndex + 1]
        const blue = pixels[pixelIndex + 2]
        const alpha = pixels[pixelIndex + 3] / 255
        const luminance = red * 0.299 + green * 0.587 + blue * 0.114

        // Sample only the brighter logo pixels; the dark rectangular source
        // background never becomes dust.
        if (luminance < 92 || alpha < 0.08) continue
        if (Math.random() < 0.13) continue

        const particleX = x / pixelRatio
        const particleY = y / pixelRatio
        const horizontal = (particleX - width / 2) / Math.max(width / 2, 1)
        const vertical = (particleY - height / 2) / Math.max(height / 2, 1)

        particles.push({
          x: particleX,
          y: particleY,
          vx: (Math.random() - 0.5) * 32 + horizontal * 20,
          vy: -8 - Math.random() * 26 + vertical * 8,
          drift: 2 + Math.random() * 12,
          phase: Math.random() * Math.PI * 2,
          delay: Math.random() * 0.16,
          size: 0.35 + Math.random() * 1.15,
          alpha: alpha * (0.45 + Math.random() * 0.5),
        })
      }
    }

    const startedAt = performance.now()
    const duration = 5600

    const drawDust = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)

      context.clearRect(0, 0, width, height)

      for (const particle of particles) {
        const localProgress = Math.max(
          0,
          Math.min(1, (progress - particle.delay) / (1 - particle.delay)),
        )

        if (localProgress <= 0) continue

        const swirl = Math.sin(
          particle.phase + localProgress * Math.PI * 3,
        ) * particle.drift * localProgress
        const x = particle.x + particle.vx * localProgress + swirl
        const y =
          particle.y +
          particle.vy * localProgress -
          12 * localProgress * localProgress +
          Math.cos(particle.phase + localProgress * 5) *
            particle.drift *
            0.4 *
            localProgress
        const fadeIn = Math.min(1, localProgress * 7)
        const fadeOut = Math.pow(1 - localProgress, 1.45)
        const particleAlpha = particle.alpha * fadeIn * fadeOut

        if (particleAlpha <= 0.005) continue

        context.fillStyle = `rgba(245, 245, 242, ${particleAlpha})`
        context.fillRect(x, y, particle.size, particle.size)
      }

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(drawDust)
      } else {
        canvas.style.opacity = '0'
      }
    }

    frameRef.current = window.requestAnimationFrame(drawDust)

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
  }, [leaving])

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

    // Start the website reveal as the dust fade finishes, with no extra hold.
    timeoutRef.current = window.setTimeout(() => {
      document.body.classList.add('void-site-revealing')
      setRevealing(true)

      timeoutRef.current = window.setTimeout(onComplete, 6500)
    }, 6250)
  }

  return (
    <div
      className={`void-intro ${leaving ? 'void-intro--leaving' : ''} ${revealing ? 'void-intro--revealing' : ''}`}
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

        <div ref={stageRef} className="void-intro__logo-stage" aria-hidden="true">
          <img
            ref={logoRef}
            className="void-intro__logo"
            src="/vacio-hero-logo.png"
            alt=""
          />
          <canvas
            ref={canvasRef}
            className="void-intro__dust-canvas"
            aria-hidden="true"
          />
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
