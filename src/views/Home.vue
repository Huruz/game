<template>
  <div class="home flex-auto">
      <div v-if="displayGame.active" class="grid grid-cols-12 gap-2 h-full">
        <div class="card bg-darkS col-start-3 col-end-11 my-auto p-3 rounded-md border-8 border-blue-400">
          <HelloWorld/>
          <Instructions/>
        </div>
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
