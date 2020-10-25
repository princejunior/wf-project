const express = require('express');
const app = express();

const path = require('path');
const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

// tell it to use the public directory as one where static files live
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('home.html');
});

app.get('/home', (req, res) => {
  res.render('pages/homepage.html');
});
app.get('/contact', (req, res) => {
  res.render('pages/contact.html');
});

app.get('/employers', (req, res) => {
  res.render('pages/employers.html');
});

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   fs.readFile('pages/home.html', (error, data) => {
//     if (error) {
//       res.writeHead(404);
//       res.write('Error file not found');
//     } else res.write(data);
//     res.end();
//   });
// });

app.listen(port, (error) => {
  if (error) console.log('Error: ', error);
  else console.log('Server connected to ', port);
});
