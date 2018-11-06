var express = require('express')
var router = express.Router()

const fileFieldName = 'uploadFile'

router.post('/upload', function (req, res) {
  if (!(req.files || [])[fileFieldName]) {
    res.sendStatus(400)
  } else {
	  try {
	const data = req.files[fileFieldName].data.toString('utf8').split('\n').map((line)=>line.split(';'))
	  res.render('upload-liste', {fileFieldName, modulePath: req.baseUrl, data})
	} catch (e) {
		console.error(e)
    res.sendStatus(500)
}
 }
})

router.get('/', function (req, res) {
  res.render('upload-liste', {fileFieldName, modulePath: req.baseUrl})
})

module.exports = router