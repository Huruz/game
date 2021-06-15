<template>
  <div class="home mt-1">
    <HelloWorld/>
    <Instructions/>
    <Game :height="heightScreen" />
  </div>
</template>

<script>
// @ is an alias to /src
import { computed } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Instructions from '@/components/Instructions.vue'
import Game from '@/components/Game.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Instructions,
    Game,
  },
  setup(){
    const heightScreen = computed(() => screen.availHeight);

    return { heightScreen }
  }
}
</script>
