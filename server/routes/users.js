const usersRoute = (app, fs) => {
	const file = './data/users.json'; // Get the path to the file to read in the index file system

	// Define the get method for the route
	app.get('/users', (request, response) => {
		// Read all the data from the file from the index.js file system
		fs.readFile(file, 'utf8', (error, data) => {
			// Catch error
			if (error) {
				throw error; // Throw the error
			}

			response.send(JSON.parse(data)); // Send the response as json
		});
	});
};

module.exports = usersRoute; // Export the route
