var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todo-list'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('connecté à la base ')
})

connection.query('CREATE TABLE todos(id int primary key AUTO_INCREMENT, name varchar(255), done boolean)', function(err, result) {
  if (err) throw err
  console.log('table todos créé')
})

connection.query('INSERT INTO todos (name, done) VALUES (?, ?)', ['test', 0], function(err, result) {
  if (err) throw err
      console.log('insertion de test dans todo OK')
})
