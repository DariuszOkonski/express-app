const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/about', (req, res) => {
  return res.sendFile(path.join(__dirname, './views/about.html'));
});

app.get('/contact', (req, res) => {
  return res.sendFile(path.join(__dirname, './views/contact.html'));
});

app.get('/info', (req, res) => {
  return res.sendFile(path.join(__dirname, './views/info.html'));
});

app.get('/history', (req, res) => {
  return res.sendFile(path.join(__dirname, './views/history.html'));
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000...');
});
