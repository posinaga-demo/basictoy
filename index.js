const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {});
});

app.listen(3000, () => {
  console.log('server started');
});











































// for demo

function doSomething(res, callback) {
  if(Math.random()<0.3) {
    res.status(500).send("erratic error");
  } else {
    callback();
  }
}

function doSomethingElse(res, callback) {
  if(Math.random()<0.03) {
    res.status(500).send("very erratic error");
  } else {
    callback();
  }
}