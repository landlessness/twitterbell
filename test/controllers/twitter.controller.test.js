var twitterController = require('../../app/controllers/twitter.controller').twitterController,
  TwitterSensor = require('../../app/sensors/twitter.sensor').TwitterSensor,
  vows = require('vows'),
  assert = require('assert');

vows.describe('twitter.controller.test')
  .addBatch({
    'A twitter controller': {
      topic: twitterController,
      'contains a Twitter Sense': function (twitterSensor) {
        assert.instanceOf(twitterController.twitterSensor, TwitterSensor);
      }
    }
  })
  .export(module);
