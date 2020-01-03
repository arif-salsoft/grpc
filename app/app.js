const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
var path = require('path');

const db = require(path.join(__dirname,'/db'));

const employeeService = require(path.join(__dirname, '/../', 'client.js'));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/views'));

app.get('/', function (req, res) {
    
    employeeService.getAll();

    res.render('index', {weather: null, error: null});
});

app.post('/', function (req, res) {
    
    

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});