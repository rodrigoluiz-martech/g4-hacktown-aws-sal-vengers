import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          G4 Hacktown AWS Sal-vengers
        </h1>
        <p className="text-gray-600 mb-6">
          React + Vite + Tailwind CSS configurado com sucesso!
        </p>
        <Link 
          to="/forms" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ir para Formulários
        </Link>
      </div>
    </div>
  )
}

export default Home