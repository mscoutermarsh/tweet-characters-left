var expect = require('chai').expect,
    tweetCharactersLeft = require('../index');

describe('tweetCharactersLeft', function() {
  it('returns number of chars left in a tweet', () => {
    expect(tweetCharactersLeft('Bieber, marry me!')).to.eq(263);
  });

  it('returns the max chars if no message', () => {
    expect(tweetCharactersLeft('')).to.eq(280);
  });

  it('shortens links', () => {
    expect(tweetCharactersLeft('https://www.producthunt.com')).to.eq(257);
  });

  it('handles negative numbers', () => {
    var longTweet = Array(100).join('abc');
    expect(tweetCharactersLeft(longTweet)).to.eq(-17);
  });
});
