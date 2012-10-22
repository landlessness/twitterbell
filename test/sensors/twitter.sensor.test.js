var TwitterSensor = require('../../app/sensors/twitter.sensor').TwitterSensor,
  vows = require('vows'),
  assert = require('assert'),
  EventEmitter = require('events').EventEmitter;


vows.describe('twitter.sensor.test')
  .addBatch({
    'A twitter sensor': {
      topic: new TwitterSensor(),
      'contains the twitter module with OAuth from ENV': function (twitterSensor) {
        assert.equal(twitterSensor.twitter.options.consumer_key, process.env.TWITTER_CONSUMER_KEY);
      }
    }
  })
  .addBatch({
    'A twitter sensor': {
      topic: new TwitterSensor(),
      'checks the door for visitors': {
        topic: function (twitterSensor) { 
          twitterSensor.checkForDingDongs({
            callback: this.callback,
            sinceID: 237113622617288700
          });
        },
        'get back an array of ding dong tweets': function (err, dingDongs, twitterSensor) {
          assert.instanceOf(dingDongs, Array);
          console.info('dingDongs.length: ' + dingDongs.length);
          assert.strictEqual(dingDongs.length > 0, true);
          assert.match (dingDongs[0].text, twitterSensor.regexp);
        }
      }
    }
  })
  .addBatch({
    'a twitter sensor': {
      topic: new TwitterSensor(),
      'has an event emitter': function(twitterSensor) {
        assert.instanceOf(twitterSensor.emitter,EventEmitter);
      }
    }
  })
  .export(module);
