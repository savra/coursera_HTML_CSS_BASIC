// Подключаем свою функцию
//var date = require('./index.js');

//date("2017-05-16 13:45");


var timeManager = {
    _date: new Date()
};

Object.defineProperty(timeManager, "date", {
    get: function () {
        return this._date;
    },
    set: function (value) {
        this._date = value;
    }
});


console.log(timeManager.date);