// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (cpf === "00000000000" && senha.toLowerCase() === "sagui") {
      router.push("/mestre");
    } else {
      router.push("/cliente");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Acesso ao BRYDOM</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-white block mb-1">CPF</label>
            <input
              type="text"
              placeholder="Seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
              required
            />
          </div>
          <div>
            <label className="text-white block mb-1">Senha (nome de animal)</label>
            <input
              type="password"
              placeholder="ex: tigre"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
