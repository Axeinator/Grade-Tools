const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/whatif', ((req, res) => {
  res.sendFile(path.join(__dirname + '/public/whatif.html'))
}))

app.get('/gpa', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/gpa.html'))
})

module.exports = app