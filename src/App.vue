<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Vuelos.com</v-app-bar-title>
      <v-btn to="/">Home</v-btn>
    </v-app-bar>
    <v-main app>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
}
</script>
