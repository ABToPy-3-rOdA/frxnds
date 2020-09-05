const express = require('express');
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const app = express();

app.use(express.static('html_files'))

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

let query="SELECT * FROM user";

connection.query(query, (err, result) => {
  console.log(err);
  console.log(result);
});

 app.get('/', function(req, res) {
   res.sendFile(__dirname + '/html_files/index.html');
 });

app.listen(80, () => {
  console.log('Сервер запущен', new Date())
});
