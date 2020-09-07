const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const Docter = require("../models/docters");

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "Hospital";

passport.use(
  new JwtStrategy(opts, function (jwtPayLoad, done) {
    Docter.findById(jwtPayLoad._id, function (err, docter) {
      if (err) {
        console.log("Error in finding user from JWT");
        return;
      }
      if (docter) {
        return done(null, docter);
      } else {
        return done(null, false);
      }
    });
  })
);

module.exports = passport;
