var http = require('http');
setInterval(function() {
	http.get('https://emaily-server.herokuapp.com');
	console.log('Wake up');
}, 600000); // every 10 minutes (600000)
