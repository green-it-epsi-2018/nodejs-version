const express = require('express')
const fileUpload = require('express-fileupload')

const envoiTraitement = require('./envoiTraitement')

const PORT = 3000

const app = express()
app.set('view engine', 'ejs')
app.use(fileUpload())

const modulesToLoad = [
	['envoi-traitement', "Envoi d'un fichier au traitement back", envoiTraitement]
]

const moduleRouterLoad = modulesToLoad.map((moduleArray) => {
	app.use('/'+moduleArray[0], moduleArray[2])
	
	return [moduleArray[0], moduleArray[1]]
})
app.get('/', (req, res) => res.render('index', {moduleRouterLoad}))

app.listen(PORT, function () {
  console.log(`NodeJS Version Perf started on port ${PORT}!`)
})