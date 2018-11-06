var express = require('express')
var router = express.Router()

const fileFieldName = 'csvfile'
const sha256 = require('js-sha256')

router.post('/upload', function (req, res) {
  if (!(req.files || [])[fileFieldName]) {
    res.sendStatus(400)
  } else {
    var startTime = + new Date()
    let data = req.files[fileFieldName].data.toString('utf8').split('\n')
	data = data.map((line) => sha256(line))
    var endTime = + new Date()
	console.log((endTime-startTime)/1000 + " S")
  res.render('envoi-traitement', {
    fileFieldName,
    modulePath: req.baseUrl,
	data
  })
  }
})

router.get('/', function (req, res) {
  res.render('envoi-traitement', {
    fileFieldName,
    modulePath: req.baseUrl
  })
})

module.exports = router