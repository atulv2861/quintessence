import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AdminLayout from './components/admin/AdminLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProjectsPage from './pages/ProjectsPage'
import JobsPage from './pages/JobsPage'
import JobDetailPage from './pages/JobDetailPage'
import ApplyPage from './pages/ApplyPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/admin/DashboardPage'
import AdminBlogsPage from './pages/admin/BlogsPage'
import AdminProjectsPage from './pages/admin/ProjectsPage'
import AdminJobsPage from './pages/admin/JobsPage'
import UsersPage from './pages/admin/UsersPage'
import AnalyticsPage from './pages/admin/AnalyticsPage'
import SettingsPage from './pages/admin/SettingsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/about" element={<Layout><AboutPage /></Layout>} />
      <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
      <Route path="/services/:slug" element={<Layout><ServiceDetailPage /></Layout>} />
      <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
      <Route path="/career/current-openings" element={<Layout><JobsPage /></Layout>} />
      <Route path="/career/job/:jobId" element={<Layout><JobDetailPage /></Layout>} />
      <Route path="/career/apply" element={<Layout><ApplyPage /></Layout>} />
      <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
      <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      
      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      
      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminLayout><DashboardPage /></AdminLayout>} />
      <Route path="/admin/blogs" element={<AdminLayout><AdminBlogsPage /></AdminLayout>} />
      <Route path="/admin/projects" element={<AdminLayout><AdminProjectsPage /></AdminLayout>} />
      <Route path="/admin/jobs" element={<AdminLayout><AdminJobsPage /></AdminLayout>} />
      <Route path="/admin/users" element={<AdminLayout><UsersPage /></AdminLayout>} />
      <Route path="/admin/analytics" element={<AdminLayout><AnalyticsPage /></AdminLayout>} />
      <Route path="/admin/settings" element={<AdminLayout><SettingsPage /></AdminLayout>} />
      
      {/* 404 Route */}
      <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
    </Routes>
  )
}

export default App

