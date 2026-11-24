import { Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { SiteLayout } from './components/layout/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { ContactPage } from './pages/ContactPage'
import { CaseStudyPage } from './pages/CaseStudyPage'
import { WorkPage } from './pages/WorkPage'
import { HomePage } from './pages/HomePage'
import { NewWebsitePage } from './pages/NewWebsitePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ServicesPage } from './pages/ServicesPage'
import { WebsiteLeakCheckPage } from './pages/WebsiteLeakCheckPage'
import { WebsiteImprovementsPage } from './pages/WebsiteImprovementsPage'
import { WebsiteRebuildPage } from './pages/WebsiteRebuildPage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/new-website" element={<NewWebsitePage />} />
          <Route path="services/website-leak-check" element={<WebsiteLeakCheckPage />} />
          <Route path="services/website-improvements" element={<WebsiteImprovementsPage />} />
          <Route path="services/website-rebuild" element={<WebsiteRebuildPage />} />
          <Route path="services/:serviceSlug" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/:projectSlug" element={<CaseStudyPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:postSlug" element={<BlogPostPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
