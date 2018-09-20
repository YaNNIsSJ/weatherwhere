const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const PORT = process.env.PORT || 5000
const app = express()


const apiKey = '536ffa312e26abc2e1eaec7d7175ba4c';


app.use(express.static('public'));
app.use(express.static('public/Images'))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('pages/index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  var boolean = null;

  request(url, function (err, response, body) {
    if(err){
      res.render('pages/index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      let detail = JSON.parse(body)
     
      if(weather.main == undefined){
        res.render('pages/index', {weather: null, error: 'Apologies, we do not have information for this city'});
      } else {

        let weatherText = `It's ${weather.main.temp} °C in ${weather.name}!`;
        let weatherDescription = `Today, you should see ${weather.weather[0].description}.\nIt's ${weather.main.temp} °C in ${weather.name}!`;
        let weatherText1 = `It is quite hot, It's ${weather.main.temp} °C in ${weather.name}!`;

        if(weather.main.temp < 20){
        res.render('pages/index', {weather: weatherDescription, error: null});

       }else{

           res.render('pages/index', {weather: weatherDescription, error: true});

         // res.render('pages/index');
         // console.log('Its cold')
          //res.render('pages/index', {temperature: "It's very cold", error: null});
        }
      }
    }
  });
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))



