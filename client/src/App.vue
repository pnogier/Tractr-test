<template>
  <v-app>
    <v-content>
      <!-- Render ListPage component -->
      <ListPage />
    </v-content>
  </v-app>
</template>

<script>
import ListPage from "./components/pages/ListPage"; // Import ListPage component

export default {
  name: "App",
  components: {
    ListPage // Export with used components
  }
};
</script>
