import { useRef, useState } from 'react'
import { ArrowUpRight, X } from '@/components/slab'
import { samples, type Sample } from '@/data/samples'

/**
 * SamplesGrid - the Projects view. One glass sheet with a card per sample.
 * A card opens the full-size image in a native <dialog>, which gives focus
 * handling and the Escape key for free. Edit the samples in src/data/samples.ts.
 */
export default function SamplesGrid() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState<Sample | null>(null)

  const open = (s: Sample) => {
    setActive(s)
    dialogRef.current?.showModal()
  }

  return (
    <section className="pgrid samples" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">
          Sample projects.
        </h1>
        <p className="pgrid__lede">
          Practice work that shows how I organize, schedule and design. Open a card to see it full size.
        </p>
      </header>

      <div className="home__glass samples__glass">
        <ul className="samples__grid" role="list">
          {samples.map((s) => (
            <li key={s.id}>
              <button type="button" className="sample" onClick={() => open(s)}>
                <span className={`sample__media${s.long || s.portrait ? ' sample__media--cropped' : ''}`}>
                  <img className="sample__img" src={s.image} alt={s.alt} loading="lazy" decoding="async" />
                  <span className="sample__cue" aria-hidden="true">
                    {s.cue ?? (s.gallery ? 'See all images' : s.long ? 'Full email: open to scroll' : s.portrait ? 'Open the full design' : 'View full size')}
                  </span>
                </span>
                <span className="sample__body">
                  <span className="sample__badge">{s.badge}</span>
                  <span className="sample__title">
                    {s.title}
                    <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                  </span>
                  <span className="sample__tagline">{s.tagline}</span>
                  <span className="sample__stats">
                    {s.stats.map((st) => (
                      <span key={st.label} className="sample__stat">
                        <strong>{st.value}</strong>
                        <span>{st.label}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="sample-dialog"
        aria-label={active ? active.title : 'Sample project'}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close()
        }}
      >
        {active && (
          <div className="sample-dialog__inner">
            <div className="sample-dialog__bar">
              <button
                type="button"
                className="sample-dialog__close"
                aria-label="Close"
                onClick={() => dialogRef.current?.close()}
              >
                <X size={18} weight="bold" aria-hidden="true" />
              </button>
            </div>
            {active.gallery ? (
              <div className={`sample-dialog__gallery${active.layout === 'grid' ? ' sample-dialog__gallery--grid' : ''}`}>
                {active.gallery.map((g) => (
                  <figure key={g.src} className="sample-dialog__figure">
                    <figcaption>{g.caption}</figcaption>
                    <img src={g.src} alt={g.alt} loading="lazy" decoding="async" />
                  </figure>
                ))}
              </div>
            ) : (
              <img
                className={`sample-dialog__img${active.portrait ? ' sample-dialog__img--portrait' : ''}${active.long ? ' sample-dialog__img--long' : ''}`}
                src={active.image}
                alt={active.alt}
              />
            )}
            <div className="sample-dialog__copy">
              <span className="sample__badge">{active.badge}</span>
              <h2 className="sample-dialog__title">{active.title}</h2>
              <p>{active.description}</p>
              <div className="sample__stats">
                {active.stats.map((st) => (
                  <span key={st.label} className="sample__stat">
                    <strong>{st.value}</strong>
                    <span>{st.label}</span>
                  </span>
                ))}
              </div>
              {active.url && (
                <a className="sample-dialog__link" href={active.url} target="_blank" rel="noopener noreferrer">
                  View the live sample <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
