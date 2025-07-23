// components/Menu.js
import Link from 'next/link'

export default function Menu() {
  return (
    <div className="bg-zinc-900 p-3 flex justify-around text-white fixed top-0 w-full z-50">
      <Link href="/login" className="hover:text-green-400">Login</Link>
      <Link href="/cadastro" className="hover:text-green-400">Cadastro</Link>
      <Link href="/dashboard" className="hover:text-green-400">Painel</Link>
      <Link href="/deposito" className="hover:text-green-400">Depósito</Link>
      <Link href="/saque" className="hover:text-green-400">Saque</Link>
      <Link href="/mestre" className="hover:text-green-400">Mestre</Link>
      <Link href="/bhacanna" className="hover:text-green-400">Bhacanna</Link>
    </div>
  )
}
