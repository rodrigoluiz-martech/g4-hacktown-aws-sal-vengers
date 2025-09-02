import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/AdminLayout'
import { formsStore } from '../../store/formsStore'

function FormsList() {
  const [forms, setForms] = useState(formsStore.getAllForms())

  const handleDelete = (slug) => {
    if (confirm('Tem certeza que deseja excluir este formulário?')) {
      formsStore.deleteForm(slug)
      setForms(formsStore.getAllForms())
    }
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-white text-2xl font-semibold mb-2">FORMULÁRIOS</h1>
            <div className="text-gray-400 text-sm">G4 Educação > Formulários</div>
          </div>
          <Link 
            to="/admin/forms/new"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            + Novo Formulário
          </Link>
        </div>
      </div>

      <div className="bg-gray-700 rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-white text-lg font-semibold mb-4">Formulários</h2>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <select className="bg-gray-600 text-white px-3 py-2 rounded border border-gray-500">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span className="text-gray-400 text-sm">entries per page</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Search:</span>
              <input 
                type="text" 
                className="bg-gray-600 text-white px-3 py-2 rounded border border-gray-500 w-48"
                placeholder=""
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-sm border-b border-gray-600">
                <th className="text-left pb-4">ID</th>
                <th className="text-left pb-4">PRODUTO</th>
                <th className="text-left pb-4">SLUG</th>
                <th className="text-left pb-4">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((form, index) => (
                <tr key={form.slug} className="border-b border-gray-600">
                  <td className="py-4 text-white">{index + 1}</td>
                  <td className="py-4 text-white">{form.product}</td>
                  <td className="py-4 text-gray-300">{form.slug}</td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <Link
                        to={`/admin/forms/edit/${form.slug}`}
                        className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded text-sm"
                        title="Editar"
                      >
                        ✏️
                      </Link>
                      <Link
                        to={`/form/${form.slug}`}
                        target="_blank"
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded text-sm"
                        title="Visualizar"
                      >
                        👁️
                      </Link>
                      <Link
                        to={`/admin/forms/${form.slug}/submissions`}
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded text-sm"
                        title="Respostas"
                      >
                        📊
                      </Link>
                      <button
                        onClick={() => handleDelete(form.slug)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded text-sm"
                        title="Excluir"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-gray-400 text-sm">
            Showing 1 to {forms.length} of {forms.length} entries
          </div>
          
          <div className="flex space-x-1">
            <button className="px-3 py-1 bg-gray-600 text-gray-400 rounded">‹</button>
            <button className="px-3 py-1 bg-teal-500 text-white rounded">1</button>
            <button className="px-3 py-1 bg-gray-600 text-gray-400 rounded">2</button>
            <button className="px-3 py-1 bg-gray-600 text-gray-400 rounded">3</button>
            <button className="px-3 py-1 bg-gray-600 text-gray-400 rounded">4</button>
            <button className="px-3 py-1 bg-gray-600 text-gray-400 rounded">›</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default FormsList