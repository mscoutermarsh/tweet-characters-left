var tweetCharactersLeft = require("tweet-characters-left");

// Twitters most common tweet.
console.log(tweetCharactersLeft("Bieber! Marry me!"));

// If we also included an image.
console.log(tweetCharactersLeft("Bieber! Marry me!", { hasImage: true }));
