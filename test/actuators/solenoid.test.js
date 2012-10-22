var vows = require('vows'),
  assert = require('assert'),
  bonescript = require('bonescript');
  
  Solenoid = require('../../app/actuators/solenoid').Solenoid;

var off = 48,
  on = 49;

vows.describe('solenoid.test')
  .addBatch({
    'A solenoid created with pin set to P8_3': {
      topic: new Solenoid({pin: bone.P8_3}),
      'pin equals P8_3': function (solenoid) {
        assert.equal(solenoid.pin,bone.P8_3);
      },
      'is a Solenoid': function (solenoid) {
        assert.instanceOf(solenoid, Solenoid);
      },
      'pin mode is write': function (solenoid) {
        assert.equal(getPinMode(solenoid.pin).rx,'disabled');
      }
    }
  })
  .addBatch({
    'A solenoid': {
      topic: new Solenoid({pin: bone.P8_3}),
      'when turned on': {
        topic: function (solenoid) {
          return solenoid.on();
        },
        'raises the pin': function (solenoid) {
          assert.equal(digitalRead(solenoid.pin)[0], on);
        }
      }
    }
  })
  .addBatch({
    'A solenoid': {
      topic: new Solenoid({pin: bone.P8_3}),
      'when turned off': {
        topic: function (solenoid) {
          return solenoid.off();
        },
        'lowers the pin': function (solenoid) {
          assert.equal(digitalRead(solenoid.pin)[0], off);
        }
      }
    }
  })
  .addBatch({
    'A solenoid': {
      topic: new Solenoid({pin: bone.P8_3}),
      'when struck': {
        topic: function (solenoid) {
          solenoid.strike({
            callback: this.callback, 
            duration: 100
          });
        },
        'is off eventually': function (err, solenoid) {
          assert.equal(digitalRead(solenoid.pin)[0], off);
        }
      }
    }
  })
  .export(module);
