const twitterText = require('twitter-text');

const TWEET_LENGTH = 140;
const IMAGE_ATTACHMENT_LENGTH = 24;

module.exports = function tweetCharactersLeft(text, options) {
  var options = options || {};
  var charsLeft = TWEET_LENGTH;

  if (options.hasImage === true) {
    charsLeft -= IMAGE_ATTACHMENT_LENGTH;
  }

  return charsLeft - twitterText.getTweetLength(text);
}
