const connection    = require('../connection.js');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcryptjs');

module.exports = function(salt) {
  passport.use('local-signup', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, username, password, done) {
    connection.query("SELECT * FROM users WHERE username = ?",
      [username],
      function(err, rows) {
        if (err) {
          return done(err);
        }

        if (rows.length) {
          return done(null, false, req.flash('flashMessage', 'Sorry! That username is already taken.'));
        } else {
          const User = {
            username: username,
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
          };

          const insertQuery = "INSERT INTO users (username, email, password) values (?,?,?)";

          connection.query(insertQuery, [User.username, User.email, User.password],
            function(err, rows) {
              if (err) {
                console.log(err);
                return done(null, false, req.flash('flashMessage', 'Sorry! That email is already taken.'));
              }

              User.id = rows.insertId;

              return done(null, User);
          });
        }
      })
  }));
}
