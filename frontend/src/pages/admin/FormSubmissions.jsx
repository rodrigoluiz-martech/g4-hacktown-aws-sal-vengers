import { useLocation } from 'react-router-dom'
import AdminLayout from '../../components/AdminLayout'
import { formsStore } from '../../store/formsStore'

function FormSubmissions() {
  const location = useLocation()
  const slug = location.pathname.split('/submissions')[0].split('/admin/forms/')[1]
  const form = formsStore.getFormBySlug(slug)
  const submissions = formsStore.getFormSubmissions(slug)

  if (!form) {
    return (
      <AdminLayout>
        <div className="text-white">Formulário não encontrado</div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-white text-2xl font-semibold mb-2">
          Respostas - {form.product}
        </h1>
        <div className="text-gray-400 text-sm">G4 Educação > Formulários > Respostas</div>
      </div>

      <div className="bg-gray-700 rounded-lg p-6">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-white text-lg font-semibold">
              Total de Respostas: {submissions.length}
            </h2>
            <div className="text-gray-400 text-sm">
              Slug: {slug}
            </div>
          </div>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-400 text-lg">Nenhuma resposta ainda</div>
            <div className="text-gray-500 text-sm mt-2">
              As respostas aparecerão aqui quando alguém preencher o formulário
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-600">
                  <th className="text-left pb-4">ID</th>
                  <th className="text-left pb-4">Data</th>
                  {form.fields.map((field) => (
                    <th key={field.name} className="text-left pb-4">
                      {field.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission, index) => (
                  <tr key={submission.id} className="border-b border-gray-600">
                    <td className="py-4 text-white">{index + 1}</td>
                    <td className="py-4 text-gray-300">
                      {new Date(submission.submittedAt).toLocaleString('pt-BR')}
                    </td>
                    {form.fields.map((field) => (
                      <td key={field.name} className="py-4 text-white">
                        {submission.data[field.name] || '-'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              const csvContent = generateCSV(form.fields, submissions)
              downloadCSV(csvContent, `respostas-${form.product}.csv`)
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            disabled={submissions.length === 0}
          >
            📥 Exportar CSV
          </button>
        </div>
      </div>
    </AdminLayout>
  )
}

function generateCSV(fields, submissions) {
  const headers = ['ID', 'Data', ...fields.map(f => f.label)]
  const rows = submissions.map((submission, index) => [
    index + 1,
    new Date(submission.submittedAt).toLocaleString('pt-BR'),
    ...fields.map(field => submission.data[field.name] || '')
  ])
  
  return [headers, ...rows]
    .map(row => row.map(cell => `"${cell}"`).join(','))
    .join('\n')
}

function downloadCSV(csvContent, filename) {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', filename)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default FormSubmissions