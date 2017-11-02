'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
var
user_routes=require('./routes/user')
app
  .use(bodyParser.urlencoded({extended:false}))
  .use(bodyParser.json())

//configurar cabeceras http

// rutas base
// app.get('/pruebas', function(req, res){
//   res.status(200).send({message: 'Bienvenido al curso de desarrollo web'});
// });

app.use('/api', user_routes);



module.exports = app;
