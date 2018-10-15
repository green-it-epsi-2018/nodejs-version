const express = require("express");
const fileUpload = require("express-fileupload");
var profile = require('./profile');


const app = express();
app.use(fileUpload());
app.use('/', profile);


const PORT = 3000;



app.listen(PORT, function () {
    console.log(`NodeJS Version Perf started on port ${PORT}!`);
});

//