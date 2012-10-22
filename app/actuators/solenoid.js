exports.Solenoid = function (options) {
  if (!options || !options.pin) throw new Error('Must supply required options to Solenoid');
  this.pin = options.pin;
  pinMode(this.pin, OUTPUT);
};

exports.Solenoid.prototype = {
  on: function() {
    console.info('solenoid ' + this.pin.key + ' on');
    digitalWrite(this.pin, HIGH);
    return this;
  },
  off: function() {
    console.info('solenoid ' + this.pin.key + ' off');
    digitalWrite(this.pin, LOW);
    return this;
  },
  strike: function(options) {
    console.info('solenoid ' + this.pin.key + ' strike called');
    options = options || {}
    options.duration = options.duration || 50;
    this.on();
    setTimeout(function(t){
        t.off();
        if (options.callback) {
          options.callback(null, t);
        }
      }, options.duration, this
    );
    console.info('solenoid ' + this.pin.key + ' is striking');
    return this;
  },
};
