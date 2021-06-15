<template>
  <div>
      <h2 class="text-2xl font-bold">Bienvenidos a la Beta 2.0, hecho en Vue 3</h2> 
      <div class="mt-1 px-12 text-justify font-medium">
        Lee las instrucciones mediante el siguiente botón y si ya las sabes, pues a ¡Jugar!<br>
        Te invito a que des tu opinión o sugerencia para seguir mejorando este mini proyecto, en la sección <span>About</span>.
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