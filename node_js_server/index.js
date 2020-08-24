const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const files = ['zero', 'one', 'two']

const urlencodedParser = bodyParser.urlencoded({extended: false});
console.log(urlencodedParser)

app.get('/', (req,res,next) => {
  res.send("its working");
});

app.get('/files', (req,res,next) => {
  console.log('Page', req.query.page);
  res.json({files});
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
