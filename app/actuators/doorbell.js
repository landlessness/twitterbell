exports.Doorbell = function() {
  this.flywheel = require('./flywheel').flywheel;
  this.brakeDrum = require('./brake.drum').brakeDrum;
  this.chevyImpalaWheel = require('./chevy.impala.wheel').chevyImpalaWheel;
}

exports.Doorbell.prototype = {
  ring: function(tweets) {
    console.info('ring');
    var that = this;
    this.flywheel.strike();
    setTimeout(function(){
      that.brakeDrum.strike();      
    },1000);
    setTimeout(function(){
      that.chevyImpalaWheel.strike();
    },2000);
  }
}
