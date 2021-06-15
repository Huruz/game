<template>
    <div class="game mt-4 grid grid-cols-4">
        <div class="px-5">
            <div class="bg-gradient-to-b from-blue-900 to-blue-500 shadow-md rounded-b-lg py-2 text-white">
                <h3 class="text-center font-bold">Nivel: {{nivelActual}}</h3>
                <hr class="p-1">
                <h5 class="px-2 text-justify text-sm">{{msgNivel}}</h5>
            </div>
        </div>
        <div id="area" class="col-span-3 flex justify-center">
            <canvas id="canvas" :height="heightC">Canvas</canvas>
        </div>
    </div>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { initiate, getData, stopGame } from '@/hooks/createGame';

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

        return { heightC, ...getData() }
    }
}
</script>