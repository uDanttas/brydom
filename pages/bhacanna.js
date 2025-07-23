import { useEffect, useState } from 'react'
import Menu from '@/components/Menu'

export default function Bhacanna() {
  const [dados, setDados] = useState([])

  const buscar = async () => {
    const res = await fetch('/api/bhacanna')
    const data = await res.json()
    setDados(data)
  }

  useEffect(() => {
    buscar()
    const interval = setInterval(buscar, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Menu />
      <div className="bg-black text-white min-h-screen pt-20 p-4">
        <h1 className="text-2xl font-bold mb-4">👑 Bhacanna - 3.000 bots do mestre</h1>
        <p className="mb-2">Atualização a cada 3 segundos. Operando 24h.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-[60vh] overflow-y-scroll">
          {dados.map((bot, i) => (
            <div key={i} className="bg-zinc-800 rounded p-2 text-sm">
              <p><strong>Bot #{bot.id}</strong></p>
              <p>Lucro: R$ {bot.lucro.toFixed(2)}</p>
              <p>Última operação: {bot.ultimaOperacao?.slice(11, 19)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
