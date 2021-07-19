// Daily Bites Node.js
const http = require("http");
const express = require("express");
const app = express();

module.exports = app;
require('./routes/index');
//const bodyParser = require("body-parser");
const port = 3000;

app.listen(port, () => {
    console.log(`Listening at port http://localhost:${port}`)
})
