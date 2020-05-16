const express = require('express'); // Load express to create the server
const bodyParser = require('body-parser'); // Load body-parser to parse requests
const fs = require('fs'); // Load node file system to serve our json files
const cors = require('cors');

const app = express(); // Create an express app

app.use(bodyParser.json()); // Our app will only parse json
app.use(bodyParser.urlencoded({ extended: true })); // Will use the qs library to parse the urlencoded
app.use(cors()); // Make the express app use cors to allow cross domain get

// Import routes from our routes file passing our express app and the actual file system as argument
const routes = require('./routes/router')(app, fs);

// Start the server on port 4000
const server = app.listen(4000, function() {
	console.log(`Server running on port ${server.address().port}...`); // Log that the server is running
});
