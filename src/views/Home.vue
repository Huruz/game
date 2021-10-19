<template>
  <div class="home">
    <div v-if="!displayGame.active">
    <HelloWorld/>
    <Instructions/>
    </div>
    <Game v-else :height="heightScreen" />
  </div>
</template>

<script>
// @ is an alias to /src
import { computed } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Instructions from '@/components/Instructions.vue'
import Game from '@/components/Game.vue'
import { getFlags } from '@/hooks/game'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Instructions,
    Game,
  },
  setup(){
    const heightScreen = computed(() => screen.availHeight);

    return { heightScreen, ...getFlags() }
  }
}
</script>
