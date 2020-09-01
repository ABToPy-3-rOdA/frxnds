const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const app = express();

const files = ['zero', 'one', 'two']

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "frx",
  password: "frx24"
});

connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к базе успешно установлено");
    }
 });

app.get('/', (req,res,next) => {
  res.send("its working");
});

app.get('/files', (req,res,next) => {
  console.log('Page', req.query.page);
  res.json({files});
});

app.get('/registration', (req,res,next) => {

  connection.execute("SELECT * FROM users",
    function(err, result, fields) {
      console.log(err);
      console.log(result);
      console.log(field);
    });

  });

app.get('/files/:id', (req, res, next) => {
  if(files[req.params.id]){
    res.send(files[req.params.id]);
  } else {
    res.status(404).send('Files not found');
  }
});

app.listen(80, () => {
  console.log('Сервер запущен', new Date())
});
