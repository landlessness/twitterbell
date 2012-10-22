exports.AppController = function () {
  console.info('exports.appController');
};

exports.AppController.prototype = {
  run: function() {
    console.info('AppController run');
    twitterController = new (require('../controllers/twitter.controller').TwitterController)();
    twitterController.run();
  }
}
