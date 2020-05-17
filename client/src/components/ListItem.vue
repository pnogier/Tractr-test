<template>
  <v-card class="mx-auto" max-width="500">
    <v-row align="end" class="fill-height">
      <v-col align-self="center" class="px-7" cols="4">
        <v-avatar class="profile" color="grey" size="100">
          <v-img v-bind:src="user.avatar" />
        </v-avatar>
      </v-col>
      <v-col class="py-0" align-self="center" cols="6">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">{{ user.firstName }} {{ user.lastName }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.country }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ user.age }} years old</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="2" class="py-0" align-self="center">
        <v-icon x-large align-self="center" v-if="user.gender === 'male'">fa-mars</v-icon>
        <v-icon x-large align-self="center" v-if="user.gender === 'female'">fa-venus</v-icon>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
// Export ListItem component
export default {
  name: "ListItem",
  props: {
    user: Object // The user prop received is an Object
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
