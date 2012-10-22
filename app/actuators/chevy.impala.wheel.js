var Solenoid = require('./solenoid').Solenoid,
  bonescript = require('bonescript');

exports.chevyImpalaWheel = new Solenoid({
  pin: bone.P8_5
});
