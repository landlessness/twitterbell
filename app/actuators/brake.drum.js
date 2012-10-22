var Solenoid = require('./solenoid').Solenoid,
  bonescript = require('bonescript');


exports.brakeDrum = new Solenoid({
  pin: bone.P8_4
});
