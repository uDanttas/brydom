import { useEffect, useState } from 'react'
import Menu from '@/components/Menu'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const [dados, setDados] = useState(null)
  const [metaBatida, setMetaBatida] = useState(false)
  const router = useRouter()
  const { cpf } = router.query

  const buscarDados = async () => {
    const res = await fetch(`/api/usuario?cpf=${cpf}`)
    const data = await res.json()
    setDados(data)

    const lucroHoje = data?.historico?.reduce((acc, op) => {
      const hoje = new Date().toISOString().slice(0, 10)
      return acc + (op.data?.startsWith(hoje) ? op.valor : 0)
    }, 0)

    if (lucroHoje >= 500) setMetaBatida(true)
  }

  const ativarBot = async () => {
    const res = await fetch('/api/ativar-bot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cpf }),
    })

    const data = await res.json()
    alert(data.mensagem)
    buscarDados()
  }

  useEffect(() => {
    if (cpf) buscarDados()
  }, [cpf])

  if (!dados) return <div className="text-white bg-black min-h-screen pt-16 p-4">Carregando...</div>

  return (
    <>
      <Menu />
      <div className="min-h-screen bg-black text-white p-4 pt-20">
        <h1 className="text-2xl font-bold mb-4">Painel do Cliente</h1>

        <p><strong>CPF:</strong> {dados.cpf}</p>
        <p><strong>Saldo:</strong> R$ {dados.saldo.toFixed(2)}</p>
        <p><strong>Bots Ativados:</strong> {dados.bots.length}</p>

        <p className="mt-2">
          <strong>Lucro acumulado hoje:</strong> R$ {
            dados.historico
              .filter(op => op.data?.startsWith(new Date().toISOString().slice(0, 10)))
              .reduce((acc, op) => acc + op.valor, 0)
              .toFixed(2)
          }
        </p>

        {metaBatida && (
          <div className="bg-green-700 p-2 mt-4 rounded">
            🎯 Meta de R$500 atingida hoje! Lucro extra vai para o mestre.
          </div>
        )}

        <button onClick={ativarBot} className="bg-green-600 px-4 py-2 mt-6 rounded">
          Ativar Novo Bot (R$50+ necessário)
        </button>

        <h2 className="text-xl mt-8 mb-2">Histórico de Operações</h2>
        <div className="max-h-64 overflow-y-scroll">
          {dados.historico.map((op, i) => (
            <div key={i} className="border-b border-zinc-700 py-1 text-sm">
              {op.data.split('T')[0]} - R$ {op.valor.toFixed(2)} via bot #{op.botId}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
