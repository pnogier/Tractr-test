<template>
  <v-container>
    <v-row justify="center">
      <v-avatar class="profile mt-5" color="grey" size="100">
        <v-img v-bind:src="user.avatar" />
      </v-avatar>
    </v-row>
    <v-row class="mx-auto" justify="center">
      <v-card-title class="headline">{{ user.firstName }} {{ user.lastName }}</v-card-title>
    </v-row>
    <v-row justify="center">
      <v-simple-table height="300px">
        <tbody>
          <tr>
            <td>
              <strong>First name</strong>:
            </td>
            <td>{{ user.firstName }}</td>
          </tr>
          <tr>
            <td>
              <strong>Last name</strong>:
            </td>
            <td>{{ user.lastName }}</td>
          </tr>
          <tr>
            <td>
              <strong>Country</strong>:
            </td>
            <td>{{ user.country }}</td>
          </tr>
          <tr>
            <td>
              <strong>Age</strong>:
            </td>
            <td>{{ user.age }}</td>
          </tr>
          <tr>
            <td>
              <strong>Email</strong>:
            </td>
            <td>{{ user.email }}</td>
          </tr>
          <tr>
            <td>
              <strong>Gender</strong>:
            </td>
            <td>
              <v-icon
                medium
                color="#abcaff"
                align-self="center"
                v-if="user.gender === 'male'"
              >fa-mars</v-icon>
              <v-icon
                medium
                color="#f2cdd7"
                align-self="center"
                v-if="user.gender === 'female'"
              >fa-venus</v-icon>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-row>
  </v-container>
</template>

<script>
// Export DetailsPage component
export default {
  name: "DetailsPage",
  props: {
    user: Object // Receives user as an object
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
