const cookieSession = require('cookie-session');
var sslRedirect = require('heroku-ssl-redirect');
const keys = require('../config/keys');

module.exports = app => {
	app.use(
		cookieSession({
			maxAge: 30 * 24 * 60 * 60 * 1000,
			keys: [keys.cookieKey]
		})
	);
	app.use(sslRedirect());

	require('./passportController')(app);
};
