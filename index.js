require('nashorn-polyfill')
const express = require('express')

let server = express()

server.get('/now', (request, response) => {
  let now = new Date()
  let time = now.toLocaleTimeString('en-CA', { timeZone: 'America/Toronto' })
  let date = now.toLocaleDateString('en-CA', { timeZone: 'America/Toronto' })
  response.json({ date, time })
})

server.listen(3000)
