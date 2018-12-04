var express = require('express')

var router = express.Router()
const fs = require("fs-extra");
router.use(express.static('pics'));

const fileFieldName = 'chargementImage'

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

router.get('/', function (req, res) {
    const startDate = new Date().getTime()
    let pics = fs.readdirSync("pics");
    console.log("les pcs" + pics);

    pics = pics.map(element => {
        return base64_encode('pics/' + element);
    });

    const endDate = new Date().getTime()

    console.log("time: " + ((endDate - startDate) / 1000) + "s")

    res.render('chargementImage', {
        pics,
        startDate
    })

})

module.exports = router