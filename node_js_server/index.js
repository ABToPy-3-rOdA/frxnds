const express = require('express');
const app = express();

const files = ['one', 'two', 'three']

app.get('/', (req,res,next) => {
  res.json({files});
})

app.get('/files', (req,res,next) => {
  res.send(files);
})

app.listen(80, ()=>{
  console.log('Сервер запущен', new Date())
});
