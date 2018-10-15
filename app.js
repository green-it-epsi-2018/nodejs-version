const express = require("express");
var profile = require('./profile');

const app = express();
const PORT = 3000;

app.use('/', profile);


app.listen(PORT, function () {
    console.log(`NodeJS Version Perf started on port ${PORT}!`);
});

//