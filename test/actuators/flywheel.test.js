var vows = require('vows'),
  assert = require('assert'),
  bonescript = require('bonescript'),
  flywheel = require('../../app/actuators/flywheel').flywheel;

var off = 48,
  on = 49;

vows.describe('flywheel.test')
  .addBatch({
    'A flywheel': {
      topic: flywheel,
      'when struck': {
        topic: function (flywheel) {
          flywheel.strike({
            callback: this.callback
          });
        },
        'is off eventually': function (err, flywheel) {
          assert.equal(digitalRead(flywheel.pin)[0], off);
        }
      }
    }
  })
  .export(module);