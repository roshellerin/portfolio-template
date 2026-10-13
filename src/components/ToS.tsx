import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Terms of Service. Plain-language terms; review them before you take on clients.
 */
export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: October 7, 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>This site is provided for information about my services. Please use it lawfully and do not try to disrupt it. I may update the site or these terms at any time.</p>

          <h2>Work and payment</h2>
          <p>Before any work starts, we agree in writing on the tasks, schedule and price. Work is delivered as agreed, and any change to the scope is confirmed with you first.</p>

          <h2>Ownership</h2>
          <p>The content on this site, including text, layout and sample projects, belongs to me unless stated otherwise. Work I complete for you is yours once it is paid for, unless we agree otherwise.</p>

          <h2>Liability</h2>
          <p>I take care with every task, but I cannot guarantee specific business results. To the extent the law allows, my liability is limited to the amount you paid for the work in question.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
