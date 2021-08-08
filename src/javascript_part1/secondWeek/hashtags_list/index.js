/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let words = tweet.split(" ");
    let tweets = [];

    words.forEach(word => {
        if (word.startsWith("#")) {
            tweets.push(word.slice(1));
        }
    })

    return tweets;
};
