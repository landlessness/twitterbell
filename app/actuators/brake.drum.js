var Solenoid = require('./solenoid').Solenoid;

exports.brakeDrum = new Solenoid({
  pin: bone.P8_3
});
