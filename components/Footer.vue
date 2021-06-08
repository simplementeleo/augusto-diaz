<template>
  <div class="relative">
    <container-x>
      <footer>
        <a href="#"
          class="text-center block max-w-xs mx-auto outline-dashed console text-gray-500 text-md p-2 mb-12">Desarrollado
          por Augusto Díaz</a>
        <div class="flex pb-5 pt-3 justify-center mx-auto md:hidden">
          <a v-for="(item, index) in items" :href="item.href" target="_blank" class="p-3 m-3 outline-dashed"
            :key="index">
            <i :class="['fa', 'fa-' + item.icon, 'text-gray-500', 'text-2xl']"></i>
          </a>
        </div>
      </footer>
    </container-x>
    <div class="bg-points"></div>
  </div>
</template>
<script>
  import ContainerX from './Utilities/Container-x'
  export default {
    components: {
      ContainerX
    },
    data() {
      return {
        items: [{
            href: 'https://github.com/simplementeleo',
            icon: 'github'
          },
          {
            href: 'https://www.linkedin.com/in/augusto-d%C3%ADaz-6752251aa/',
            icon: 'linkedin'
          },
          {
            href: 'https://codepen.io/codezardi/',
            icon: 'codepen'
          }
        ]
      }
    }
  }

</script>
<style scoped>
  .bg-points {
    position: absolute;
    bottom: -3rem;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-image: url('../static/images/points.svg');
    z-index: -1;
    mask-image: linear-gradient(to top, var(--bg-primary), #0000), linear-gradient(to bottom, var(--bg-primary), #0000);
    mask-composite: source-in;
  }

</style>
