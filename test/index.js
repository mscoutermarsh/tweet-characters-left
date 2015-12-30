var expect = require('chai').expect,
    tweetCharactersLeft = require('../index');

describe('tweetCharactersLeft', function() {
  it('returns number of chars left in a tweet', () => {
    expect(tweetCharactersLeft('Bieber, marry me!')).to.eq(123);
  });

  it('returns the max chars if no message', () => {
    expect(tweetCharactersLeft('')).to.eq(140);
  });

  it('shortens links', () => {
    expect(tweetCharactersLeft('https://www.producthunt.com')).to.eq(117);
  });

  it('can leave space for image attachments', () => {
    expect(tweetCharactersLeft('', { hasImage: true })).to.eq(116);
  });

  it('handles negative numbers', () => {
    var longTweet = Array(100).join('abc');
    expect(tweetCharactersLeft(longTweet, { hasImage: true })).to.eq(-181);
  });
});
