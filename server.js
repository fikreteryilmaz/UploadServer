const path = require('path');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const fs = require('fs')
const xmlbuilder = require('xmlbuilder')
const app = express();
require("dotenv").config();

const DIR = process.env.DIR || "H:\\import\\"
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8000;
const ORG = process.env.ORG || 'http://orsatekdemo01';


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use(
    function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', ORG);
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
    }
);
 
app.get('/api', function (req, res) {
  res.end('file catcher example');
});
 
app.post('/api/upload',upload.single('file'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        console.log(req.file.filename);
        return res.send({
          success: true
        })
      }
});

app.listen(PORT,HOST, function () {
  console.log('Node.js server is running.\nPORT: ' + PORT +'\nHOST: '+HOST+'\nORIGIN: '+ORG+'\nDIRECTORY: '+ DIR);
});
