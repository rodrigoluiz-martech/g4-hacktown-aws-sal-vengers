import { Link } from 'react-router-dom'
import { formsStore } from '../store/formsStore'

function Home() {
  const forms = formsStore.getAllForms()

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="text-orange-500 text-4xl font-bold mb-2">G4</div>
          <div className="text-white text-lg">EDUCAÇÃO</div>
          <h1 className="text-white text-2xl font-semibold mt-4 mb-2">
            Plataforma de Formulários
          </h1>
          <p className="text-gray-400">
            Crie e gerencie formulários dinâmicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-white text-xl font-semibold mb-4">Formulários Disponíveis</h2>
            <div className="space-y-3">
              {forms.map((form) => (
                <Link
                  key={form.slug}
                  to={`/form/${form.slug}`}
                  className="block bg-gray-600 hover:bg-gray-500 p-3 rounded transition-colors"
                >
                  <div className="text-white font-medium">{form.product}</div>
                  <div className="text-gray-400 text-sm">{form.slug}</div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-white text-xl font-semibold mb-4">Área Administrativa</h2>
            <div className="space-y-3">
              <Link
                to="/admin"
                className="block bg-orange-500 hover:bg-orange-600 text-white p-3 rounded transition-colors text-center font-medium"
              >
                📊 Dashboard
              </Link>
              <Link
                to="/admin/forms"
                className="block bg-blue-500 hover:bg-blue-600 text-white p-3 rounded transition-colors text-center font-medium"
              >
                📝 Gerenciar Formulários
              </Link>
              <Link
                to="/admin/forms/new"
                className="block bg-green-500 hover:bg-green-600 text-white p-3 rounded transition-colors text-center font-medium"
              >
                ➕ Criar Novo Formulário
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/forms" 
            className="text-orange-500 hover:text-orange-400 text-sm"
          >
            Ver formulário original (hardcoded) →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home