/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    if (hashtags.length === 0) {
        return "";
    } else {
        for (let i = 0; i < hashtags.length - 1; i++) {
            hashtags[i] = hashtags[i].toLowerCase();
            for (let j = i + 1; j < hashtags.length; j++) {
                if (hashtags[i].toLowerCase() === hashtags[j].toLowerCase()) {
                    hashtags.splice(j, 1);
                }
            }
        }
    }

    return hashtags.join(", ");
};
