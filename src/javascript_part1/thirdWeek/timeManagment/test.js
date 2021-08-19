// Подключаем свою функцию
var date = require('./index.js');

//date("2017-05-16 13:45");

let sourceDate = "2017-05-16 13:45";

let time = date(sourceDate)
    .add(24, 'hours')
    .subtract(1, 'months')
    .add(3, "days")
    .add(15, "minutes");

console.log(time.date);