var Solenoid = require('./solenoid').Solenoid;

exports.flywheel = new Solenoid({
  pin: bone.P8_4
});
