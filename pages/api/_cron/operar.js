// pages/api/_cron/operar.js

export default function handler(req, res) {
  if (req.method === "GET") {
    // Simula operação de bots Bhacanna
    console.log("🧠 Bhacanna bots operando automaticamente...");
    res.status(200).json({ message: "Operação automática executada com sucesso" });
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
