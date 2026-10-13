import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Two bands, top to bottom: the three-step way of working (on a dark plate)
 * and the five services as cards that carry the marks of what each one uses.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Brief',
    body: 'You tell me what to take off your plate and how you like it done.',
    Icon: MagnetStraight,
    chips: ['Your goals', 'Your tools', 'Your preferences'],
  },
  {
    index: '02',
    label: 'Handle',
    body: 'I take care of the tasks on your schedule, checking the details as I go.',
    Icon: Timer,
    chips: ['Your schedule', 'Careful work', 'Double-checked'],
  },
  {
    index: '03',
    label: 'Report',
    body: 'You get a clear update and organized results, so you always know where things stand.',
    Icon: Trophy,
    chips: ['Clear updates', 'Organized files', 'Open to feedback'],
  },
]

/* ---------- The services ---------- */

const GWS = '/icons/googleworkspace.svg'
const INSTAGRAM = '/icons/instagram.svg'
const FACEBOOK = '/icons/facebook.svg'
const CANVA = '/icons/canva.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  /** Optional glyph tile, for a service with no brand mark (Canva). */
  Glyph?: Icon
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Email management',
    description: 'A clear inbox and replies that go out on time.',
    chip: 'Inbox',
    logos: [GWS],
    bullets: [
      'Sorting and labelling',
      'Draft replies for your approval',
      'Follow-ups so nothing slips',
    ],
  },
  {
    index: '02',
    title: 'Calendar management',
    description: "Schedules that don't clash.",
    chip: 'Schedule',
    logos: [GWS],
    bullets: ['Booking and rescheduling', 'Reminders', 'Scheduling across time zones'],
  },
  {
    index: '03',
    title: 'Social media handling',
    description: 'Light, consistent upkeep of your pages.',
    chip: 'Social',
    logos: [INSTAGRAM, FACEBOOK],
    bullets: [
      'Scheduling posts',
      'Replying to comments and messages',
      'Simple activity tracking',
    ],
  },
  {
    index: '04',
    title: 'Canva editing',
    description: 'Clean, simple graphics.',
    chip: 'Design',
    logos: [CANVA],
    bullets: ['Post graphics', 'Resizing and branded templates', 'Edits to existing designs'],
  },
  {
    index: '05',
    title: 'Data entry',
    description: 'Accurate, organized records.',
    chip: 'Data',
    logos: [GWS],
    bullets: ['Spreadsheet entry', 'Tidying lists', 'Double-checked results'],
  },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos, Glyph }: { logos: string[]; Glyph?: Icon }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
      {Glyph && (
        <span className="bento__logo">
          <Glyph size={22} weight="duotone" />
        </span>
      )}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Admin work, handled.
        </h1>
        <p className="pgrid__lede">
          Email, calendar, social media, Canva and data entry, done carefully so you can focus on your business.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I work</span>
            <h2 className="sgrid__method-title" id="method-title">
              One. Two. Three.
              <br />
              <span>Simple, from brief to done.</span>
            </h2>
            <p className="sgrid__method-sub">
              A clear routine, so your tasks get done the way you like them.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it uses. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">What I can take off your plate.</h2>
            <p className="sgrid__offers-sub">Five services, one reliable assistant.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} Glyph={s.Glyph} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
