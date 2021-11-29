module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.collection = Array.from([]);
}


// Методы коллекции
Collection.prototype.values = function () {
    return this.collection;
};
Collection.prototype.at = function (index) {
    return this.collection[index - 1];
};
Collection.prototype.append = function (value) {
    if (value instanceof Collection) {
        Array.from(value.collection).forEach(elem => this.collection.push(elem));
    } else if (value instanceof Array) {
        value.forEach(elem => this.collection.push(elem));
    } else {
        this.collection.push(value);
    }
};
Collection.prototype.removeAt = function (index) {
    if (this.at(index)) {
        this.collection.splice(index - 1, 1);
        return true;
    } else {
        return false;
    }
};
Collection.prototype.count = function () {
    return this.collection.length;
};
// другие методы


/**
 * Создание коллекции из массива значений
 */
Collection.from = function (array) {
    let collection = new Collection();
    collection.append(array);
    return collection;
};