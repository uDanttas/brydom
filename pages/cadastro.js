import { useState } from 'react'
import { useRouter } from 'next/router'
import Menu from '@/components/Menu'

export default function Cadastro() {
  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  const router = useRouter()

  const handleCadastro = async () => {
    const res = await fetch('/api/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cpf, senha }),
    })

    const data = await res.json()

    if (res.ok) {
      router.push(`/dashboard?cpf=${cpf}`)
    } else {
      alert(data.mensagem)
    }
  }

  return (
    <>
      <Menu />
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white pt-16">
        <h1 className="text-2xl mb-4">Cadastro</h1>
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="mb-2 p-2 text-black"
        />
        <input
          type="password"
          placeholder="Senha (animal)"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="mb-2 p-2 text-black"
        />
        <button
          onClick={handleCadastro}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Cadastrar
        </button>
      </div>
    </>
  )
}
