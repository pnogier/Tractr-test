const express = require('express'); // Load express to create the server
const bodyParser = require('body-parser'); // Load body-parser to parse requests

const app = express(); // Create an express app

app.use(bodyParser.json()); // Our app will only parse json
app.use(bodyParser.urlencoded({ extended: true })); // Will use the qs library to parse the urlencoded

// Start the server on port 4000
const server = app.listen(4000, function() {
	console.log(`Server running on port ${server.address().port}...`); // Log that the server is running
});
