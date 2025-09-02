import { Link } from 'react-router-dom'
import AdminLayout from '../../components/AdminLayout'
import { formsStore } from '../../store/formsStore'

function AllSubmissions() {
  const forms = formsStore.getAllForms()
  
  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-white text-2xl font-semibold mb-2">RESPOSTAS</h1>
        <div className="text-gray-400 text-sm">G4 Educação > Respostas</div>
      </div>

      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-white text-lg font-semibold mb-6">Respostas por Formulário</h2>

        <div className="grid gap-4">
          {forms.map((form) => {
            const submissions = formsStore.getFormSubmissions(form.slug)
            
            return (
              <div key={form.slug} className="bg-gray-600 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-semibold">{form.product}</h3>
                    <p className="text-gray-400 text-sm">{form.slug}</p>
                    <p className="text-gray-300 text-sm mt-1">
                      {submissions.length} resposta{submissions.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      to={`/admin/forms/${form.slug}/submissions`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
                    >
                      Ver Respostas
                    </Link>
                    
                    <Link
                      to={`/form/${form.slug}`}
                      target="_blank"
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
                    >
                      Testar Form
                    </Link>
                  </div>
                </div>
                
                {submissions.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-500">
                    <div className="text-gray-300 text-sm">
                      Última resposta: {new Date(submissions[submissions.length - 1].submittedAt).toLocaleString('pt-BR')}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {forms.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-400 text-lg">Nenhum formulário criado ainda</div>
            <div className="text-gray-500 text-sm mt-2">
              <Link to="/admin/forms/new" className="text-orange-500 hover:text-orange-400">
                Criar seu primeiro formulário
              </Link>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

export default AllSubmissions