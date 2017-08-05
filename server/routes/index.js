module.exports = app => {
	require('./keepAwake')(app);
	require('./authRoute')(app);
	require('./apiRoute')(app);
	require('./billingRoute')(app);
	require('./surveyRoute')(app);
};
