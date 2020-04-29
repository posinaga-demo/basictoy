const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {});
  //res.status(500).send("tremendous error");
});

app.get('/about', (req, res) => {
    res.render('about', {});
});

app.get('/community', (req, res) => {
  if(Math.random()<0.01) {
    res.status(500).send("very erratic error");
  } else {
    res.render('community', {});
  }
});

app.listen(3000, () => {
  console.log('server started');
});