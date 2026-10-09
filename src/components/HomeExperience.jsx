import { ArrowDownRight, ArrowRight, GraduationCap, HeartHandshake, HandHeart, Handshake } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { BLOOD_DONATION_IMAGE, IMPACT } from '../data/siteData'
import Photo from './Photo'
import Reveal from './Reveal'

const areas = [
  { title: 'Education', description: 'Learning support for children and families.', image: '/images/instsgram post/656649099_18120069895528037_1551288656074156068_n..webp', alt: 'Foundation activity supporting education and learning' },
  { title: 'Healthcare', description: 'Community health support and awareness.', image: '/images/instsgram post/656077685_18059426180691292_4985631946105061619_n..webp', alt: 'Foundation members gathered outside a hospital emergency department' },
  { title: 'Food & Nutrition', description: 'Food distribution and community care.', image: '/images/instsgram post/655987176_18069999431270939_3194857039852054680_n..webp', alt: 'Volunteers serving food at a community activity' },
  { title: 'Blood Donation', description: 'Blood donation activities that support those in need.', image: BLOOD_DONATION_IMAGE, alt: 'A Foundation volunteer donating blood' },
]

const process = [
  ['01', 'Identify', 'Listen to communities and understand local needs.'],
  ['02', 'Mobilize', 'Bring volunteers and neighbours together.'],
  ['03', 'Act', 'Turn shared intent into practical community action.'],
  ['04', 'Impact', 'Learn from the work and share verified outcomes.'],
]

const storyMoments = [
  {
    slug: 'blood-donation',
    image: BLOOD_DONATION_IMAGE,
    alt: 'A Foundation volunteer donating blood',
    label: 'Blood donation',
    title: 'When someone steps forward to donate.',
    text: 'A moment from a Foundation blood donation activity.',
    article: [
      'Blood donation is a practical way to support people who need blood. This photograph captures a Jan Manav Kalyan Foundation member donating at a blood bank.',
      'The Foundation has reported that 11 people donated blood at one camp. Each donation is a personal act of care, made possible by people choosing to show up for others.',
      'This story shares the moment visible in the photograph. Further details about the date, location and people supported have not been confirmed.',
    ],
  },
  {
    slug: 'community-meal',
    image: '/images/instsgram post/658380524_18309529420287319_7949303713269082549_n..webp',
    alt: 'Foundation volunteers preparing food at a community activity',
    label: 'Food distribution',
    title: 'A meal shared with the community.',
    text: 'Volunteers serve a meal together at a community activity.',
    article: [
      'Preparing and sharing a meal takes a collective effort. In this photograph, Foundation volunteers are at work around a community meal.',
      'Food distribution is one of the Foundation’s community activities. Moments like this show volunteers taking part in the hands-on work of preparing food to share.',
      'No event date, location or number of people served has been confirmed for this photograph.',
    ],
  },
  {
    slug: 'community-clean-up',
    image: '/images/instagram/insta3.webp',
    alt: 'Foundation volunteers gathered for a community clean-up',
    label: 'Community action',
    title: 'A cleaner neighbourhood starts together.',
    text: 'Foundation volunteers take part in a community clean-up.',
    article: [
      'A cleaner neighbourhood is a shared responsibility. This photograph shows Foundation volunteers gathered with cleaning tools for a community clean-up activity.',
      'Taking part together turns care for a shared place into practical action. The photograph records one moment of volunteers working towards a cleaner community.',
      'Specific details about the date, location and amount of waste collected have not been confirmed.',
    ],
  },
]

const galleryItems = [
  { image: '/images/instsgram post/655987176_18069999431270939_3194857039852054680_n..webp', alt: 'Volunteers serving food at a community activity', caption: 'Food distribution' },
  { image: BLOOD_DONATION_IMAGE, alt: 'A Foundation volunteer donating blood', caption: 'Blood donation' },
  { image: '/images/instagram/insta3.webp', alt: 'Foundation volunteers gathered for a community clean-up', caption: 'Community clean-up' },
  { image: '/images/hero/hero.jpeg', alt: 'Foundation volunteers gathered at a community meal', caption: 'Community meal' },
  { image: '/images/instsgram post/658380524_18309529420287319_7949303713269082549_n..webp', alt: 'Foundation members gathered at a community event', caption: 'Together in service' },
]

