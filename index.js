const express = require('express')
const app = express()

const PORT = 3000

app.get('/envoi-fichier', function (req, res) {
  res.send("Page d'envoi de fichier")
})

app.listen(PORT, function () {
  console.log(`NodeJS Version Perf started on port ${PORT}!`)
})
