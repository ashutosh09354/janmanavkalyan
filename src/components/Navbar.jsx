import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const desktopLinks = [
  { label: 'About', to: '/about' },
  { label: 'Our Work', to: '/work' },
  { label: 'Impact', to: '/#impact' },
  { label: 'Campaigns', to: '/campaigns' },
  { label: 'Stories', to: '/#stories' },
  { label: 'Get Involved', to: '/#get-involved' },
]

const mobileLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Work', to: '/work' },
  { label: 'Impact', to: '/#impact' },
  { label: 'Campaigns', to: '/campaigns' },
  { label: 'Stories', to: '/#stories' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Get Involved', to: '/#get-involved' },
  { label: 'Contact', to: '/contact' },
  { label: 'Legal Center', to: '/legal-center' },
  { label: 'Donate', to: '/donate' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  const desktopLinkClass = 'px-2 py-2 text-[13px] font-medium text-ink/75 transition hover:text-royal xl:px-2.5'
  return (
    <header className={`sticky top-0 z-40 w-full border-b border-ink/5 transition ${scrolled || open ? 'bg-white/95 shadow-soft backdrop-blur-md' : 'bg-white'}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2">Skip to content</a>
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Logo showText />
        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
          {desktopLinks.map((link) => <Link key={link.label} to={link.to} className={desktopLinkClass}>{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/donate" className="btn btn-royal hidden !min-h-10 !rounded-none !px-5 !py-2.5 !text-xs !uppercase !tracking-wider xl:inline-flex">Donate</Link>
          <button
            className="grid h-11 w-11 place-items-center text-royal xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-ink/10 bg-white xl:hidden"
          >
            <ul className="container-x grid grid-cols-2 gap-x-6 py-2">
              {mobileLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} onClick={() => setOpen(false)} className={`flex min-h-[48px] items-center border-b border-ink/5 text-sm font-medium ${link.label === 'Donate' ? 'text-leaf-700' : 'text-ink/80'}`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
