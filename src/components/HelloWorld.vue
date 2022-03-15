<template>
  <div class="my-2">
      <h3 class="text-2xl font-bold text-center">Beta 2.0 Huntec - Vue 3</h3> 
      <div class="m-3 tracking-wider font-light text-left">
        <p class="my-2">
          Un minijuego en desarrollo bastante sencillo, lee las instrucciones en el botón de <span class="font-bold color-purpleS">Controles</span> y si ya las sabes, ponte a ¡Jugar!<br>
          Te invito a que des tu opinión o sugerencia para seguir mejorando este mini proyecto, en la sección <span class="font-bold color-purpleS">About</span> de arriba.
        </p>
        <p class="my-2">
          Algunas recomendaciones para una mejor experiencia son:<br>
          <ul class="list-disc list-inside">
            <li>Uso de un teclado externo normal</li>
          </ul>
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>