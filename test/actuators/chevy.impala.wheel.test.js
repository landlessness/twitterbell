var vows = require('vows'),
  assert = require('assert'),
  bonescript = require('bonescript'),
  chevyImpalaWheel = require('../../app/actuators/chevy.impala.wheel').chevyImpalaWheel;

var off = 48,
  on = 49;

vows.describe('chevyImpalaWheel.test')
  .addBatch({
    'A Chevy Impala Wheel': {
      topic: chevyImpalaWheel,
      'when struck': {
        topic: function (chevyImpalaWheel) {
          chevyImpalaWheel.strike({
            callback: this.callback
          });
        },
        'is off eventually': function (err, chevyImpalaWheel) {
          assert.equal(digitalRead(chevyImpalaWheel.pin)[0], off);
        }
      }
    }
  })
  .export(module);