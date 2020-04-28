const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {});
  //res.status(500).send("tremendous error");
});

app.get('/about', (req, res) => {
  if(Math.random()>0.1) {
    res.render('about', {});
  } else {
    res.status(500).send("erratic error");
  }
});

app.listen(3000, () => {
  console.log('server started');
});