/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    let resultCollection = collection.slice();
    let args = [].slice.call(collection);

    if(arguments.length === 1) {
        return resultCollection;
    }

    let selectParams = [];

    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i][0] === "select") {
            selectParams
        }
    }
}

/**
 * @params {String[]}
 */
function select() {
    return ["select"].concat([].slice.call(arguments));
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ["query"].concat([].slice.call(arguments));
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
