<template>
  <v-container>
    <ul>
      <!-- Go through user in users and render a ListItem for each of them -->
      <ListItem v-for="user in users" :key="user.id" :user="user" />
    </ul>
  </v-container>
</template>

<script>
import axios from "axios"; // Import axios to perform api calls
const API_URL = "http://localhost:4000/users"; // Set the api url as API_URL const
import ListItem from "../ListItem.vue"; // Import ListItem component

// Export ListPage component
export default {
  name: "ListPage",
  data() {
    return {
      users: [] // Set a users array to our component data
    };
  },
  mounted() {
    // Perform an API call when our component is mounted
    axios.get(API_URL).then(response => {
      this.users = response.data.users; // Save the response to this.users
    });
  },
  components: {
    ListItem // Export other components used in here
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
