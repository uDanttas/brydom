// pages/cliente.js
import Layout from "../components/Layout";
import ProfitBox from "../components/ProfitBox";
import GraphPanel from "../components/GraphPanel";
import BotsAtivosBox from "../components/BotsAtivosBox";

export default function Cliente() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-white">Painel do Cliente</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProfitBox />
        <BotsAtivosBox />
        <GraphPanel />
      </div>
    </Layout>
  );
}
