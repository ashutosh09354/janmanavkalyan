import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import Logo from './Logo'
import { ORG, SOCIAL } from '../data/siteData'

const groups = [
  {
    title: 'About',
    links: [
      ['About Us', '/about'],
      ['Mission', '/about'],
      ['Impact', '/#impact'],
      ['Contact', '/contact'],
    ],
  },
  {
    title: 'Our Work',
    links: [
      ['Education', '/work'],
      ['Healthcare', '/work'],
      ['Food', '/work'],
      ['Blood Donation', '/work'],
    ],
  },
  {
    title: 'Get Involved',
    links: [
      ['Donate', '/donate'],
      ['Volunteer', '/contact#volunteer-form'],
      ['Partner', '/contact#volunteer-form'],
      ['Campaigns', '/campaigns'],
    ],
  },
]

const legalLinks = [
  ['Legal Center', '/legal-center'],
  ['Privacy Policy', '/legal-center#privacy'],
  ['Terms', '/legal-center#terms'],
  ['Donation Policy', '/legal-center#donations'],
  ['Refund/Cancellation', '/legal-center#refunds'],
  ['Disclaimer', '/legal-center#disclaimer'],
]

export default function Footer() {
  return (
    <footer className="bg-[#122a3a] pb-24 pt-14 text-white lg:pb-8">
      <div className="container-x">
        <div className="grid gap-9 border-b border-white/15 pb-9 sm:grid-cols-2 lg:grid-cols-[1.35fr_2fr] lg:gap-14">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-white/75">{ORG.mission}</p>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Janmanav Kalyan Foundation on Instagram" className="mt-4 inline-flex min-h-11 items-center gap-2 text-base text-white/85 transition hover:text-saffron">
              <Instagram className="h-5 w-5" aria-hidden="true" /> Instagram
            </a>
          </div>
          <div className="grid grid-cols-2 gap-7 sm:grid-cols-3">
            {groups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-white/65">{group.title}</h2>
                <ul className="space-y-3">
                  {group.links.map(([label, to]) => <li key={label}><Link to={to} className="text-base text-white/85 transition hover:text-saffron">{label}</Link></li>)}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="grid gap-4 py-5 sm:grid-cols-[auto_1fr] sm:items-center">
          <span className="text-sm font-semibold uppercase tracking-[0.1em] text-white/65">Legal</span>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-3">
            {legalLinks.map(([label, to]) => <Link key={label} to={to} className="text-sm text-white/80 transition hover:text-saffron">{label}</Link>)}
          </nav>
        </div>
        <p className="border-t border-white/15 pt-4 text-sm text-white/65">© 2026 Janmanav Kalyan Foundation. All rights reserved.</p>
      </div>
    </footer>
  )
}
