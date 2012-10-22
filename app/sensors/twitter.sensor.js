exports.TwitterSensor = function () {
  this.twitter = new require('twitter')({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_OAUTH_TOKEN,
    access_token_secret: process.env.TWITTER_OAUTH_TOKEN_SECRET
  });
  this.sinceID;
  this.regexp = /ding\s*dong/i;
  this.emitter = new (require('events').EventEmitter);
};

exports.TwitterSensor.prototype = {
  checkForDingDongs: function(options) {
    console.info('checkForDingDongs');
    var that = this;
    var dingDongs=[];
    this.twitter.getMentions({
      since_id: options.sinceID
    }, function(tweets) {
      tweetsCount = tweets.length;
      for (var i=0;i<tweetsCount;i++) {
        tweet = tweets[i];
        if (tweet.text.match(that.regexp)) {
          dingDongs.push(tweet);
          console.info('DING DONG!');
          console.info(tweet.text);
        }
      }
      if (dingDongs.length > 0) {
        that.emitter.emit("#dingdong", dingDongs);
      }
      if (options.callback) {
        options.callback(null, dingDongs, that);
      }
    });
  }
};

