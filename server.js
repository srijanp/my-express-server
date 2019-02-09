//jshint esversion:6

const express = require('express');

const app = express();

app.get('/',function(req, res){
  res.send('<h1>Hello, World</h1>');
});

app.get('/Contact', function(req, res){
  res.send('<h2>Contact me @<i>srijan.dynashwet@gmail.com</i></h2>');
});

app.get('/About', function(req, res){
  res.send('<h2>I am a <b>Pro</b>grammer</h2>');
});

app.get('/Hobbies', function(req, res){
  res.send('<ul><li>Playing & Watching Football</li><li>Playing Guitar</li><li>Watching Movies & Series</li><li>Exploring</li></ul>');
});


app.listen(3000, function(){
  console.log('Server Started on port 3000');
});
// app.get('/', (req, res) => res.send('Hello World'));
