<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
     SongTracker

      <v-spacer></v-spacer>
      <v-btn>
        <router-link to="/login">LOGIN</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/register">Sign up</router-link>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
