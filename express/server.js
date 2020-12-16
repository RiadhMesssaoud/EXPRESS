const express = require('express');
const morgan = require('morgan')

const app = express();
const PORT = 5000;

app.use(express.json());

const workingTime = (req, res, next) => {
  let openDay = new Date();

  if (
    openDay.getHours() > 09 &&
    openDay.getHours() < 17 &&
    openDay.getDay() > 0 &&
    openDay.getDay() < 6
  ) {
    next();

  } 
  else {
    console.log("Our office is closed !!!");
    res.send("<h1> please contact us on working time :) ");
  }
};
app.use(workingTime);

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
app.set('view engine', 'ejs');

app.use(morgan('dev'))

app.get('/', (req, res) => {
  
  res.render('index.ejs');
});

app.get('/contact', (req, res) => {
  
  res.render('contact.ejs');
});
app.get('/service', (req, res) => {
  
  res.render('service.ejs');
});