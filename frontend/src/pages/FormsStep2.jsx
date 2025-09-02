import { Link } from 'react-router-dom'

function FormsStep2() {
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
          <div className="text-white text-sm mb-2">Etapa 2 de 3</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-orange-500 h-2 rounded-full w-2/3"></div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="text-white text-sm mb-2 block">
              Qual é o seu email? <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">📧</span>
              <input 
                type="email" 
                className="w-full bg-gray-700 text-white rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder=""
              />
            </div>
          </div>

          <div>
            <label className="text-white text-sm mb-2 block">
              E qual o faturamento anual da sua empresa? <span className="text-red-500">*</span>
            </label>
            <select className="w-full bg-gray-700 text-white rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="">Ainda não faturamos</option>
              <option value="ate-500">Até R$500 mil ao ano</option>
              <option value="500-1mi">De R$500 mil a R$1 milhão ao ano</option>
              <option value="1-5mi">De R$1 milhão a R$5 milhões ao ano</option>
              <option value="5-10mi">De R$5 a R$10 milhões ao ano</option>
              <option value="10-50mi">De R$10 a R$50 milhões ao ano</option>
              <option value="50-500mi">De R$50 a R$500 milhões ao ano</option>
              <option value="acima-500mi">Acima de R$500 milhões</option>
            </select>
          </div>

          <div>
            <label className="text-white text-sm mb-2 block">
              Qual o seu cargo na empresa? <span className="text-red-500">*</span>
            </label>
            <select className="w-full bg-gray-700 text-white rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="">Analista</option>
              <option value="supervisor">Supervisor</option>
              <option value="coordenador">Coordenador</option>
              <option value="gerente">Gerente</option>
              <option value="diretor">Diretor</option>
              <option value="vice-presidente">Vice-presidente ou C-Level</option>
              <option value="presidente">Presidente ou CEO</option>
              <option value="socio">Sócio ou Fundador</option>
            </select>
          </div>

          <Link 
            to="/forms/step3"
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
            to="/forms" 
            className="text-orange-500 hover:text-orange-400 text-sm"
          >
            ← Voltar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FormsStep2