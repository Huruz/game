<template>
  <div id="nav" class="m-0 h-full flex flex-col">
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
  color: #033C77;
}

#nav a.router-link-exact-active {
  color: #1879DD;
}
</style>
