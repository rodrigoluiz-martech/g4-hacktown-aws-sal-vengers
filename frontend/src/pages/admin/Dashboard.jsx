import AdminLayout from '../../components/AdminLayout'
import { formsStore } from '../../store/formsStore'

function Dashboard() {
  const stats = formsStore.getStats()
  const forms = formsStore.getAllForms()

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-white text-2xl font-semibold mb-2">DASHBOARD FORMS V1</h1>
        <div className="text-gray-400 text-sm">G4 Educação > Dashboard Forms V1</div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-700 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="text-gray-400 text-sm">Total Forms</div>
            <div className="text-teal-400 text-xs bg-teal-400/20 px-2 py-1 rounded">MÊS</div>
          </div>
          <div className="text-white text-3xl font-bold">{stats.totalForms}</div>
        </div>

        <div className="bg-gray-700 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="text-gray-400 text-sm">Form mais engajado</div>
            <div className="text-teal-400 text-xs bg-teal-400/20 px-2 py-1 rounded">MÊS</div>
          </div>
          <div className="text-white text-sm">G4 PROGRAMAS PRESENCIAIS</div>
        </div>

        <div className="bg-gray-700 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="text-gray-400 text-sm">Perfil médio</div>
            <div className="text-teal-400 text-xs bg-teal-400/20 px-2 py-1 rounded">MÊS</div>
          </div>
          <div className="text-white text-3xl font-bold">B</div>
        </div>

        <div className="bg-gray-700 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="text-gray-400 text-sm">Últimas 24h</div>
            <div className="text-orange-400 text-xs bg-orange-400/20 px-2 py-1 rounded">24h</div>
          </div>
          <div className="text-white text-3xl font-bold">{stats.totalSubmissions}</div>
        </div>
      </div>

      {/* Forms Performance Table */}
      <div className="bg-gray-700 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-lg font-semibold">Top Forms Performance</h2>
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-white">↗</button>
            <button className="text-gray-400 hover:text-white">🔄</button>
            <button className="text-gray-400 hover:text-white">✕</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="text-left pb-4">FORMS</th>
                <th className="text-left pb-4">VISITORES ↑</th>
                <th className="text-left pb-4">RESPOSTAS ↑</th>
                <th className="text-left pb-4">STEPS/VISIT ↑</th>
                <th className="text-left pb-4">AVG. DURATION ↑</th>
                <th className="text-left pb-4">LEADS ↑</th>
                <th className="text-left pb-4">CONVERSION ↑</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((form, index) => {
                const submissions = formsStore.getFormSubmissions(form.slug)
                const visitors = Math.floor(Math.random() * 7000) + 1000
                const conversion = ((submissions.length / visitors) * 100).toFixed(2)
                
                return (
                  <tr key={form.slug} className="border-t border-gray-600">
                    <td className="py-4">
                      <div className="flex items-center">
                        <span className="text-teal-400 mr-2">📝</span>
                        <span className="text-white">{form.product}</span>
                      </div>
                    </td>
                    <td className="py-4 text-white">{visitors.toLocaleString()}</td>
                    <td className="py-4">
                      <span className="text-green-400">{submissions.length > 0 ? `${(submissions.length / visitors * 100).toFixed(2)}%` : '0%'}</span>
                    </td>
                    <td className="py-4 text-white">{(Math.random() * 2 + 1).toFixed(2)}</td>
                    <td className="py-4 text-white">0{Math.floor(Math.random() * 2) + 1}:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}</td>
                    <td className="py-4 text-white">{Math.floor(Math.random() * 500) + 100}</td>
                    <td className="py-4">
                      <span className="text-green-400">{conversion}%</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-gray-400 text-sm">
          Showing 1 to {forms.length} of {forms.length} entries
        </div>
      </div>
    </AdminLayout>
  )
}

export default Dashboard