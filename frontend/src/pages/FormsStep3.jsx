import { Link } from 'react-router-dom'

function FormsStep3() {
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
          <div className="text-white text-sm mb-2">Etapa 3 de 3</div>
          <div className="w-full bg-orange-500 rounded-full h-2"></div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="text-white text-sm mb-4 block">
              Quantos colaboradores a sua empresa possui? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              <label className="flex items-center text-white">
                <input type="radio" name="colaboradores" value="ate-10" className="mr-3" />
                Até 10 colaboradores
              </label>
              <label className="flex items-center text-white">
                <input type="radio" name="colaboradores" value="10-50" className="mr-3" />
                De 10 a 50 colaboradores
              </label>
              <label className="flex items-center text-white">
                <input type="radio" name="colaboradores" value="51-100" className="mr-3" />
                De 51 a 100 colaboradores
              </label>
              <label className="flex items-center text-white">
                <input type="radio" name="colaboradores" value="101-1000" className="mr-3" />
                De 101 a 1.000 colaboradores
              </label>
              <label className="flex items-center text-white">
                <input type="radio" name="colaboradores" value="acima-1000" className="mr-3" />
                Acima de 1.000 colaboradores
              </label>
            </div>
          </div>

          <Link 
            to="/forms/finishpage"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors block text-center"
          >
            Próximo →
          </Link>
        </form>

        {/* CTA */}
        <div className="text-center mt-6">
          <p className="text-white font-semibold">
            Preencha até o final e receba um desconto exclusivo !!!
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <Link 
            to="/forms/step2" 
            className="text-orange-500 hover:text-orange-400 text-sm"
          >
            ← Voltar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FormsStep3