var express = require("express");

var bodyParser = require("body-parser");

var cors = require("cors");

var app = express();

app.use(bodyParser.json());

app.use(cors());

var studentCtrl = require("./routes/student");

app.use("/student",studentCtrl);

var userCtrl = require("./routes/user");

app.use("/user",userCtrl);

app.listen(3000);

console.log("server started");