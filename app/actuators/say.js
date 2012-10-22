var exec = require('child_process').exec;

function announceVisitor (tweet) {
  message = 'a visitor is here';
  exec("say '" + message + "'");
}