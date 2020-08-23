var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const { reset } = require('nodemon');
const axios = require('axios');

app.use(cors())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-ControlAllow-Headers');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  // Adds middleware body parser
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
        extended: true,
    })
  );


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/test', (req, res) => {
    res.send({ express: 'node js server is working'});
});

// Test API call
app.get('/test2', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch(error => {
    console.log(error);
  });
})


// storing user data
function storeUserData(first, last) {
  let firstName = first;
  let lastName = last;
  let address;
  let phoneNum;
  let emaill;
  let dob;
  let ethnicity;
  console.log(firstName, lastName);
}

// var storeUserData = {
//    firstName,
//    lastName,
//    address,
//    phoneNum,
//    emaill,
//    dob,
//    ethnicity
// }


// store default messages
function getDefaultMessages() {
  console.log('[firstName lastName] is in [location] and feels unsafe and may need assistance.');
}

storeUserData('Bea', 'Jayme');

