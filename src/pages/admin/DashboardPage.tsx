import React, { useState, useEffect } from 'react'
import { 
  Users, 
  FileText, 
  Briefcase, 
  TrendingUp, 
  Eye, 
  Plus,
  BarChart3
} from 'lucide-react'

interface DashboardStats {
  totalBlogs: number
  totalProjects: number
  totalJobs: number
  totalViews: number
  monthlyGrowth: number
  revenue: number
}

const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalBlogs: 0,
    totalProjects: 0,
    totalJobs: 0,
    totalViews: 0,
    monthlyGrowth: 0,
    revenue: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const loadDashboardData = async () => {
      setIsLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setStats({
        totalBlogs: 24,
        totalProjects: 18,
        totalJobs: 12,
        totalViews: 15420,
        monthlyGrowth: 23.5,
        revenue: 125000
      })
      setIsLoading(false)
    }

    loadDashboardData()
  }, [])

  const StatCard = ({ 
    title, 
    value, 
    icon: Icon, 
    color, 
    change, 
    changeType 
  }: {
    title: string
    value: string | number
    icon: React.ElementType
    color: string
    change?: string
    changeType?: 'positive' | 'negative'
  }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm mt-2 flex items-center ${
              changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              <TrendingUp className="w-4 h-4 mr-1" />
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

  const ChartCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  )

  const SimpleBarChart = ({ data }: { data: { label: string, value: number, color: string }[] }) => (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="w-20 text-sm text-gray-600">{item.label}</div>
          <div className="flex-1 mx-4">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                style={{ width: `${(item.value / Math.max(...data.map(d => d.value))) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="w-12 text-sm font-medium text-gray-900">{item.value}</div>
        </div>
      ))}
    </div>
  )

  const SimplePieChart = ({ data }: { data: { label: string, value: number, color: string }[] }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0)
    let cumulativePercentage = 0

    return (
      <div className="flex items-center justify-center">
        <div className="relative w-48 h-48">
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
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your content.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Blogs"
            value={stats.totalBlogs}
            icon={FileText}
            color="bg-blue-500"
            change="+12% this month"
            changeType="positive"
          />
          <StatCard
            title="Active Projects"
            value={stats.totalProjects}
            icon={Briefcase}
            color="bg-green-500"
            change="+8% this month"
            changeType="positive"
          />
          <StatCard
            title="Job Openings"
            value={stats.totalJobs}
            icon={Users}
            color="bg-purple-500"
            change="+5% this month"
            changeType="positive"
          />
          <StatCard
            title="Total Views"
            value={stats.totalViews.toLocaleString()}
            icon={Eye}
            color="bg-orange-500"
            change="+23% this month"
            changeType="positive"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Content Distribution */}
          <ChartCard title="Content Distribution">
            <SimplePieChart
              data={[
                { label: 'Blogs', value: stats.totalBlogs, color: '#3B82F6' },
                { label: 'Projects', value: stats.totalProjects, color: '#10B981' },
                { label: 'Jobs', value: stats.totalJobs, color: '#8B5CF6' }
              ]}
            />
            <div className="mt-4 space-y-2">
              {[
                { label: 'Blogs', value: stats.totalBlogs, color: 'bg-blue-500' },
                { label: 'Projects', value: stats.totalProjects, color: 'bg-green-500' },
                { label: 'Jobs', value: stats.totalJobs, color: 'bg-purple-500' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
                    <span className="text-sm text-gray-600">{item.label}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </ChartCard>

          {/* Monthly Growth */}
          <ChartCard title="Monthly Performance">
            <SimpleBarChart
              data={[
                { label: 'Jan', value: 85, color: 'bg-blue-500' },
                { label: 'Feb', value: 92, color: 'bg-blue-500' },
                { label: 'Mar', value: 78, color: 'bg-blue-500' },
                { label: 'Apr', value: 96, color: 'bg-blue-500' },
                { label: 'May', value: 88, color: 'bg-blue-500' },
                { label: 'Jun', value: 100, color: 'bg-green-500' }
              ]}
            />
          </ChartCard>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Blogs */}
          <ChartCard title="Recent Blogs">
            <div className="space-y-4">
              {[
                { title: 'Healthcare Technology Trends', views: 1250, date: '2 days ago' },
                { title: 'Hospital Design Best Practices', views: 980, date: '5 days ago' },
                { title: 'Medical Equipment Planning', views: 756, date: '1 week ago' }
              ].map((blog, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{blog.title}</p>
                    <p className="text-xs text-gray-500">{blog.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{blog.views}</p>
                    <p className="text-xs text-gray-500">views</p>
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>

          {/* Recent Projects */}
          <ChartCard title="Recent Projects">
            <div className="space-y-4">
              {[
                { name: 'Delhi Hospital', status: 'In Progress', progress: 75 },
                { name: 'Mumbai Clinic', status: 'Planning', progress: 25 },
                { name: 'Bangalore Center', status: 'Completed', progress: 100 }
              ].map((project, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900 text-sm">{project.name}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{project.progress}% complete</p>
                </div>
              ))}
            </div>
          </ChartCard>

          {/* Quick Actions */}
          <ChartCard title="Quick Actions">
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                <span>New Blog Post</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
                <span>Post Job</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors">
                <BarChart3 className="w-4 h-4" />
                <span>View Analytics</span>
              </button>
            </div>
          </ChartCard>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
