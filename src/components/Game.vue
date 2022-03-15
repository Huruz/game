<template>
    <div class="game mt-4 grid grid-cols-4">
        <div class="px-5">
            <div class="bg-gradient-to-b from-blue-900 to-blue-500 shadow-md rounded-b-lg py-2 text-white">
                <h3 class="text-center font-bold">Nivel: {{nivelActual}}</h3>
                <hr class="p-1">
                <h5 class="px-2 text-justify text-sm">{{msgNivel}}</h5>
            </div>
        </div>
        <div id="area" class="col-span-3            flex justify-center">
            <canvas id="canvas" :height="heightC">Canvas</canvas>
        </div>
        <div class="mt-4 col-span-4 flex justify-center">
            <button class="rounded-md border-2 hover:border-transparent border-blue-600 hover:bg-blue-900 py-1 px-3 m-1 text-white font-semibold"
                @click="displayGame.change(false)">
                Regresar</button>
        </div>        
    </div>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { initiate, getData, stopGame } from '@/hooks/createGame';
import { getFlags } from '@/hooks/game';

export default {
    props:{
        height: Number,
    },
    setup( {height} ){
        const heightC = ref(height)

        onMounted(() => {
            initiate()
        })
        //onUpdated(() => heightC.value = height)
        onBeforeUnmount(() => stopGame())

        return { heightC, ...getData(), ...getFlags() }
    }
}
</script>