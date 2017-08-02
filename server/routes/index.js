module.exports = app => {
	require('./authRoute')(app);
	require('./apiRoute')(app);
	require('./billingRoute')(app);
};
