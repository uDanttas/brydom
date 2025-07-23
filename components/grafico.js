// pages/grafico.js
import Layout from "@/components/Layout";
import GraphPanel from "@/components/GraphPanel";

export default function Grafico() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-white">Gráfico de Operações</h1>
      <GraphPanel />
    </Layout>
  );
}
