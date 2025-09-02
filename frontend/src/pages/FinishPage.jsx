import { Link } from 'react-router-dom'

function FinishPage() {
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
                <h2 className="text-gray-400 text-sm text-center mb-8">
                    Pronto! Agora podemos te atender melhor..
                </h2>

                {/* Form */}
                <div class="card p-4 rounded-4">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hF_m5gHZmJ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>

                {/* CTA */}
                <div className="text-center mt-6">
                    <p className="text-white font-semibold">
                        Preencha até o final e receba um desconto exclusivo !!!
                    </p>
                </div>

                {/* Back Link */}
                <div className="mt-6 text-center">

                </div>
            </div>
        </div>
    )
}

export default FinishPage