const connection    = require('../connection.js');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcryptjs');

module.exports = function(salt) {

  passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, email, password, done) {
    connection.query("SELECT * FROM users WHERE email = ?",
      [email],
      function(err, rows) {
        if (err)
          return done(err);

        if (!rows.length) {
          return done(null, false, req.flash('flashMessage', 'Invalid login details'));
        }

        if (bcrypt.hashSync(password, salt) !== rows[0].password) {
          return done(null, false, req.flash('flashMessage', 'Invalid login details'));
        }

        return done(null, rows[0]);
      })
  }));
}
