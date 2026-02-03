import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-2/4 bg-black flex items-center justify-center p-4">
      {/* Container com efeito Glassmorphism suave */}
      <div className="w-full max-w-md bg-[#111111] border border-white/10 rounded-2xl p-8 shadow-2xl">
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Login</h2>
          <p className="text-gray-400 text-sm">Entre com suas credenciais para acessar o painel.</p>
        </div>

        <form className="space-y-6">
          {/* Campo de Usuário/Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Usuário ou Email
            </label>
            <input 
              type="text" 
              placeholder="Digite seu usuário"
              className="w-full bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
            />
          </div>

          {/* Campo de Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Senha
            </label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
            />
          </div>

          {/* Botões inspirados na imagem de pagamento enviada */}
          <div className="flex gap-4 pt-4">
            <button 
              type="submit"
              className="flex-1 bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors
              hover:shadow-2xl shadow-green-300
              "
              
            >
              Entrar
            </button>
            <button 
              type="button"
              className="flex-1 bg-[#1a1a1a] text-white font-semibold py-3 rounded-lg border border-white/10 hover:bg-[#252525] transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Não tem uma conta? <span className="text-green-500 cursor-pointer hover:underline">Solicite acesso</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;