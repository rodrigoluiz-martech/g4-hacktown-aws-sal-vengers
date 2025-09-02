import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full text-center">
        <div className="text-center mb-8">
          <div className="text-orange-500 text-4xl font-bold mb-2">G4</div>
          <div className="text-white text-lg">EDUCAÇÃO</div>
        </div>

        <div className="mb-8">
          <h1 className="text-white text-2xl font-semibold mb-4">Página não encontrada</h1>
          <p className="text-gray-400">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Voltar para Home
          </Link>
          
          <Link
            to="/admin"
            className="block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Área Administrativa
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound