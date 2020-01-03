const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
var path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/views'));

app.get('/', function (req, res) {
    res.render('index', {weather: null, error: null});
});

app.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${'70ed67e234b983a135a88c0e3a79ae37'}`
    request(url, function (err, response, body) {
        if(err){
            console.log(err);
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
            let weather = JSON.parse(body)
            if(weather.main == undefined){
                res.render('index', {weather: null, error: 'Error, please try again'});
            } else {
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('index', {weather: weatherText, error: null});
            }
        }
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});