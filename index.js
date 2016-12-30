const twitterText = require('twitter-text');

const TWEET_LENGTH = 140;

module.exports = function tweetCharactersLeft(text) {
  return TWEET_LENGTH - twitterText.getTweetLength(text);
}
