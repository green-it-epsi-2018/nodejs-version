var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('page-webservice', {
    modulePath: req.baseUrl,
    apiCallAdress: `${req.baseUrl}/api`
  })
})

router.get('/api/:max', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const max = req.params.max

  const rand = Math.random() * max
  res.send(JSON.stringify({ value: rand }))
})

module.exports = router