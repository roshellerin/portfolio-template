import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Privacy Policy. Plain-language text that matches what this site does.
 * Review it, and have it checked if you start handling client data.
 */
export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: October 7, 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>This site is the portfolio of Roshelle B. Rin, a virtual assistant based in Zambales, Philippines. This policy applies to this website only.</p>

          <h2>What is collected</h2>
          <p>If you use the contact form, I receive the name, email address and message you type in. This site does not use advertising trackers or analytics. Your browser stores a few small settings on your own device, such as your light or dark theme and accessibility choices.</p>

          <h2>How it is used</h2>
          <p>I use your details only to reply to you and to discuss the work you ask about. I do not sell or share them. If a form service is connected to this site, it processes your message so it can reach me.</p>

          <h2>How long it is kept</h2>
          <p>I keep your messages only as long as needed to respond and to keep a record of our conversation. To have them deleted, email me and I will remove them.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
