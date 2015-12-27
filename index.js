const twitterText = require('twitter-text');

const TWEET_LENGTH = 140;
const IMAGE_ATTACHMENTS_LENGTH = 24;

function tweetCharactersLeft(text, imageAttachments) {
  var charsLeft = TWEET_LENGTH;

  if (imageAttachments === true) {
    charsLeft -= IMAGE_ATTACHMENTS_LENGTH;
  }

  return charsLeft - twitterText.getTweetLength(text);
}

module.exports = tweetCharactersLeft;
