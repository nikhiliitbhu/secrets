//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
require('dotenv').config();

const app = express();

app.use(express.static("public"));
app.set('view enginge', 'ejs');
app.use(bodyParser.urlencoded({
    urlencoded: true
}))





app.listen(process.env.PORT, function(){
    console.log("********** the app is up and running at port " + process.env.PORT + "***********");
});