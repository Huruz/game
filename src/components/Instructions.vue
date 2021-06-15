<template>
  <div>
    <button @click="show = true" :class="claseBtn">Controles</button>
    <teleport to="body">
      <div id="keysInfo" 
        class="text-left modal absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50" 
        v-if="show">
        <div class="flex flex-col justify-center items-center bg-blue-50 rounded-md md:p-4 sm:p-2
                    w-3/4 lg:w-1/2 h-1/2 lg:h-3/5 md:h-2/3 sm:h-3/5
                    text-xs md:text-base sm:text-sm">
          <h3 class="font-bold">Controles</h3>
          <h4 class="ml-2 font-semibold">Teclas</h4>
          <ul class="ml-2">
              <li class="px-1 py-2" v-for="(control,i) in controles" :key="i">
                <span :class="claseSpanKey">{{control.key}}</span> - Para {{control.description}}
              </li>
          </ul>
          <button @click="show = false" :class="claseBtn">Cerrar</button>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const show = ref(false);
    const claseSpanKey = ref("p-1 bg-white text-black border-black rounded-md border-2");
    const claseBtn = ref("rounded-md bg-red-500 hover:bg-red-700 py-1 px-1.5 m-1 text-white");
    const controles = ref([
      { key: "W", description: " moverte hacia arriba" },
      { key: "S", description: " moverte hacia abajo" },
      { key: "A", description: " moverte hacia la izquierda" },
      { key: "D", description: " moverte hacia la derecha" },
      { key: "Enter", description: " iniciar el juego y el inicio de cada nivel" },
      { key: "Space (Barra espaciadora)", description: " hacer un disparo por el jugador" },
    ]);

    return { claseSpanKey, claseBtn, controles, show }
  },
}
</script>