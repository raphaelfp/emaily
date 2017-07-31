const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cookieSession = require('cookie-session');
var sslRedirect = require('heroku-ssl-redirect');

const keys = require('../config/keys');

require('../services/passportService');

module.exports = app => {
	app.use(sslRedirect());
	app.use(
		cookieSession({
			maxAge: 30 * 24 * 60 * 60 * 1000,
			keys: [keys.cookieKey]
		})
	);
	app.use(passport.initialize());
	app.use(passport.session());
};
