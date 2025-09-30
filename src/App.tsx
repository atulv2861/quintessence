import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AdminLayout from './components/admin/AdminLayout'
import AuthGuard from './components/common/AuthGuard'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import JobsPage from './pages/JobsPage'
import JobDetailPage from './pages/JobDetailPage'
import ApplyPage from './pages/ApplyPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import UnauthorizedPage from './pages/UnauthorizedPage'
import DashboardPage from './pages/admin/DashboardPage'
import AdminBlogsPage from './pages/admin/BlogsPage'
import AdminProjectsPage from './pages/admin/ProjectsPage'
import AdminJobsPage from './pages/admin/JobsPage'
import UsersPage from './pages/admin/UsersPage'
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
      <Route path="/projects/:id" element={<Layout><ProjectDetailPage /></Layout>} />
      <Route path="/career/current-openings" element={<Layout><JobsPage /></Layout>} />
      <Route path="/career/job/:jobId" element={<Layout><JobDetailPage /></Layout>} />
      <Route path="/career/apply" element={<Layout><ApplyPage /></Layout>} />
      <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
      <Route path="/blog/:slug" element={<Layout><BlogDetailPage /></Layout>} />
      <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      
      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      
      {/* Admin Routes - Protected */}
      <Route path="/admin/dashboard" element={
        <AuthGuard requireAdmin={true}>
          <AdminLayout><DashboardPage /></AdminLayout>
        </AuthGuard>
      } />
      <Route path="/admin/blogs" element={
        <AuthGuard requireAdmin={true}>
          <AdminLayout><AdminBlogsPage /></AdminLayout>
        </AuthGuard>
      } />
      <Route path="/admin/projects" element={
        <AuthGuard requireAdmin={true}>
          <AdminLayout><AdminProjectsPage /></AdminLayout>
        </AuthGuard>
      } />
      <Route path="/admin/jobs" element={
        <AuthGuard requireAdmin={true}>
          <AdminLayout><AdminJobsPage /></AdminLayout>
        </AuthGuard>
      } />
      <Route path="/admin/users" element={
        <AuthGuard requireAdmin={true}>
          <AdminLayout><UsersPage /></AdminLayout>
        </AuthGuard>
      } />
      <Route path="/admin/settings" element={
        <AuthGuard requireAdmin={true}>
          <AdminLayout><SettingsPage /></AdminLayout>
        </AuthGuard>
      } />
      
      {/* 404 Route */}
      <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
    </Routes>
  )
}

export default App

