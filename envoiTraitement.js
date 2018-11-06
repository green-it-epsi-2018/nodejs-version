var express = require('express')
var router = express.Router()

const fileFieldName = 'csvfile'

router.post('/upload', function (req, res) {
  if (!(req.files || [])[fileFieldName]) {
    res.sendStatus(400)
  } else {
    res.send(req.files[fileFieldName])
  }
})

router.get('/', function (req, res) {
  res.render('envoi-traitement', {fileFieldName, modulePath: req.baseUrl})
})

module.exports = router
