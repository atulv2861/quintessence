import React, { useState } from 'react'
import { 
  User, 
  Save, 
  Eye, 
  EyeOff,
  Bell,
  Shield,
  Globe,
  Key,
  Trash2,
  Camera,
  Settings as SettingsIcon
} from 'lucide-react'

interface UserProfile {
  id: string
  name: string
  email: string
  phone: string
  role: string
  avatar: string
  bio: string
  location: string
  joinDate: string
  lastLogin: string
}

interface SystemSettings {
  siteName: string
  siteDescription: string
  siteUrl: string
  adminEmail: string
  timezone: string
  language: string
  theme: 'light' | 'dark' | 'auto'
  notifications: {
    email: boolean
    push: boolean
    sms: boolean
  }
  security: {
    twoFactor: boolean
    sessionTimeout: number
    passwordExpiry: number
  }
}

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'account' | 'security' | 'notifications' | 'system'>('profile')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: '1',
    name: 'Dr. Nitin Garg',
    email: 'admin@sevenhealerconsultants.in',
    phone: '+91 9812692333',
    role: 'Administrator',
    avatar: '',
    bio: 'Founder & CEO of Seven Healer Consultants with 20+ years of experience in healthcare infrastructure planning.',
    location: 'New Delhi, India',
    joinDate: '2024-01-01',
    lastLogin: '2024-01-20'
  })

  const [systemSettings, setSystemSettings] = useState<SystemSettings>({
    siteName: 'Seven Healer Consultants',
    siteDescription: 'Transforming Healthcare Infrastructure',
    siteUrl: 'https://sevenhealerconsultants.in',
    adminEmail: 'admin@sevenhealerconsultants.in',
    timezone: 'Asia/Kolkata',
    language: 'en',
    theme: 'light',
    notifications: {
      email: true,
      push: true,
      sms: false
    },
    security: {
      twoFactor: false,
      sessionTimeout: 30,
      passwordExpiry: 90
    }
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleSaveProfile = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Show success message
  }

  const handleSaveSettings = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Show success message
  }

  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match')
      return
    }
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
    // Show success message
  }

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'account', name: 'Account', icon: SettingsIcon },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'system', name: 'System', icon: Globe }
  ]

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon className={`mr-3 h-5 w-5 ${
                        activeTab === tab.id ? 'text-blue-700' : 'text-gray-400'
                      }`} />
                      {tab.name}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                  
                  {/* Avatar Section */}
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <User className="w-12 h-12 text-white" />
                      </div>
                      <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <Camera className="w-4 h-4 text-white" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{userProfile.name}</h3>
                      <p className="text-gray-600">{userProfile.role}</p>
                      <p className="text-sm text-gray-500">Member since {new Date(userProfile.joinDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  {/* Profile Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={userProfile.name}
                        onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={userProfile.email}
                        onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={userProfile.phone}
                        onChange={(e) => setUserProfile({...userProfile, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        value={userProfile.location}
                        onChange={(e) => setUserProfile({...userProfile, location: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      <textarea
                        value={userProfile.bio}
                        onChange={(e) => setUserProfile({...userProfile, bio: e.target.value})}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={handleSaveProfile}
                      disabled={isLoading}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors disabled:opacity-50"
                    >
                      <Save className="w-4 h-4" />
                      <span>{isLoading ? 'Saving...' : 'Save Changes'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Account Tab */}
              {activeTab === 'account' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                      <input
                        type="text"
                        value={userProfile.role}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                      <input
                        type="text"
                        value={new Date(userProfile.joinDate).toLocaleDateString()}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Login</label>
                      <input
                        type="text"
                        value={new Date(userProfile.lastLogin).toLocaleString()}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h3 className="text-sm font-medium text-red-800 mb-2">Danger Zone</h3>
                    <p className="text-sm text-red-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2 transition-colors">
                      <Trash2 className="w-4 h-4" />
                      <span>Delete Account</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
                  
                  {/* Change Password */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={passwordData.currentPassword}
                            onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <div className="relative">
                          <input
                            type={showNewPassword ? 'text' : 'password'}
                            value={passwordData.newPassword}
                            onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          >
                            {showNewPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={passwordData.confirmPassword}
                            onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={handleChangePassword}
                        disabled={isLoading}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors disabled:opacity-50"
                      >
                        <Key className="w-4 h-4" />
                        <span>{isLoading ? 'Updating...' : 'Update Password'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Enable 2FA</p>
                        <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                      </div>
                      <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        systemSettings.security.twoFactor
                          ? 'bg-green-100 text-green-800 hover:bg-green-200'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}>
                        {systemSettings.security.twoFactor ? 'Enabled' : 'Enable'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Email Notifications</p>
                        <p className="text-sm text-gray-600">Receive notifications via email</p>
                      </div>
                      <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        systemSettings.notifications.email
                          ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}>
                        {systemSettings.notifications.email ? 'Enabled' : 'Disabled'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Push Notifications</p>
                        <p className="text-sm text-gray-600">Receive push notifications in browser</p>
                      </div>
                      <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        systemSettings.notifications.push
                          ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}>
                        {systemSettings.notifications.push ? 'Enabled' : 'Disabled'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">SMS Notifications</p>
                        <p className="text-sm text-gray-600">Receive notifications via SMS</p>
                      </div>
                      <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        systemSettings.notifications.sms
                          ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}>
                        {systemSettings.notifications.sms ? 'Enabled' : 'Disabled'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* System Tab */}
              {activeTab === 'system' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">System Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                        <input
                          type="text"
                          value={systemSettings.siteName}
                          onChange={(e) => setSystemSettings({...systemSettings, siteName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Site URL</label>
                        <input
                          type="url"
                          value={systemSettings.siteUrl}
                          onChange={(e) => setSystemSettings({...systemSettings, siteUrl: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
                        <input
                          type="email"
                          value={systemSettings.adminEmail}
                          onChange={(e) => setSystemSettings({...systemSettings, adminEmail: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                        <select
                          value={systemSettings.timezone}
                          onChange={(e) => setSystemSettings({...systemSettings, timezone: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="Asia/Kolkata">Asia/Kolkata</option>
                          <option value="UTC">UTC</option>
                          <option value="America/New_York">America/New_York</option>
                          <option value="Europe/London">Europe/London</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                      <textarea
                        value={systemSettings.siteDescription}
                        onChange={(e) => setSystemSettings({...systemSettings, siteDescription: e.target.value})}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={handleSaveSettings}
                      disabled={isLoading}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors disabled:opacity-50"
                    >
                      <Save className="w-4 h-4" />
                      <span>{isLoading ? 'Saving...' : 'Save Settings'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
