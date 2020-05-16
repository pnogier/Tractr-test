<template>
  <div class="list-item">
    <!-- Print the whole users array into a paragraph -->
    <div>
      <img class="avatar" v-bind:src="user.avatar" v-bind:alt="user.id" />
      <h2>{{ user.firstName }} {{ user.lastName }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    user: Object
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
