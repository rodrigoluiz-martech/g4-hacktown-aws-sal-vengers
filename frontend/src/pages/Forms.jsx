import { Link } from 'react-router-dom'

function Forms() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link 
            to="/" 
            className="text-blue-500 hover:text-blue-700"
          >
            ← Voltar para Home
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Formulários
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">
            Página de formulários criada com sucesso!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Forms