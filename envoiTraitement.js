var express = require('express')
var router = express.Router()

const fileFieldName = 'csvfile'

router.post('/upload', function (req, res) {
  if (!(req.files || [])[fileFieldName]) {
    res.sendStatus(400)
  } else {
    var startTime = new Date().getTime();
    var elapsedTime = 0;
    res.send(req.files[fileFieldName])

    elapsedTime = new Date().getTime() - startTime;
    console.log("====> execution time : " + elapsedTime + "ms");

  }
})

router.get('/', function (req, res) {
  res.render('envoi-traitement', {
    fileFieldName,
    modulePath: req.baseUrl
  })
})

module.exports = router