var express = require("express");
var server = express();
var bodyParser = require("body-parser");

var fileUpload = require("express-fileupload");

server.use(express.static(__dirname + "/public"));
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
server.use(fileUpload({limits:{fileSize:2*2048*2048}}))

var DB=require("nedb-promises");
var WorkDB = DB.create(__dirname+"/works.db");
var DoodleDB = DB.create(__dirname+"/dod.db");
var FanartDB = DB.create(__dirname+"/fanart.db");


server.get("/works", (req, res) => {
    WorkDB.find({}).then(results=>{
        res.send(results);
    })
    
})

server.get("/dod", (req, res) => {
    DoodleDB.find({}).then(results=>{
        res.send(results);
    })
    
})

server.post("/fanart", (req, res) =>{
    var upFile=req.files.FA;
    var savePath = "images/upload/" + upFile.name;
    req.body.FA = savePath;
    upFile.mv(__dirname+"/public/images/upload/"+upFile.name, function(err){

    })
    FanartDB.insert(req.body)
    res.redirect("/fanart.html");
})

server.get("/fanart", (req, res) => {
    FanartDB.find({}).then(results=>{
        res.send(results);
    })
    
})
server.listen(80)