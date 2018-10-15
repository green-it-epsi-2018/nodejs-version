var express = require("express");
var router = express.Router();
var multer = require("multer");


// where to store file
const multerConf = {
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "./upload-files");
        },
        filename: function (req, file, cb) {
            const ext = file.mimetype.split("/")[1];

            cb(null, file.fieldname + "-" + Date.now() + "." + ext);
        }
    })
};

router.post("/upload", multer(multerConf).single("csvfile"), function (req, res) {
    console.log(req.files);
    res.send(req.files);
});

router.get("/envoi-fichier", function (req, res) {
    res.send("Page d'envoi de fichier");
});

module.exports = router;