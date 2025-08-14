const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };

  next();
});

app.get('/', (req, res) => {
  return res.show('index.html');
});

app.get('/about', (req, res) => {
  return res.show('about.html');
});

app.get('/contact', (req, res) => {
  return res.show('contact.html');
});

app.get('/info', (req, res) => {
  return res.show('info.html');
});

app.get('/history', (req, res) => {
  return res.show('history.html');
});

app.use((req, res) => {
  return res.status(404).send('404 not found...');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000...');
});
