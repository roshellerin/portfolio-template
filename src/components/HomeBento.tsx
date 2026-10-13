import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Stack,
  EnvelopeSimple,
  CalendarBlank,
  ShareNetwork,
  Table,
} from '@/components/slab'
import { samples } from '@/data/samples'
import { profile } from '@/data/profile'

/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds, each built from content the portfolio already ships. Every card is
 * a link. Nothing here invents a fact - the funnels, the tools, the clients
 * and the credentials are the same records the views render in full.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */


// The reel loops, so it needs enough frames to fill the card.
const PROJECT_SHOTS = Array.from({ length: 4 }, (_, i) => samples[i % samples.length])

type Offer = { Icon?: typeof FolderOpen; logo?: string; title: string; note: string }

const OFFERS: Offer[] = [
  { Icon: EnvelopeSimple, title: 'Email management', note: 'A clear inbox, replies on time' },
  { Icon: CalendarBlank, title: 'Calendar management', note: "Schedules that don't clash" },
  { Icon: ShareNetwork, title: 'Social media handling', note: 'Light, consistent upkeep' },
  { logo: '/icons/canva.svg', title: 'Canva editing', note: 'Clean, simple graphics' },
  { Icon: Table, title: 'Data entry', note: 'Accurate, organized records' },
]

const PHOTOS = [profile.avatarSrc]

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Projects: the funnel thumbnails drift upward on a looped track. */}
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Projects" desc="Practice samples that show how I work." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_SHOTS, ...PROJECT_SHOTS].map((sample, i) => (
              <span key={i} className="bento__shot">
                <img src={sample.image} alt="" loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* About: a fanned stack of photos. */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="Virtual assistant in Zambales, Philippines." />
        <div className="bento__media bento__fan" aria-hidden="true">
          {PHOTOS.map((src, i) => (
            <span key={src} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      {/* Services: the five offers as a compact index. */}
      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Services" desc="Five ways I can help busy clients." />
        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ Icon, logo, title, note }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                {logo ? (
                  <img src={logo} alt="" width={15} height={15} decoding="async" />
                ) : (
                  Icon && <Icon size={15} weight="duotone" aria-hidden="true" />
                )}
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{note}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>
    </nav>
  )
}
