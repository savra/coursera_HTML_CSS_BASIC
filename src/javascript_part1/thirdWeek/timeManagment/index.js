/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    let timeManager = {
        _value: new Date(),
        add: function (value, unit) {
            try {
                this.validate(value, unit);
            } catch (e) {
                if (e instanceof TypeError) {
                    throw e;
                }
            }

            switch (unit) {
                case "years":
                    this._value.setFullYear(this._value.getFullYear() + value);
                    break;
                case "months":
                    this._value.setMonth(this._value.getMonth() + value);
                    break;
                case "days":
                    this._value.setHours(this._value.getHours() + value * 24);
                    break;
                case "hours":
                    this._value.setHours(this._value.getHours() + value );
                    break;
                case "minutes":
                    this._value.setMinutes(this._value.getMinutes() + value);
                    break;
            }

            return this;
        },
        subtract : function (value, unit) {
            try {
                this.validate(value, unit);
            } catch (e) {
                if (e instanceof TypeError) {
                    throw e;
                }
            }

            switch (unit) {
                case "years":
                    this._value.setFullYear(this._value.getFullYear() - value);
                    break;
                case "months":
                    this._value.setMonth(this._value.getMonth() - value);
                    break;
                case "days":
                    this._value.setHours(this._value.getHours() - value * 24);
                    break;
                case "hours":
                    this._value.setHours(this._value.getHours() - value);
                    break;
                case "minutes":
                    this._value.setMinutes(this._value.getMinutes() - value);
                    break;
            }

            return this;
        },
        validate: function (value, unit) {
            if (value < 0) {
                throw new TypeError("Количество единиц не может быть отрицательным");
            }

            if (!/(^years)|(^months)|(^days)|(^hours)|(^minutes)/i.test(unit)) {
                throw new TypeError("Неизвестная единица измерения");
            }
        }
    };

    Object.defineProperty(timeManager, "value", {
        get: function () {

            return this._value.getFullYear() + "-" + ("0" + (this._value.getMonth() + 1)).slice(-2) + "-"
                + ('0' + this._value.getDate()).slice(-2) + " " + ('0' + this._value.getHours()).slice(-2) + ":" + ('0' + this._value.getMinutes()).slice(-2);
        },
        set: function (value) {
            this._value = value;
        }
    });

    let matches = date.match(/(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])\s+(\d{2}):(\d{2})/);
    timeManager._value = new Date(Number(matches[1]), Number(matches[2]), Number(matches[3]), Number(matches[4]), Number(matches[5]));
    timeManager._value.setMonth(timeManager._value.getMonth() - 1);

    return timeManager;
};