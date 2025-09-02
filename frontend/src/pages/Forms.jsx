import { Link } from 'react-router-dom'

function Forms() {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-orange-500 text-2xl font-bold mb-2">G4</div>
          <div className="text-white text-sm">EDUCAÇÃO</div>
        </div>

        {/* Título */}
        <h1 className="text-white text-xl font-semibold text-center mb-2">
          G4 - Programas presenciais
        </h1>
        <p className="text-gray-400 text-sm text-center mb-8">
          Olá, Precisamos de algumas informações, para termos certeza qual é o programa mais adequado para o seu perfil.
        </p>

        {/* Progress */}
        <div className="mb-6">
          <div className="text-white text-sm mb-2">Etapa 1 de 3</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-orange-500 h-2 rounded-full w-1/3"></div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="text-white text-sm mb-2 block">
              Qual é o seu WhatsApp? <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">📱</span>
              <input 
                type="tel" 
                className="w-full bg-gray-700 text-white rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder=""
              />
            </div>
          </div>

          <div>
            <label className="text-white text-sm mb-2 block">
              Qual é o seu nome completo? <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">👤</span>
              <input 
                type="text" 
                className="w-full bg-gray-700 text-white rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder=""
              />
            </div>
          </div>

          <Link 
            to="/forms/step2"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors block text-center"
          >
            Próximo →
          </Link>
        </form>

        {/* Terms */}
        <p className="text-gray-400 text-xs text-center mt-4">
          Ao clicar em Confirmar você automaticamente aceita os nossos{' '}
          <span className="text-orange-500">termos de uso</span> e{' '}
          <span className="text-orange-500">política de privacidade</span>.
        </p>

        {/* CTA */}
        <div className="text-center mt-6">
          <p className="text-white font-semibold">
            Preencha até o final e receba um desconto exclusivo !!!
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <Link 
            to="/" 
            className="text-orange-500 hover:text-orange-400 text-sm"
          >
            ← Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Forms