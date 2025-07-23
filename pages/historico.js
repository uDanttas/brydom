import { useState } from 'react'
import Menu from '../components/Menu'

export default function Historico() {
  const [cpf, setCpf] = useState('')
  const [historico, setHistorico] = useState([])

  const buscarHistorico = async () => {
    const res = await fetch(`/api/historico?cpf=${cpf}`)
    const data = await res.json()
    setHistorico(data.historico || [])
  }

  return (
    <>
      <Menu />
      <div className="min-h-screen bg-black text-white p-4 pt-20">
        <h1 className="text-2xl font-bold mb-4">Histórico de Operações</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Digite seu CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="text-black p-2 mr-2"
          />
          <button onClick={buscarHistorico} className="bg-blue-600 px-4 py-2 rounded">
            Buscar
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-scroll space-y-2">
          {historico.map((op, i) => (
            <div key={i} className="bg-zinc-800 p-2 rounded">
              <p>Bot #{op.botId} - R$ {op.valor.toFixed(2)} - {op.timestamp?.slice(11, 19)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
