const faker = require('faker'); // Require faker lib to generate fake profiles
const fs = require('fs'); // Require fs lib to write in file
// Require readline and create a interface to read on stdin
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

// Create a function to generate a specific number of users
const generateUsers = num => {
	let users = []; // Initialize an empty array to store our users

	// Loop until the last user is generated, incrementing the id
	for (let id = 1; id <= num; id++) {
		let genderArray = [ 'male', 'female' ]; // Create an array with genders
		gender = faker.random.arrayElement(genderArray); // Get a random gender in the array

		// Add the user to the users array
		users.push({
			id: id, // Set the id
			first_name: faker.name.firstName(gender), // Set a fake firstName related to the gender
			last_name: faker.name.lastName(), // Set a fake lastName
			gender: gender, // Set the gender previoulsy generated
			email: faker.internet.email(), // Set a fake email
			country: faker.address.country(), // Set a fake country
			avatar: faker.internet.avatar() // Set a fake avatar
		});
	}

	return { data: users }; // Setting the users aray to the 'data' key in an object
};

// Ask how many users to generate reading on the stdin
readline.question('How many fake users do you want ?\n', numUsers => {
	console.log(`Generating ${numUsers} users...\n`); // Tell the user that we are generating the correct amount of fake users
	let users = generateUsers(numUsers); // Generate the correct amount of fake users
	fs.writeFileSync('./data/users.json', JSON.stringify(users, null, '\t')); // Write the obtained object to a json file and add \t to make the file easier to read
	console.log(`${numUsers} fake users generated!`); // Tell the user that the correct amount of users has been generated
	readline.close(); // Close the input process
});
