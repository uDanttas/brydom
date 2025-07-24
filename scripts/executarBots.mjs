// scripts/executarBots.mjs
import { exec } from 'child_process'

// Função para rodar o bots.js
function rodarBots() {
  exec('node bots.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar bots.js: ${error.message}`)
      return
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
  })
}

// Executa a função a cada 10 segundos (10000 ms)
setInterval(rodarBots, 10000)

console.log('🔥 Bots rodando 24h com PM2... Tudo sob controle mestre!')
