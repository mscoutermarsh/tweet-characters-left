var twitterText = require('twitter-text');

module.exports = function(text, imageAttachments) {
  var charsLeft = 140;

  // Images (1 or more), use up 24 characters.
  if (imageAttachments === true) { charsLeft -= 24; };

  return charsLeft - twitterText.getTweetLength(text);
};
