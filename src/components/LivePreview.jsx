import { useState } from 'react'

function LivePreview({ src, title }) {
  const [active, setActive] = useState(false)

  return (
    <div className="live-preview">
      <div className="live-preview__topbar">
        <div className="live-preview__signal" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="live-preview__address">
          <span>VACIO. / LIVE PREVIEW</span>
        </div>

        <a
          className="live-preview__open"
          href={src}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${title} in a new tab`}
        >
          OPEN ↗
        </a>
      </div>

      <div className="live-preview__viewport">
        {active ? (
          <iframe
            src={src}
            title={`${title} live preview`}
            loading="lazy"
            allow="fullscreen"
            className="live-preview__frame"
          />
        ) : (
          <button
            type="button"
            className="live-preview__poster"
            onClick={() => setActive(true)}
            aria-label={`Load live preview of ${title}`}
          >
            <span className="live-preview__poster-title">{title}</span>
            <span className="live-preview__poster-cta">LOAD LIVE PREVIEW ↗</span>
          </button>
        )}

        <div className="live-preview__veil" aria-hidden="true" />
      </div>

      <div className="live-preview__rail" aria-hidden="true">
        <span>INTERACTIVE SPECIMEN</span>
        <span>{active ? 'SCROLL INSIDE TO EXPLORE' : 'CLICK TO LOAD PREVIEW'}</span>
        <span>↗</span>
      </div>
    </div>
  )
}

export default LivePreview
