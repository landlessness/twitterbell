exports.TwitterController = function() {
  console.info('exports.TwitterController');
  this.twitterSensor = new (require('../sensors/twitter.sensor').TwitterSensor)();
  this.doorBell = new (require('../actuators/doorbell').Doorbell)();
  this.sinceID = 237113622617288700;
}

exports.TwitterController.prototype = {
  onDingDong: function(tweets) {
    console.info('Ding Dong!!!');
    console.info(tweets);
    this.doorBell.ring();
    this.sinceID = tweets[0].id;
    return this;
  },
  run: function () {
    console.info('AppController run');
    var that = this;
    this.twitterSensor.emitter.on("#dingdong", function(tweets) {
      that.onDingDong(tweets);
    });
    setInterval(function() {
      that.twitterSensor.checkForDingDongs({sinceID: that.sinceID});
    }, 12000);
  }
}

exports.twitterController = new exports.TwitterController();

