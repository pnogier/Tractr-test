import Vue from 'vue'; // Import Vue.js
import App from './App.vue'; // Import the root component App
import vuetify from './plugins/vuetify'; // Import Vuetify Vue

Vue.config.productionTip = false; // Disable the console message which says we are running in development mode

// Create a new Vue app
new Vue({
	vuetify, // Use Vuetify Vue
	// Render the root component App to the DOM
	render: h => h(App)
}).$mount('#app'); // Mount this component to the div with an id of 'app' in the public/index.html file
