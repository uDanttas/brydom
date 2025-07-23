import { useState } from 'react'
import Menu from '@/components/Menu'

export default function AtivarBot() {
  const [cpf, setCpf] = useState('')
  const [saldo, setSaldo] = useState('')

  const ativar = async () => {
    const res = await fetch('/api/ativar-bot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cpf, saldo: parseFloat(saldo) }),
    })

    const data = await res.json()
    alert(data.mensagem)
  }

  return (
    <>
      <Menu />
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-20">
        <h1 className="text-2xl font-bold mb-4">Ativar Novo Bot</h1>
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="mb-2 p-2 text-black"
        />
        <input
          type="number"
          placeholder="Saldo operacional (mín. R$50)"
          value={saldo}
          onChange={(e) => setSaldo(e.target.value)}
          className="mb-2 p-2 text-black"
        />
        <button
          onClick={ativar}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Ativar Bot
        </button>
      </div>
    </>
  )
}
