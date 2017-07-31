const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

require('./controllers/passportController')(app);
require('./routes/authRoute')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Listening to port ${PORT}`);
