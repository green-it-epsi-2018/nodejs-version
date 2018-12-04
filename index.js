const express = require('express')
const fileUpload = require('express-fileupload')

const envoiTraitement = require('./envoiTraitement')
const uploadListe = require('./uploadListe')
const pageWebservice = require('./page-webservice')
const chargementImage = require('./chargementImage')


const PORT = 3000

const app = express()
app.set('view engine', 'ejs')
app.use(fileUpload())

const modulesToLoad = [
  ['envoi-traitement', "Envoi d'un fichier au traitement back", envoiTraitement],
  ['upload-list', "Upload d'une list de données, ensuite affichée dans un tableau", uploadListe],
  ['page-webservice', "Requettes massives vers une api", pageWebservice],
  ['chargement-image', "Chargement d'images", chargementImage]
]
//app.use(express.static('/Users/Tshili/Documents/Epsi/Green-IT/nodejs-version/pics'));

const moduleRouterLoad = modulesToLoad.map((moduleArray) => {
  app.use('/' + moduleArray[0], moduleArray[2])

  return [moduleArray[0], moduleArray[1]]
})
app.get('/', (req, res) => res.render('index', {
  moduleRouterLoad
}))

app.listen(PORT, function () {
  console.log(`NodeJS Version Perf started on port ${PORT}!`)
})