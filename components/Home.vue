<template>
  <div id="home">
    <container-x>
      <BoxBorder3d class="py-12 px-5 sm:px-10 md:px-40 max-w-full lg:max-w-2xl mx-auto mt-40 shadow-ani duration-300">
        <MeName />
      </BoxBorder3d>
      <h1 data-aos="fade-up" data-aos-delay="5000" class="text-center mt-5 font-bold text-md console">Front-end
        Developer</h1>
      <div class="bg"></div>
    </container-x>
  </div>
</template>
<script>
  import ContainerX from '../components/Utilities/Container-x'
  import BoxBorder3d from '../components/Utilities/box-border-3d';
  import Name from '../components/Utilities/Name';
  import MeName from '../components/Utilities/MeName';

  export default {
    components: {
      ContainerX,
      BoxBorder3d,
      Name,
      MeName
    }
  }

</script>
<style scoped>
  h1 {
    color: var(--color-secondary);
  }

  .shadow-ani {
    animation: 1s showBox forwards ease-in-out 3s;
  }

  @keyframes showBox {
    to {
      box-shadow: 0px 133px 52px -98px rgb(0 0 0 / 30%), 0px -133px 52px -98px rgb(0 0 0 / 30%);
    }
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-image: url('../static/images/points.svg');
    z-index: -1;
    /* mix-blend-mode: overlay; */
    mask-image: linear-gradient(to top, var(--bg-primary), #0000), linear-gradient(to bottom, var(--bg-primary), #0000);
    mask-composite: source-in;
  }

</style>