const involvement = [
  { icon: HeartHandshake, title: 'Donate', text: 'Support the Foundation’s community initiatives.', to: '/donate', action: 'Donate now' },
  { icon: HandHeart, title: 'Volunteer', text: 'Share your time, skills and care with the community.', to: '/contact#volunteer-form', action: 'Get involved' },
  { icon: Handshake, title: 'Partner with us', text: 'Explore ways to contribute alongside the Foundation.', to: '/contact#volunteer-form', action: 'Start a conversation' },
]

function SectionIntro({ eyebrow, title, text, light = false, id }) {
  return (
    <div className="mb-9 max-w-2xl sm:mb-12">
      <p className={`eyebrow ${light ? 'text-saffron' : ''}`}>{eyebrow}</p>
      <h2 id={id} className={`editorial-heading mt-3 ${light ? '!text-white' : ''}`}>{title}</h2>
      {text && <p className={`mt-4 max-w-xl text-base leading-relaxed ${light ? 'text-white/75' : 'text-ink/65'}`}>{text}</p>}
    </div>
  )
}

export function HomeHero() {
  return (
    <section className="home-hero relative isolate flex min-h-[590px] items-end overflow-hidden bg-royal sm:min-h-[610px] md:min-h-[620px] md:items-center">
      <Photo
        src="/images/hero/hero.jpeg"
        alt="Jan Manav Kalyan Foundation volunteers serving a community meal"
        eager
        position="center 45%"
        mobilePosition="78% center"
        className="absolute inset-0 z-0"
      />
      <div aria-hidden="true" className="home-hero-overlay absolute inset-0 z-10" />
      <div className="container-x relative z-20 w-full pb-12 pt-28 md:pb-16 md:pt-16">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 sm:text-sm">Janmanav Kalyan Foundation</p>
          <h1 className="max-w-5xl font-serif text-[clamp(2.4rem,4.5vw,3.9rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white">
            Building a Better Tomorrow,<br className="hidden sm:block" /> <span className="text-saffron">One Life at a Time</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Supporting communities through education, healthcare, food, blood donation and humanitarian initiatives.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/donate" className="btn btn-saffron !rounded-sm px-7">Donate now <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link to="/contact#volunteer-form" className="btn !rounded-sm border border-white/75 bg-white/5 px-7 text-white hover:bg-white hover:text-royal">Get involved</Link>
          </div>
          <a href="#impact" className="mt-12 hidden w-fit items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white md:flex">
            Discover our work <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="absolute bottom-5 right-6 z-20 hidden max-w-52 text-right text-sm text-white/80 lg:block">A community meal, shared by Foundation volunteers.</p>
    </section>
  )
}

