import { useState } from 'react'
import Menu from '../components/Menu'

export default function Saque() {
  const [cpf, setCpf] = useState('')
  const [valor, setValor] = useState('')

  const enviarSaque = async () => {
    const res = await fetch('/api/saque', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cpf, valor: parseFloat(valor) }),
    })

    const data = await res.json()
    alert(data.mensagem)
  }

  return (
    <>
      <Menu />
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-20">
        <h1 className="text-2xl mb-4">Saque</h1>
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="mb-2 p-2 text-black"
        />
        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className="mb-2 p-2 text-black"
        />
        <button onClick={enviarSaque} className="bg-red-600 px-4 py-2 rounded">
          Sacar
        </button>
      </div>
    </>
  )
}
