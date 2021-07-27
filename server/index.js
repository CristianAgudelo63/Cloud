const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();

//Puerto del server
app.listen(8000, function(){ 
    console.log("Server on port", 8000);    
});

//MIDDLEWARES
app.use(multer({
    dest: path.join(__dirname, "public/uploads")
}).single("archivo"));

//Rutas
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.post('/uploads', function(req, res){
    res.send("uploaded");
    console.log(req.file);
});