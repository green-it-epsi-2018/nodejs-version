const express = require("express");
const fileUpload = require("express-fileupload");
var profile = require('./profile');


const app = express();
app.use(fileUpload());
app.use('/upload', profile);


const PORT = 3000;

app.get("/envoi-fichier", function (req, res) {
    res.send("Page d'envoi de fichier");
});

app.listen(PORT, function () {
    console.log(`NodeJS Version Perf started on port ${PORT}!`);
});

//