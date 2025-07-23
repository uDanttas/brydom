import fetch from "node-fetch"

setInterval(async () => {
  try {
    const res = await fetch("http://localhost:3000/api/operar", { method: "POST" })
    const json = await res.json()
    console.log("Bot operou:", json)
  } catch (e) {
    console.error("Erro na operação:", e.message)
  }
}, 60000) // a cada 1 minuto
