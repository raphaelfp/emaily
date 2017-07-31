const keys = require('./config/keys');

module.exports = app => {
	require('mongoose').connect(keys.mongoURI);
	require('./models');
	require('./controllers')(app);
	require('./routes')(app);
	require('./services');
};
