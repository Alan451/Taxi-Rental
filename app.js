// Load environment variables
require('dotenv').config();

// Modules loading
const express = require('express');
const mongoose = require('mongoose');
const expressHelper = require('./utilities/express');
const errorHelper = require('./utilities/errors');
const authHelper = require('./utilities/auth');

// Create Express Application
const app = express();
const database_uri = process.env.database_uri

// Configure Express
expressHelper.setup(app);

// Configure Authentication
authHelper.setup(app);
mongoose.connect(database_uri, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false,})
    .then(result=>console.log("done"))
    .catch(error => console.log(error));
// Configure Routes
app.use('/', require('./routes/index'));
app.use('/profile', require('./routes/profile'));
app.use('/', require('./routes/driver'));

// Configure Errors
errorHelper.setup(app);

// Start Server
app.set('port', process.env.PORT || 4000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
