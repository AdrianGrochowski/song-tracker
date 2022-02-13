<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
     SongTracker
<v-btn>
        <router-link to="/songs">BROWSE</router-link>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="!$store.state.isUserLoggedIn">
        <router-link to="/login">LOGIN</router-link>
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn">
        <router-link to="/register">Sign up</router-link>
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn">
        Log out
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
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
};
</script>
