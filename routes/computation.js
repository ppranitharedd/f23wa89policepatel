var express = require('express');

var router = express.Router();

 

var rand1 = Math.random() * 200;
var rand2 = Math.random() * 200;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
router.get('/', function (req, res, next) {
  num1 = Math.abs(rand1,rand2);
  num2 = Math.cos(rand1);
  num3 = Math.sinh(rand1);
  num4 = Math.sin(rand1);


  res.send(`The Random numbers are ${rand1} and ${rand2}
    <br> <br> abs applied to ${rand1} and ${rand2} is ${num1}
    <br> <br> acos applied to ${rand1} is ${num2}
    <br> <br> sinh applied to ${rand1} is ${num3}
    <br> <br> sin applied to ${rand1} is ${num4}`);
});

 

 

module.exports = router