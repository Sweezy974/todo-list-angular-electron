var express = require('express');
var app = express();

var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'express'
})


connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')

  })

app.get('/', function(req, res){
   res.setHeader('Content-Type', 'text/plain');
   res.end('Voud êtes à l\'accueil');
   connection.query('SELECT * FROM todos');
  })

//
// .get('/', function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Vous êtes à l\'accueil, que puis-je pour vous ?');
// })
//
// .get('/sous-sol', function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
// })
//
// .get('/etage/1/chambre', function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hé ho, c\'est privé ici !');
// })
//
// .get('/etage/:etagenum/chambre',function (req,res) {
//     res.render('chambre.ejs',{etage: req.params.etagenum});
// })
//
// .get('/compter/:nombre', function(req,res) {
//     var noms = ['Robert', 'Jacques', 'David'];
//     res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
//
// })
// // ... Tout le code de gestion des routes (app.get) se trouve au-dessus
//
// .use(function(req, res, next){
//     res.setHeader('Content-Type', 'text/plain');
//     res.send(404, 'Page introuvable !');
// });

// app.listen(8080);
