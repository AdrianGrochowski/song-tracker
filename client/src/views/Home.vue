<template>
  <div>
    <h1>Song tracker</h1>
    <router-link to="/Register">Register</router-link>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
  }
</script>
