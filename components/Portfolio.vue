<template>
  <div>
    <container-y>
      <title-section data-aos="fade-up" n="2" title="Portafolio" />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-auto">
        <div class="card transform hover:-translate-y-2 p-6 rounded-md shadow-2xl relative h-64 duration-300 cursor-pointer w-full md:max-w-sm" v-for="(i, index) in 6" :key="index">
          <div class="top-0 right-0 p-6 absolute flex z-20">
            <a href="#" class="text-lg outline-dashed p-1 mr-4">
              <i class="fa fa-github"></i>
            </a>
            <a href="#" class="text-lg outline-dashed p-1">
              <i class="fa fa-external-link"></i>
            </a>
          </div>
          <div class="bottom-0 left-0 w-full absolute console p-6 z-20">
            <h1 class="text-xl">Nombre del proyecto</h1>
            <div class="flex text-sm">
              <span v-for="i in 3" class="mr-3 text-gray-500" :key="i">Tech {{i}}</span>
            </div>
          </div>
          <!-- <div class="absolute top-0 left-0 w-full h-full rounded-md bg-gradient">
            <img src="../static/images/me.jpg" class="rounded-md object-cover h-64" width="100%" alt="Project">
          </div> -->
        </div>
      </div>
    </container-y>
  </div>
</template>
<style scoped>
  .card {
    background: #27284e;
  }

  .card:hover h1 {
    color: var(--color-secondary);
  }

  .bg-gradient::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, #080a1a, #20233b61);
      z-index: 10;
      @apply rounded-md;
  }

</style>
<script>
  import ContainerY from './Utilities/Container-y'
  import TitleSection from './Utilities/Title'
  export default {
    components: {
      TitleSection,
      ContainerY
    }
  }

</script>
