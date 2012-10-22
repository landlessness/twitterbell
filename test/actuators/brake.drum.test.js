var vows = require('vows'),
  assert = require('assert'),
  bonescript = require('bonescript'),
  brakeDrum = require('../../app/actuators/brake.drum').brakeDrum;

vows.describe('brake.drum.test')
  .addBatch({
    'A brake drum': {
      topic: brakeDrum,
      'has on function': function (brakeDrum) {
        assert.isFunction(brakeDrum.on);
      }
    }
  })
  .export(module);