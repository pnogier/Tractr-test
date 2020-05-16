const usersRoute = require('./users'); // Require the users route

// Create the router with our express app and the index.js file system
const router = (app, fs) => {
	// Create a get method on the root route
	app.get('/', (request, response) => {
		response.send('Root route'); // Will just send 'Root route' as a reponse to get
	});

	usersRoute(app, fs); // Add the usersRoute to the router, passing our express app and the index.js file system as arguments
};

module.exports = router; // Export the router
