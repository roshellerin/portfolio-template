import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin, EnvelopeSimple, WhatsappLogo } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the portrait on the
 * right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it uses (any square SVG/PNG in public/).
 */

const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const INSTAGRAM = { src: '/icons/instagram.svg', name: 'Instagram' }
const FACEBOOK = { src: '/icons/facebook.svg', name: 'Facebook' }
const CANVA = { src: '/icons/canva.svg', name: 'Canva' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'Email and calendar', marks: [GWS] },
  { index: '02', title: 'Social media', marks: [INSTAGRAM, FACEBOOK] },
  { index: '03', title: 'Canva design', marks: [CANVA] },
  { index: '04', title: 'Data entry', marks: [GWS] },
]

const whatsapp = profile.socials.find((s) => s.label.startsWith('WhatsApp'))?.href ?? '#'

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          A virtual assistant for busy clients, based in Zambales, Philippines.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I keep the small things running
            <span> so you can focus on the big ones.</span>
          </p>

          <p className="agrid__note">
            I offer email management, calendar management, light social media, Canva edits and
            data entry, so busy clients have more time for the work that matters. I work
            carefully, communicate clearly, and treat your tasks as if they were my own.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <a className="agrid__cell" href={`mailto:${profile.email}`}>
              <span className="agrid__cell-mark">
                <EnvelopeSimple size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Email me</span>
                <span className="agrid__cell-meta">{profile.email}</span>
              </span>
            </a>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">UTC+8 · Philippines time</span>
              </span>
            </span>

            <a
              className="agrid__cell agrid__cell--wide"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <WhatsappLogo size={22} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Message me on WhatsApp</span>
                <span className="agrid__cell-meta">Tell me what you need help with</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt="Portrait of Roshelle B. Rin"
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
