<template>
  <div id="app">
    <ListPage />
  </div>
</template>

<script>
import ListPage from "./components/ListPage.vue"; // Import the ListPage component

// Export the component with other components used in here
export default {
  name: "App",
  components: {
    ListPage
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
