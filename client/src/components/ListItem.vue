<template>
  <v-card class="mx-auto mt-2" max-width="500">
    <v-row align="end" class="fill-height">
      <v-col align-self="center" class="px-7" cols="4">
        <v-avatar class="profile" color="grey" size="100">
          <v-img v-bind:src="user.avatar" />
        </v-avatar>
      </v-col>
      <v-col class="py-0" align-self="center" cols="5">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">{{ user.firstName }} {{ user.lastName }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.country }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ user.age }} years old</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="3" class="py-0" align-self="center">
        <v-row justify="center">
          <v-icon x-large color="#abcaff" align-self="center" v-if="user.gender === 'male'">fa-mars</v-icon>
          <v-icon
            x-large
            color="#f2cdd7"
            align-self="center"
            v-if="user.gender === 'female'"
          >fa-venus</v-icon>
        </v-row>
        <v-row justify="center">
          <!-- dialog value becoms true when button is clicked, then Dialog is opened -->
          <v-btn class="mt-2" small color="#90d891" dark fab @click="dialog = true">
            <v-icon medium>mdi-plus</v-icon>
          </v-btn>
        </v-row>
        <v-dialog v-model="dialog" max-width="350">
          <v-card class="mx-auto">
            <!-- Render DetailsPage passing current user as a prop -->
            <DetailsPage :user="user" />
            <v-card-actions>
              <v-spacer />
              <!-- dialog value become false when the dialog is closed -->
              <v-btn color="gray darken-1" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import DetailsPage from "./pages/DetailsPage"; // Import DetailsPage component
// Export ListItem component
export default {
  name: "ListItem",
  props: {
    user: Object // The user prop received is an Object
  },
  components: {
    DetailsPage // DetailsPage component is used in here
  },
  data() {
    return {
      dialog: false // Set a dialog value to handle the opening and closing of the dialog
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-item {
  border-style: solid;
  border-color: gray;
  border-width: 1;
}
.avatar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
</style>
