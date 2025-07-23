import { useEffect, useState } from 'react'
import Menu from '../components/Menu'

export default function PainelMestre() {
  const [lucroTotal, setLucroTotal] = useState(0)
  const [operacoes, setOperacoes] = useState([])

  const buscar = async () => {
    const res = await fetch('/api/painel-mestre')
    const data = await res.json()
    setLucroTotal(data.lucroTotal)
    setOperacoes(data.operacoes || [])
  }

  useEffect(() => {
    buscar()
    const interval = setInterval(buscar, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Menu />
      <div className="min-h-screen bg-black text-white p-4 pt-20">
        <h1 className="text-2xl font-bold mb-2">Painel do Mestre 👑</h1>
        <p className="mb-4">Lucro total dos bots Bhacanna: <span className="text-green-400">R$ {lucroTotal.toFixed(2)}</span></p>

        <h2 className="text-xl mb-2">Últimas Operações</h2>
        <div className="max-h-[50vh] overflow-y-scroll space-y-2">
          {operacoes.map((op, index) => (
            <div key={index} className="bg-zinc-800 p-2 rounded">
              <p><strong>Bot #{op.botId}</strong> - Lucro: R$ {op.valor.toFixed(2)} - {op.timestamp.slice(11, 19)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
<button
  onClick={() => fetch('/api/operar', { method: 'POST' })}
  className="bg-green-600 text-white px-4 py-2 rounded"
>
  Rodar Bots
</button>
