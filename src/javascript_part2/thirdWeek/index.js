/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    let promises = [];



    for (let operation of operations) {
        promises.push(new Promise((resolve, reject) => {
            operation((err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        }));
    }

    Promise.all(promises).then(data => callback(null, data)).catch(reason => callback(reason));
};