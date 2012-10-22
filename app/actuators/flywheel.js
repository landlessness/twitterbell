var Solenoid = require('./solenoid').Solenoid,
  bonescript = require('bonescript');

exports.flywheel = new Solenoid({
  pin: bone.P8_3
});
