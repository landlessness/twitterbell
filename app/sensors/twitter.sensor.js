exports.TwitterSensor = function (interval) {
  this.interval=interval || 300;
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
    var that = this;
    var dingDongs=[];
    console.info('checkForDingDongs');
    this.twitter.getMentions({
      since_id: options.sinceID
    }, function(tweets) {
      tweetsCount = tweets.length;
      for (var i=0;i<tweetsCount;i++) {
        tweet = tweets[i];
        if (tweet.text.match(that.regexp)) {
          dingDongs.push(tweet);
          // emitter.emit("visitor", tweet);
        }
      }
      that.emitter.emit("#dingdong", dingDongs);
      options.callback(null, dingDongs, that);
    });
  }
};

