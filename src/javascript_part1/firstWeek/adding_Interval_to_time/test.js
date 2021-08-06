let hours = 19,
    minutes = 47,
    interval = 979;

let newHours = Math.floor((minutes + interval) / 60);
let newMinutes = (minutes + interval) % 60;

if (hours + newHours >= 24) {
    newHours = (hours + newHours) % 24;
} else {
    newHours += hours;
}

console.log((newHours < 10 ? "0" + newHours : newHours) + ":" + (newMinutes < 10 ? "0" + newMinutes : newMinutes));
