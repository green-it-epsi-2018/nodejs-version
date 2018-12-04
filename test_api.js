const axios = require('axios')

const API_PATH = "http://localhost:3000/page-webservice/api/2"

 const startDate = new Date().getTime()

const nbRequests = 500

Promise.all(Array(nbRequests).fill().map((_,i) => i).map((i) => 
	axios.get(API_PATH)
))
.then(() => {
	const endDate = new Date().getTime()
	console.log((endDate - startDate) / 1000)
})