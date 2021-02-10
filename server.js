const express = require('express');
const app = express();
const path = require('path');

//Data parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Static files
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'public')));

//Basic routing
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(5050, () => {
  console.log('App is now listening to port 5000');
});