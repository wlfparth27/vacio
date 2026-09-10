function LivePreview({ src, title }) {
  return (
    <div className="live-preview">
      <div className="live-preview__topbar">
        <div className="live-preview__signal" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="live-preview__address">
          <span>VOID / LIVE PREVIEW</span>
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
        <iframe
          src={src}
          title={`${title} live preview`}
          loading="lazy"
          allow="fullscreen"
          className="live-preview__frame"
        />

        <div className="live-preview__veil" aria-hidden="true" />

        <div className="live-preview__fallback">
          <p>Preview unavailable.</p>
          <a href={src} target="_blank" rel="noreferrer">
            OPEN PROJECT ↗
          </a>
        </div>
      </div>

      <div className="live-preview__rail" aria-hidden="true">
        <span>INTERACTIVE SPECIMEN</span>
        <span>SCROLL INSIDE TO EXPLORE</span>
        <span>↗</span>
      </div>
    </div>
  )
}

export default LivePreview
