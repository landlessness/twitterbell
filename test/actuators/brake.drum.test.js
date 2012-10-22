var vows = require('vows'),
  assert = require('assert'),
  bonescript = require('bonescript'),
  brakeDrum = require('../../app/actuators/brake.drum').brakeDrum;

var off = 48,
  on = 49;

vows.describe('brake.drum.test')
  .addBatch({
    'A brake drum': {
      topic: brakeDrum,
      'when struck': {
        topic: function (brakeDrum) {
          brakeDrum.strike({
            callback: this.callback
          });
        },
        'is off eventually': function (err, brakeDrum) {
          assert.equal(digitalRead(brakeDrum.pin)[0], off);
        }
      }
    }
  })
  .export(module);