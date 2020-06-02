if (process.env.NODE_ENV!=="production"){
    require("dotenv").config();
}

console.log(process.env.NODE_ENV)
const express = require("express");
const morgan=require("morgan");
var path = require('path');
const multer = require("multer");
//const cors = require("cors");

//Initializations

const app =express();
require("./database");
//Setting

app.set("port",4000);

//Middlewares

app.use(morgan("dev"));
const storage =multer.diskStorage({
    destination: path.join(__dirname,"public/uploads"), 
    filename(req, file,cb){
        cb(null, new Date().getTime() + path.extname(file.originalname) );
    }
})
app.use(multer({storage}).single("image"));
app.use(express.urlencoded({extended: false}))
app.use(express.json());
//app.use(cors());
//routes
app.use("/api/books",require("./routes/books"));
//static file
app.use(express.static(path.join(__dirname, "public")));
//Star 
app.listen(app.get("port"),()=>{
    console.log("Server on port", app.get("port"));
});