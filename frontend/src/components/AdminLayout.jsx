import { Link, useLocation } from 'react-router-dom'

function AdminLayout({ children }) {
  const location = useLocation()

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/forms', label: 'Formulários', icon: '📝' },
    { path: '/admin/submissions', label: 'Respostas', icon: '📋' }
  ]

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6">
        <div className="text-center mb-8">
          <div className="text-orange-500 text-2xl font-bold mb-2">G4</div>
          <div className="text-white text-sm">EDUCAÇÃO</div>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm">JD</span>
            </div>
            <div>
              <div className="text-white text-sm font-semibold">John Doe</div>
              <div className="text-gray-400 text-xs">Mkt Director</div>
            </div>
          </div>
        </div>

        <div className="text-gray-400 text-xs uppercase tracking-wider mb-4">MENU</div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                location.pathname === item.path
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-gray-800 rounded-lg p-6 h-full">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout