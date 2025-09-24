import React, { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  FileText, 
  Briefcase,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Target,
  Award,
  Clock,
  DollarSign,
  MapPin,
  Globe
} from 'lucide-react'

interface AnalyticsData {
  totalViews: number
  totalUsers: number
  totalBlogs: number
  totalProjects: number
  totalJobs: number
  totalApplications: number
  monthlyGrowth: number
  revenue: number
  topPages: { page: string; views: number; growth: number }[]
  trafficSources: { source: string; percentage: number; visitors: number }[]
  userEngagement: { metric: string; value: number; change: number }[]
  geographicData: { country: string; visitors: number; percentage: number }[]
  timeSeriesData: { date: string; views: number; users: number; applications: number }[]
  deviceStats: { device: string; percentage: number; users: number }[]
  contentPerformance: { title: string; views: number; engagement: number; type: string }[]
}

const AnalyticsPage: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d' | '1y'>('30d')
  const [selectedMetric, setSelectedMetric] = useState<'views' | 'users' | 'applications'>('views')

  useEffect(() => {
    loadAnalyticsData()
  }, [selectedPeriod])

  const loadAnalyticsData = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const mockData: AnalyticsData = {
      totalViews: 15420,
      totalUsers: 3240,
      totalBlogs: 24,
      totalProjects: 18,
      totalJobs: 12,
      totalApplications: 156,
      monthlyGrowth: 23.5,
      revenue: 125000,
      topPages: [
        { page: 'Home', views: 5420, growth: 12.5 },
        { page: 'Services', views: 3200, growth: 8.3 },
        { page: 'Projects', views: 2800, growth: 15.7 },
        { page: 'Career', views: 2100, growth: 22.1 },
        { page: 'About', views: 1900, growth: 5.2 }
      ],
      trafficSources: [
        { source: 'Organic Search', percentage: 45, visitors: 1458 },
        { source: 'Direct', percentage: 25, visitors: 810 },
        { source: 'Social Media', percentage: 15, visitors: 486 },
        { source: 'Referral', percentage: 10, visitors: 324 },
        { source: 'Email', percentage: 5, visitors: 162 }
      ],
      userEngagement: [
        { metric: 'Average Session Duration', value: 4.2, change: 8.5 },
        { metric: 'Pages per Session', value: 3.8, change: 12.3 },
        { metric: 'Bounce Rate', value: 32.1, change: -5.2 },
        { metric: 'Return Visitor Rate', value: 28.7, change: 15.8 }
      ],
      geographicData: [
        { country: 'India', visitors: 8200, percentage: 52.8 },
        { country: 'United States', visitors: 2100, percentage: 13.5 },
        { country: 'United Kingdom', visitors: 1800, percentage: 11.6 },
        { country: 'Canada', visitors: 1200, percentage: 7.7 },
        { country: 'Australia', visitors: 900, percentage: 5.8 },
        { country: 'Others', visitors: 1220, percentage: 7.9 }
      ],
      timeSeriesData: [
        { date: '2024-01-01', views: 1200, users: 320, applications: 8 },
        { date: '2024-01-02', views: 1350, users: 380, applications: 12 },
        { date: '2024-01-03', views: 1100, users: 290, applications: 6 },
        { date: '2024-01-04', views: 1600, users: 420, applications: 15 },
        { date: '2024-01-05', views: 1800, users: 480, applications: 18 },
        { date: '2024-01-06', views: 2000, users: 520, applications: 22 },
        { date: '2024-01-07', views: 1900, users: 500, applications: 20 }
      ],
      deviceStats: [
        { device: 'Desktop', percentage: 55, users: 1782 },
        { device: 'Mobile', percentage: 35, users: 1134 },
        { device: 'Tablet', percentage: 10, users: 324 }
      ],
      contentPerformance: [
        { title: 'Healthcare Technology Trends 2024', views: 1250, engagement: 85, type: 'Blog' },
        { title: 'Multi-Specialty Hospital - Delhi', views: 980, engagement: 78, type: 'Project' },
        { title: 'Assistant Manager – Marketing', views: 756, engagement: 92, type: 'Job' },
        { title: 'Hospital Design Best Practices', views: 680, engagement: 73, type: 'Blog' },
        { title: 'Cardiac Care Center - Mumbai', views: 620, engagement: 81, type: 'Project' }
      ]
    }
    
    setAnalyticsData(mockData)
    setIsLoading(false)
  }

  const StatCard = ({ 
    title, 
    value, 
    icon: Icon, 
    color, 
    change, 
    changeType,
    subtitle 
  }: {
    title: string
    value: string | number
    icon: React.ElementType
    color: string
    change?: string
    changeType?: 'positive' | 'negative'
    subtitle?: string
  }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          {change && (
            <p className={`text-sm mt-2 flex items-center ${
              changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {changeType === 'positive' ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              {change}
            </p>
          )}
        </div>
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  )

  const LineChart = ({ data, metric }: { data: any[], metric: string }) => {
    const maxValue = Math.max(...data.map(d => d[metric]))
    const minValue = Math.min(...data.map(d => d[metric]))
    const range = maxValue - minValue

    return (
      <div className="h-64 relative">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((y, i) => (
            <line
              key={i}
              x1="40"
              y1={40 + (y / 100) * 120}
              x2="380"
              y2={40 + (y / 100) * 120}
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          ))}
          
          {/* Data line */}
          <polyline
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3"
            points={data.map((d, i) => {
              const x = 40 + (i / (data.length - 1)) * 340
              const y = 160 - ((d[metric] - minValue) / range) * 120
              return `${x},${y}`
            }).join(' ')}
          />
          
          {/* Area under curve */}
          <polygon
            fill="url(#gradient)"
            points={`40,160 ${data.map((d, i) => {
              const x = 40 + (i / (data.length - 1)) * 340
              const y = 160 - ((d[metric] - minValue) / range) * 120
              return `${x},${y}`
            }).join(' ')} 380,160`}
          />
          
          {/* Data points */}
          {data.map((d, i) => {
            const x = 40 + (i / (data.length - 1)) * 340
            const y = 160 - ((d[metric] - minValue) / range) * 120
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill="#3B82F6"
                className="hover:r-6 transition-all duration-200"
              />
            )
          })}
        </svg>
      </div>
    )
  }

  const BarChart = ({ data, title }: { data: any[], title: string }) => {
    const maxValue = Math.max(...data.map(d => d.value))
    
    return (
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-700">{title}</h4>
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-24 text-sm text-gray-600 truncate">{item.label}</div>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-out"
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="w-16 text-sm font-medium text-gray-900 text-right">{item.value}</div>
          </div>
        ))}
      </div>
    )
  }

  const PieChart = ({ data, title }: { data: any[], title: string }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0)
    let cumulativePercentage = 0

    return (
      <div className="text-center">
        <h4 className="text-sm font-medium text-gray-700 mb-4">{title}</h4>
        <div className="relative w-48 h-48 mx-auto">
          <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
            {data.map((item, index) => {
              const percentage = (item.value / total) * 100
              const startAngle = cumulativePercentage * 3.6
              const endAngle = (cumulativePercentage + percentage) * 3.6
              cumulativePercentage += percentage

              const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180)
              const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180)
              const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180)
              const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180)

              const largeArcFlag = percentage > 50 ? 1 : 0

              const pathData = [
                `M 50 50`,
                `L ${x1} ${y1}`,
                `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                'Z'
              ].join(' ')

              return (
                <path
                  key={index}
                  d={pathData}
                  fill={item.color}
                  className="transition-all duration-1000 ease-out"
                />
              )
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{total}</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
                <span className="text-gray-600">{item.label}</span>
              </div>
              <span className="font-medium text-gray-900">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading analytics...</p>
        </div>
      </div>
    )
  }

  if (!analyticsData) return null

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
              <p className="text-gray-600">Comprehensive insights into your website performance</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Views"
            value={analyticsData.totalViews.toLocaleString()}
            icon={Eye}
            color="bg-blue-500"
            change="+23.5%"
            changeType="positive"
            subtitle="This month"
          />
          <StatCard
            title="Total Users"
            value={analyticsData.totalUsers.toLocaleString()}
            icon={Users}
            color="bg-green-500"
            change="+18.2%"
            changeType="positive"
            subtitle="Unique visitors"
          />
          <StatCard
            title="Applications"
            value={analyticsData.totalApplications}
            icon={Briefcase}
            color="bg-purple-500"
            change="+31.7%"
            changeType="positive"
            subtitle="Job applications"
          />
          <StatCard
            title="Revenue"
            value={`₹${analyticsData.revenue.toLocaleString()}`}
            icon={DollarSign}
            color="bg-orange-500"
            change="+12.4%"
            changeType="positive"
            subtitle="This month"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Time Series Chart */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Traffic Overview</h3>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value as any)}
                className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="views">Views</option>
                <option value="users">Users</option>
                <option value="applications">Applications</option>
              </select>
            </div>
            <LineChart data={analyticsData.timeSeriesData} metric={selectedMetric} />
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Traffic Sources</h3>
            <PieChart
              data={analyticsData.trafficSources.map((source, index) => ({
                label: source.source,
                value: source.visitors,
                color: ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500'][index]
              }))}
              title=""
            />
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Top Pages */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Pages</h3>
            <BarChart
              data={analyticsData.topPages.map(page => ({
                label: page.page,
                value: page.views
              }))}
              title=""
            />
          </div>

          {/* Device Statistics */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Device Usage</h3>
            <PieChart
              data={analyticsData.deviceStats.map((device, index) => ({
                label: device.device,
                value: device.users,
                color: ['bg-blue-500', 'bg-green-500', 'bg-purple-500'][index]
              }))}
              title=""
            />
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Geographic Distribution</h3>
            <BarChart
              data={analyticsData.geographicData.slice(0, 5).map(geo => ({
                label: geo.country,
                value: geo.visitors
              }))}
              title=""
            />
          </div>
        </div>

        {/* Content Performance & User Engagement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Content Performance */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Content Performance</h3>
            <div className="space-y-4">
              {analyticsData.contentPerformance.map((content, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">{content.title}</p>
                    <p className="text-xs text-gray-500">{content.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{content.views} views</p>
                    <p className="text-xs text-gray-500">{content.engagement}% engagement</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Engagement */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">User Engagement</h3>
            <div className="space-y-4">
              {analyticsData.userEngagement.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{metric.metric}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm flex items-center ${
                      metric.change > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change > 0 ? (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 mr-1" />
                      )}
                      {Math.abs(metric.change)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage
