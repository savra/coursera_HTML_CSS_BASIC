/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    if(hashtags.length === 0){
        return "";
    }
    hashtags = hashtags.join(" ").toLowerCase().split(" ");
    let new_hashtags = hashtags.filter((item, index) => {
        return hashtags.indexOf(item) === index;
    })
    return new_hashtags.join(', ');
};
