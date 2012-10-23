exports.Doorbell = function() {
  this.flywheel = require('./flywheel').flywheel;
  this.brakeDrum = require('./brake.drum').brakeDrum;
  this.chevyImpalaWheel = require('./chevy.impala.wheel').chevyImpalaWheel;
}

exports.Doorbell.prototype = {
  ring: function(tweets) {
    console.info('ring');
    var that = this;

    that.brakeDrum.strike();
    setTimeout(function(){
      that.chevyImpalaWheel.strike();
    },500);
    setTimeout(function(){
      that.flywheel.strike();
    },1000);

    setTimeout(function(){
      that.brakeDrum.strike();
    },1500);
    setTimeout(function(){
      that.flywheel.strike();
    },2000);
    setTimeout(function(){
      that.chevyImpalaWheel.strike();
    },2500);

    setTimeout(function(){
      that.brakeDrum.strike();
    },3500);
    setTimeout(function(){
      that.flywheel.strike();
    },4000);


    setTimeout(function(){
      that.brakeDrum.strike();
    },6000);
    setTimeout(function(){
      that.flywheel.strike();
    },6200);
    setTimeout(function(){
      that.chevyImpalaWheel.strike();
    },6300);
  }
}
