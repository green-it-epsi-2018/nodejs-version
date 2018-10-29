const express = require('express')
const fileUpload = require('express-fileupload')

const profile = require('./profile')

const PORT = 3000

const app = express()
app.set('view engine', 'ejs')
app.use(fileUpload())

app.get('/', (req, res) => res.render('index'))

app.use('/', profile)

app.listen(PORT, function () {
  console.log(`NodeJS Version Perf started on port ${PORT}!`)
})
