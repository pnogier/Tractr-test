<template>
  <v-container>
    <v-card color="#90d891" max-width="500" class="mx-auto">
      <v-card-title>Filters</v-card-title>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <!-- Age range selector, the value filters.age is an array -->
          <v-range-slider thumb-label="always" label="Age range" v-model="filters.age" step="1"></v-range-slider>
          <!-- Gender selector, items and value are arrays -->
          <v-select
            v-model="filters.genders"
            :items="genderItems"
            attach
            chips
            label="Genders"
            multiple
          ></v-select>
          <v-text-field
            v-model="filters.search"
            label="Search country, first name, last name..."
            prepend-icon="fa-search"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>
    <!-- Render the list only if the computed value filteredUsers is ready -->
    <v-list v-if="filteredUsers">
      <!-- Go through user in filteredUsers and render a ListItem for each of them -->
      <ListItem v-for="user in filteredUsers" :key="user.id" :user="user" />
    </v-list>
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
      users: [], // Set a users array to our component data
      filters: {
        age: [0, 100], // Age range filter, default min 0 max 100
        genders: ["male", "female"], // Genders array filter, default male and female
        search: null
      },
      genderItems: ["male", "female"] // Genders items for select
    };
  },
  computed: {
    // Define a computed value filteredUsers to get the filters applied users list
    filteredUsers() {
      // Return a new object going through each user is users using the filter method
      return this.users.filter(
        // Aply the filters
        user =>
          (user.gender == this.filters.genders[0] ||
            user.gender == this.filters.genders[1]) &&
          user.age >= this.filters.age[0] &&
          user.age <= this.filters.age[1]
      );
    }
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
