import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import record from "./routes/record.mjs";

import passport from "passport";
import session from "express-session";
import passportFacebook from "passport-facebook"
const FacebookStrategy = passportFacebook.Strategy;

// Replace with your Facebook App credentials
// When you make a Facebook App, that app will have an App ID and an App Secret. 
// With the App ID, you can send several requests to Facebook for data. 
// The Facebook App Secret will be used to decode the encrypted messages from Facebook, so that sensitive information remains protected.
const FACEBOOK_APP_ID = '830696828445338';
const FACEBOOK_APP_SECRET = '77e82e704817755aeb1ca9c1aa5abfdb';

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      // Your callback URL
      callbackURL: 'localhost:5050/facebook/callback', 
      // Fields you want to access from the user's Facebook profile
      profileFields: ['id', 'displayName', 'email'], 
    },
    async (accessToken, refreshToken, profile, done) => {
      //logic for using accessToken and RefreshToken
      return done(null, profile);
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", record);

app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Add Passport Facebook routes
app.get('/facebook', passport.authenticate('facebook'));
app.get('/facebook/callback', passport.authenticate('facebook', {
  // Redirect to the main page upon successful login.
  successRedirect: 'localhost:5050/home', 
  // Redirect to login page on authentication failure.
  failureRedirect: 'localhost:5050', 
}));

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});