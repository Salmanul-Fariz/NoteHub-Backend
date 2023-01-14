const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../config');

module.exports = () => {
  const CLIENT_ID = GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = GOOGLE_CLIENT_SECRET;
  let userProfile;
  passport.use(
    new GoogleStrategy(
      {
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: 'http://localhost:8000/api/auth/google/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        userProfile = profile;
        return done(null, userProfile);
      }
    )
  );
};
