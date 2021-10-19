<template>
  <div id="nav" class="container bg-gray-800 mx-auto h-screen my-auto">
    <div class="bg-black py-3">
      <router-link to="/">Home</router-link> |
      <router-link to="/about" v-show="!game.active">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { getFlags } from '@/hooks/game';

export default {
    setup(){ return  getFlags() }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
