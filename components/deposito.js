// pages/deposito.js
import Layout from "../components/Layout";

export default function Deposito() {
  return (
    <Layout>
      <div className="text-white max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Realizar Depósito</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Valor (R$)</label>
            <input
              type="number"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600"
              placeholder="Digite o valor do depósito"
            />
          </div>
          <div>
            <label className="block mb-1">Forma de pagamento</label>
            <select className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600">
              <option value="pix">PIX</option>
              <option value="cartao">Cartão de Crédito</option>
              <option value="boleto">Boleto</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
          >
            Confirmar Depósito
          </button>
        </form>
      </div>
    </Layout>
  );
}
