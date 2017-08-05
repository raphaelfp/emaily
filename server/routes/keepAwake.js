const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
	app.get('/ping', (req, res) => {
		res.send({ message: 'pong' });
	});
};

setInterval(async () => {
	try {
		const res = await axios.get(`${keys.url}/ping`);
		//console.log(`ping - ${res.data.message}`);
	} catch (err) {
		console.log(`Failed to Ping. Error: ${err}}`);
	}
}, 600000); // every 10 minutes (600000)
