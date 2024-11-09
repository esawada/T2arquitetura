const express = require('express')
const axios = require('axios')


const servidor = express()
servidor.use(express.json())
let id = 0

const logs = []

servidor.post('/eventos', (req, res) => {
  id++
  const tipoEvento = req.body.tipo
  const horario = new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    second: '2-digit',
    minute: '2-digit',
    hour: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  const log = {
    id: id,
    evento: tipoEvento,
    horario: horario
  }
  logs.push(log)
  res.status(200).json({ mensagem: 'funcionou' })
})

servidor.get('/logs', (req, res) => {
  res.status(200).json(logs)
})

servidor.listen(8000, () => {
  console.log('porta 8000')
})