import Vue from 'vue'; // Import Vue.js
import Vuetify from 'vuetify/lib'; // Import Vuetify

Vue.use(Vuetify); // Make Vue use Vuetify

// Export a new Vuetify Vue
export default new Vuetify({
	icons: {
		iconfont: 'fa'
	}
});
