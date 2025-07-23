// pages/saque.js
import Layout from "@/components/Layout";

export default function Saque() {
  return (
    <Layout>
      <div className="text-white max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Solicitar Saque</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Valor (R$)</label>
            <input
              type="number"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600"
              placeholder="Digite o valor do saque"
            />
          </div>
          <div>
            <label className="block mb-1">Chave PIX</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600"
              placeholder="Sua chave PIX"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
          >
            Confirmar Saque
          </button>
        </form>
      </div>
    </Layout>
  );
}
