// pages/mestre.js
import Layout from "../components/Layout";
import BhacannaBots from "../components/BhacannaBots";

export default function Mestre() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-white">Painel do Mestre</h1>
      <BhacannaBots />
    </Layout>
  );
}
