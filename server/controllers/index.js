const cookieSession = require('cookie-session');
const sslRedirect = require('heroku-ssl-redirect');
const bodyParser = require('body-parser');
const keys = require('../config/keys');

module.exports = app => {
	app.use(
		cookieSession({
			maxAge: 30 * 24 * 60 * 60 * 1000,
			keys: [keys.cookieKey]
		})
	);
	app.use(sslRedirect());
	app.use(bodyParser.json());

	require('./passportController')(app);
};
