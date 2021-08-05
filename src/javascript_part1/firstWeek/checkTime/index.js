/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    return Number(hours) >= 0 && Number(hours) <= 23 && Number(minutes) >= 0 && Number(minutes) <= 59;
};
