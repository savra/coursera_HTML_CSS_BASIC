/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    let timeManager = {
        _date: new Date(),
        add: function (value, unit) {
            this.validate(value, unit);

            switch (unit) {
                case "years":
                    this._date.setFullYear(this._date.getFullYear() + value);
                    break;
                case "months":
                    this._date.setMonth(this._date.getMonth() + value);
                    break;
                case "days":
                    this._date.setHours(this._date.getHours() + value * 24);
                    break;
                case "hours":
                    this._date.setHours(this._date.getHours() + value );
                    break;
                case "minutes":
                    this._date.setMinutes(this._date.getMinutes() + value);
                    break;
            }

            return this;
        },
        subtract : function (value, unit) {
            this.validate(value, unit);

            switch (unit) {
                case "years":
                    this._date.setFullYear(this._date.getFullYear() - value);
                    break;
                case "months":
                    this._date.setMonth(this._date.getMonth() - value);
                    break;
                case "days":
                    this._date.setHours(this._date.getHours() - value * 24);
                    break;
                case "hours":
                    this._date.setHours(this._date.getHours() - value );
                    break;
                case "minutes":
                    this._date.setMinutes(this._date.getMinutes() - value);
                    break;
            }

            return this;
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

    let matches = date.match(/(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])\s+(\d{2}):(\d{2})/);
    timeManager.date = new Date(Number(matches[1]), Number(matches[2]), Number(matches[3]), Number(matches[4]), Number(matches[5]));
    timeManager.date.setMonth(timeManager.date.getMonth() - 1);

    return timeManager;
};