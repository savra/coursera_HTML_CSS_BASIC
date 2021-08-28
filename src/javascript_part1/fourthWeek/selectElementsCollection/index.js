/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    let resultCollection = collection.slice();
    let args = [].slice.call(arguments);

    if (args.length === 1) {
        return resultCollection;
    }

    let keys = Object.keys(args[0][0]);

    for (let i = 1; i < args.length; i++) {
        for (let j = 1; j < args[i].length; j++) {
            if (args[i][0] === "select" && !keys.includes(args[i][j])) {
                args[i].splice(j, 1);
                i--;
            }
        }
    }

    let resultSelectParams = [];
    let selectCount = 0;
    let resultQueryParams = [];

    for (let i = 1; i < args.length; i++) {
        if (args[i][0] === "select") {
            selectCount++;
            if (resultSelectParams.length > 0) {
                resultSelectParams = resultSelectParams.filter(value => args[i].includes(value));
            } else {
                resultSelectParams = args[i].slice(1);
            }
        } else if (args[i][0] === "query") {
            if (resultQueryParams.map((e) => e.paramName).includes(args[i][1])) {
                for (let j = 0; j < resultQueryParams.length; j++) {
                    if (resultQueryParams[j].paramName === args[i][1]) {
                        resultQueryParams[j].paramValues = resultQueryParams[j].paramValues.filter(value => args[i][2].includes(value));
                    }
                }
            } else {
                let paramObj = {
                    paramName: "",
                    paramValues: []
                };

                paramObj.paramName = args[i][1];
                paramObj.paramValues = args[i][2].slice(0);
                resultQueryParams.push(paramObj);
            }
        }
    }

    //Filtering
    for (let i = 0; i < resultCollection.length; i++) {
        for (let j = 0; j < resultQueryParams.length; j++) {
            if (!resultQueryParams[j].paramValues.includes(resultCollection[i][resultQueryParams[j].paramName])) {
                resultCollection.splice(i, 1);
                i--;
                break;
            }
        }
    }

    let superResultCollection = [];

    if (resultSelectParams.length !== 0) {
        for (let i = 0; i < resultCollection.length; i++) {
            let tmpObject = {};
            for (let key in resultCollection[i]) {
                if (resultSelectParams.includes(key)) {
                    Object.defineProperty(tmpObject, key, {
                        value: resultCollection[i][key], writable: true,
                        enumerable: true,
                        configurable: true
                    });

                }
            }
            superResultCollection.push(tmpObject);
        }
    } else if (resultSelectParams.length === 0 && selectCount === 0) {
        superResultCollection = resultCollection.slice();
    } else {
        superResultCollection = [];
    }

    return superResultCollection;
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
