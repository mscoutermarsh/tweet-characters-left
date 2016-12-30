# tweet-characters-left :bird:
[![npm version](https://badge.fury.io/js/tweet-characters-left.svg)](https://badge.fury.io/js/tweet-characters-left)
[![Build Status](https://travis-ci.org/mscoutermarsh/tweet-characters-left.svg?branch=master)](https://travis-ci.org/mscoutermarsh/tweet-characters-left)
[![Code Climate](https://codeclimate.com/github/mscoutermarsh/tweet-characters-left/badges/gpa.svg)](https://codeclimate.com/github/mscoutermarsh/tweet-characters-left)

A Node module for determining the number of characters left in a tweet. It uses Twitter's official TwitterText library to count characters.

## Installation
```Bash
npm install tweet-characters-left --save
```

## Usage
```JavaScript
var tweetCharactersLeft = require("tweet-characters-left");

// Twitters most common tweet
tweetCharactersLeft("Bieber! Marry me!");
// => 123
```

## Tests
```Bash
npm test
```

## Contributing :heart:

Want to make this better? Great! :smile:

Bug reports and pull requests are welcome on GitHub at https://github.com/mscoutermarsh/tweet-characters-left. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The module is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
