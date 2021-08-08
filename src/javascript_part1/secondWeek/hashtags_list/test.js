let tweet = "Прохожу курс на #coursera по #javascript";
let words = tweet.split(" ");
let tweets = [];

words.forEach(word => {
    if (word.startsWith("#")) {
        tweets.push(word.slice(1));
    }
})

tweets.forEach(tweet => console.log(tweet));
