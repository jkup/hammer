const connection    = require('../connection.js');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  connection.query("SELECT * FROM users WHERE id = ? ",
    [id],
    function(err, rows) {
      done(err, rows[0]);
  });
});
