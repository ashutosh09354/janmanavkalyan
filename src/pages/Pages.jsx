import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import About from '../components/About'
import CausesSection from '../components/CausesSection'
import FeaturedActivity from '../components/FeaturedActivity'
import WorkSection from '../components/WorkSection'
import MediaSection from '../components/MediaSection'
import StoriesSection from '../components/StoriesSection'
import VolunteerSection from '../components/VolunteerSection'
import CTASection from '../components/CTASection'
import ContactForm from '../components/ContactForm'
import DonateSection from '../components/DonateSection'
import Gallery from '../components/Gallery'
import SectionHeading from '../components/SectionHeading'
import CauseCard from '../components/CauseCard'
import {
  AreasSection,
  CampaignsPage,
  CommunityGallery,
  FeaturedCampaign,
  FinalCallToAction,
  GetInvolved,
  HomeHero,
  HowWeWork,
  ImpactSection,
  StoriesSection as HomeStories,
  StoryArticlePage,
  WhyWeExist,
} from '../components/HomeExperience'
import LegalCenter from './LegalCenter'
import { CAUSES } from '../data/siteData'

const PAGE_TITLES = {
  '/': 'Building a Better Tomorrow',
  '/about': 'About Us',
  '/campaigns': 'Campaigns',
  '/causes': 'Our Causes',
  '/work': 'Our Work',
  '/stories': 'Community Story',
  '/media': 'Media',
  '/gallery': 'Community Gallery',
  '/contact': 'Contact',
  '/donate': 'Donate',
  '/legal-center': 'Legal Center',
}

const PAGE_DESCRIPTIONS = {
  '/': 'Janmanav Kalyan Foundation supports communities through education, healthcare, food distribution, blood donation and humanitarian initiatives.',
  '/about': 'Learn about the community-led work and mission of Janmanav Kalyan Foundation.',
  '/campaigns': 'Find campaign updates from Janmanav Kalyan Foundation. Campaign details are published when confirmed.',
  '/causes': 'Explore the community causes supported by Janmanav Kalyan Foundation.',
  '/work': 'Explore documented community activities by Janmanav Kalyan Foundation.',
  '/stories': 'Stories from Janmanav Kalyan Foundation community activities.',
  '/media': 'Read media coverage and updates about Janmanav Kalyan Foundation activities.',
  '/gallery': 'View photographs from Janmanav Kalyan Foundation community activities.',
  '/legal-center': 'Read the legal information and policy publication status for Janmanav Kalyan Foundation.',
  '/donate': 'Learn how to support the community initiatives of Janmanav Kalyan Foundation.',
  '/contact': 'Contact Janmanav Kalyan Foundation to ask a question or learn how to get involved.',
}

export const Home = () => (
  <>
    <HomeHero />
    <ImpactSection />
    <WhyWeExist />
    <AreasSection />
    <HowWeWork />
    <FeaturedCampaign />
    <HomeStories />
    <CommunityGallery />
    <GetInvolved />
    <FinalCallToAction />
  </>
)
export const AboutPage = () => (<><About full /><FeaturedActivity /><VolunteerSection /><CTASection /></>)
export const CausesPage = () => (
  <section className="section-y"><div className="container-x">
    <SectionHeading as="h1" title="Our Causes" subtitle="We work towards a stronger and more compassionate society." />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{CAUSES.map((c) => <CauseCard key={c.slug} {...c} to="/work" />)}</div>
  </div></section>
)
export const WorkPage = () => (<><WorkSection /><StoriesSection /><CTASection /></>)
export { StoryArticlePage }
export { CampaignsPage, LegalCenter }
export const MediaPage = () => (<><MediaSection /><CTASection /></>)
export const GalleryPage = () => (
  <section className="section-y overflow-x-clip"><div className="container-x"><SectionHeading as="h1" title="Community Gallery" subtitle="Photographs from Janmanav Kalyan Foundation activities." /><Gallery showFilters={false} /></div></section>
)
export const ContactPage = () => <ContactForm standalone />
export const DonatePage = () => (<><DonateSection /><CTASection /></>)
export const NotFound = () => (
  <section className="section-y text-center"><h1 className="text-3xl font-bold">Page not found</h1><Link to="/" className="btn btn-royal mt-6">Back to Home</Link></section>
)

export function ScrollManager({ pathname, hash }) {
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 80)
    else window.scrollTo(0, 0)
    const pageKey = pathname.startsWith('/stories/') ? '/stories' : pathname
    const title = `${PAGE_TITLES[pageKey] || 'Janmanav Kalyan Foundation'} | Janmanav Kalyan Foundation`
    const description = PAGE_DESCRIPTIONS[pageKey] || PAGE_DESCRIPTIONS['/']
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
  }, [pathname, hash])
  return null
}
