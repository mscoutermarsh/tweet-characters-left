const twitterText = require('twitter-text');

const TWEET_LENGTH = 280;

module.exports = function tweetCharactersLeft(text) {
  return TWEET_LENGTH - twitterText.parseTweet(text).weightedLength;
}
