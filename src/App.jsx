import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import { Home, AboutPage, CampaignsPage, CausesPage, LegalCenter, WorkPage, MediaPage, GalleryPage, ContactPage, DonatePage, NotFound, ScrollManager, StoryArticlePage } from './pages/Pages'

export default function App() {
  const { pathname, hash } = useLocation()
  return (
    <>
      <ScrollManager pathname={pathname} hash={hash} />
      <Navbar />
      <main id="main" tabIndex={-1} className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/causes" element={<CausesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/stories/:slug" element={<StoryArticlePage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/legal-center" element={<LegalCenter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
