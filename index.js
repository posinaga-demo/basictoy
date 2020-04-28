const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  //res.render('index', {});
  res.status(500).send("tremendous error");
});

app.listen(3000, () => {
  console.log('server started');
});