export function ImpactSection() {
  return (
    <section id="impact" aria-labelledby="impact-heading" className="scroll-mt-24 bg-[#f2f0e9] py-12 sm:py-16">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Our impact</p>
            <h2 id="impact-heading" className="mt-2 font-serif text-3xl font-medium text-royal sm:text-4xl">Every effort counts.</h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink/65">Illustrative figures shown pending verification by the Foundation.</p>
        </div>
        <dl className="mt-8 grid grid-cols-2 gap-y-7 sm:mt-10 sm:grid-cols-4">
          {IMPACT.map((metric) => {
            const { label } = metric
            return (
              <div key={label} className="flex flex-col border-l-2 border-leaf/55 pl-4 sm:pl-5">
                <dt className="order-2 mt-3 max-w-[12rem] text-base font-medium leading-snug text-ink/75">{label}</dt>
                <dd className="order-1 font-serif text-5xl leading-none tracking-tight text-royal sm:text-6xl">{metric.value ?? '—'}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}

export function WhyWeExist() {
  return (
    <section aria-labelledby="why-heading" className="section-y sm:py-20">
      <div className="container-x grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-royal-50 lg:aspect-[1.2/1]">
            <Photo src="/images/about/About1.png" alt="Foundation volunteers gathered for a community clean-up activity" position="center 45%" />
          </div>
          <p className="mt-2 text-xs text-ink/50">Foundation volunteers at a community clean-up.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">Why we exist</p>
          <h2 id="why-heading" className="editorial-heading mt-3 lg:text-[3.2rem]">When communities come together, care becomes action.</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">The Foundation brings volunteers and community members together to respond to needs with practical acts of care—from food distribution and blood donation to education and healthcare support.</p>
          <Link to="/about" className="text-link mt-6 uppercase tracking-[0.08em]">Read our story <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </Reveal>
      </div>
    </section>
  )
}

export function AreasSection() {
  return (
    <section id="our-work" aria-labelledby="areas-heading" className="scroll-mt-24 bg-[#f2f0e9] py-14 sm:py-20">
      <div className="container-x">
        <SectionIntro id="areas-heading" eyebrow="Our areas of work" title="Care takes many forms." text="Community needs call for different kinds of care." />
        <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-12">
          {areas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.04} className="group">
              <Link to="/work" className="block focus-visible:outline-none">
                    {area.image ? (
                      <>
                        <div className="relative aspect-[1.2/1] overflow-hidden rounded-lg border border-[#d9ded8] bg-[#e7e4da]">
                          <Photo src={area.image} alt={area.alt} className="transition duration-500 group-hover:scale-[1.025]" />
                          <span className="absolute bottom-0 left-0 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-royal">{area.title}</span>
                        </div>
                        <div className="flex items-start justify-between gap-4 pt-3">
                          <div>
                            <h3 className="font-serif text-2xl font-medium text-royal sm:text-3xl">{area.title}</h3>
                            <p className="mt-2 text-base leading-relaxed text-ink/65">{area.description}</p>
                          </div>
                          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-royal transition group-hover:translate-x-1" aria-hidden="true" />
                        </div>
                      </>
                    ) : (
                      <div className="flex aspect-[1.2/1] flex-col justify-between rounded-lg border border-[#d9ded8] bg-gradient-to-br from-leaf-50 to-[#f6f3e9] p-6 sm:p-8">
                        <area.icon className="h-8 w-8 text-leaf" aria-hidden="true" />
                        <div>
                          <p className="eyebrow">A focus for community support</p>
                          <h3 className="mt-2 font-serif text-4xl font-medium text-royal sm:text-5xl">{area.title}</h3>
                          <p className="mt-3 max-w-sm text-base leading-relaxed text-ink/70 sm:text-lg">{area.description}</p>
                        </div>
                      </div>
                    )}
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-9"><Link to="/work" className="text-link">Explore all our work <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
      </div>
    </section>
  )
}

export function HowWeWork() {
  return (
    <section aria-labelledby="process-heading" className="section-y bg-white sm:py-20">
      <div className="container-x">
        <SectionIntro id="process-heading" eyebrow="How we work" title="From listening to lasting action." />
        <ol className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/15 pt-6 sm:grid-cols-4 sm:gap-6">
          {process.map(([number, title, text]) => (
            <li key={number} className="max-w-xs">
              <span className="font-serif text-5xl leading-none text-leaf sm:text-6xl">{number}</span>
              <h3 className="mt-4 font-serif text-2xl text-royal">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink/65">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function FeaturedCampaign() {
  return (
    <section id="campaigns" aria-labelledby="campaign-heading" className="scroll-mt-24 bg-[#153e59] py-10 text-white sm:py-14">
      <div className="container-x grid items-stretch gap-0 lg:grid-cols-[1.35fr_0.65fr]">
        <Reveal className="relative min-h-72 overflow-hidden rounded-lg border border-white/20 sm:min-h-[430px]">
          <Photo src="/images/hero/hero.jpeg" alt="Foundation volunteers serving a community meal" position="center 52%" />
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col justify-center px-0 py-7 sm:px-8 sm:py-10 lg:px-10">
          <p className="eyebrow text-saffron">Featured campaign</p>
          <h2 id="campaign-heading" className="mt-3 font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">A campaign to be announced.</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">Campaign details will be shared when confirmed by the Foundation.</p>
          <Link to="/campaigns" className="text-link mt-5 text-white">Read more <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </Reveal>
      </div>
    </section>
  )
}

export function StoriesSection() {
  return (
    <section id="stories" aria-labelledby="stories-heading" className="scroll-mt-24 section-y">
      <div className="container-x">
        <SectionIntro id="stories-heading" eyebrow="Stories from the field" title="Small moments. Shared purpose." />
        <div className="grid gap-8 md:grid-cols-3 md:gap-7">
          {storyMoments.map((story, index) => (
            <Reveal key={story.label} delay={index * 0.05}>
              <Link to={`/stories/${story.slug}`} className="group block">
                <div className="aspect-[1.12/1] overflow-hidden rounded-lg border border-[#d9ded8] bg-royal-50 sm:aspect-[1.2/1]">
                  <Photo src={story.image} alt={story.alt} className="transition duration-500 group-hover:scale-[1.025]" />
                </div>
                <p className="eyebrow mt-4">{story.label}</p>
                <h3 className="mt-2 font-serif text-2xl font-medium leading-snug text-royal">{story.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink/65">{story.text}</p>
                <span className="text-link mt-2 uppercase tracking-[0.08em]">Read story <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StoryArticlePage() {
  const { slug } = useParams()
  const story = storyMoments.find((item) => item.slug === slug)

  if (!story) {
    return (
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Story not found</p>
          <h1 className="editorial-heading mt-3">This story isn’t available.</h1>
          <Link to="/#stories" className="text-link mt-6"><ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" /> Back to stories</Link>
        </div>
      </section>
    )
  }

  return (
    <article className="section-y">
      <div className="container-x max-w-5xl">
        <Link to="/#stories" className="text-link mb-8"><ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" /> Back to stories</Link>
        <header className="mb-8 max-w-3xl sm:mb-10">
          <p className="eyebrow">{story.label}</p>
          <h1 className="editorial-heading mt-3 text-4xl sm:text-5xl lg:text-6xl">{story.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/65 sm:text-xl">{story.text}</p>
        </header>
        <figure className="overflow-hidden rounded-lg border border-[#d9ded8] bg-white shadow-soft">
          <div className="aspect-[4/3] max-h-[620px] sm:aspect-[16/9]">
            <Photo src={story.image} alt={story.alt} eager />
          </div>
          <figcaption className="px-4 py-3 text-sm text-ink/60 sm:px-6">{story.alt}</figcaption>
        </figure>
        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-ink/75 sm:mt-10 sm:text-lg">
          {story.article.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </article>
  )
}

export function CommunityGallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="scroll-mt-24 bg-[#f2f0e9] py-16 sm:py-20">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionIntro id="gallery-heading" eyebrow="Community gallery" title="A closer look at the work." />
          <Link to="/gallery" className="text-link mb-10 shrink-0 uppercase tracking-[0.08em]">View all photos <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <div className="grid auto-rows-[135px] grid-cols-2 gap-2.5 sm:auto-rows-[190px] sm:grid-cols-4 sm:gap-4 lg:auto-rows-[220px]">
          {galleryItems.map((item, index) => (
            <Reveal key={item.image} className={`${index === 0 ? 'col-span-2 row-span-2' : ''} group relative overflow-hidden rounded-lg border border-[#d9ded8] bg-white`}>
              <Photo src={item.image} alt={item.alt} className="transition duration-500 group-hover:scale-[1.025]" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-10 text-sm font-semibold text-white sm:px-4 sm:pb-4">{item.caption}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GetInvolved() {
  return (
    <section id="get-involved" aria-labelledby="involved-heading" className="scroll-mt-24 section-y">
      <div className="container-x">
        <SectionIntro id="involved-heading" eyebrow="Get involved" title="There is a place for you here." text="Be part of a community working towards a better tomorrow." />
        <div className="grid gap-8 pt-1 md:grid-cols-3 md:gap-10">
          {involvement.map(({ icon: Icon, title, text, to, action }) => (
            <article key={title} className="group">
              <Icon className="h-8 w-8 text-leaf" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-3xl text-royal">{title}</h3>
              <p className="mt-2 max-w-sm text-base leading-relaxed text-ink/65">{text}</p>
              <Link to={to} className="text-link mt-3">{action} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCallToAction() {
  return (
    <section className="bg-[#153e59] py-14 text-white sm:py-20">
      <div className="container-x flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
        <div>
          <p className="eyebrow text-saffron">Be part of what comes next</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl font-medium leading-tight text-white sm:text-6xl">Together, We Can Create Change.</h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">Give what you can. Be part of something meaningful.</p>
        </div>
        <Link to="/donate" className="btn btn-saffron shrink-0 !rounded-sm px-7">Donate now <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
    </section>
  )
}

export function CampaignsPage() {
  return (
    <section className="section-y">
      <div className="container-x max-w-4xl">
        <p className="eyebrow">Campaigns</p>
        <h1 className="editorial-heading mt-3">Community action, shared openly.</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/65">There are no current campaign details available to publish. This page will be updated when the Foundation confirms a campaign brief, dates and location.</p>
        <div className="mt-8 border-l-2 border-saffron bg-white px-5 py-4">
          <p className="font-semibold text-royal">Campaign details pending confirmation</p>
          <p className="mt-1 text-sm text-ink/60">No dates, locations or fundraising targets have been assumed.</p>
        </div>
        <Link to="/work" className="text-link mt-7">Explore documented activities <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
    </section>
  )
}
