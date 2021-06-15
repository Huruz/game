<template>
  <div id="nav" class="container bg-white mx-auto h-screen my-auto py-5 rounded-sm">
    <router-link to="/">Home</router-link> |
    <router-link to="/about" v-show="!game.active">About</router-link>
    <router-view/>
  </div>
</template>
<script setup>
import game from '@/hooks/game'
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
