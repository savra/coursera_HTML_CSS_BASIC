/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    let timeManager = {
        _date: new Date(),
        add: function (value, unit) {
            this.validate(value, unit);
        },
        subtract : function (value, unit) {
            this.validate(value, unit);
        },
        validate: function (value, unit) {
            if (value < 0) {
                return new TypeError("Количество единиц не может быть отрицательным");
            }

            if (!/years|months|days|hours|minutes/i.test(unit)) {
                return new TypeError("Неизвестная единица измерения");
            }
        }
    };

    Object.defineProperty(timeManager, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        }
    });

    let normalizeDate = date.match(/(\d{4,})-([0-1][0-2])-([1-9]|1[0-2])/);
    return normalizeDate;
};