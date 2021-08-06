/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    let newHours = Math.floor((minutes + interval) / 60);
    let newMinutes = (minutes + interval) % 60;

    if (hours + newHours >= 24) {
        newHours = (hours + newHours) % 24;
    } else {
        newHours += hours;
    }

    return (newHours < 10 ? "0" + newHours : newHours) + ":" + (newMinutes < 10 ? "0" + newMinutes : newMinutes);
};
