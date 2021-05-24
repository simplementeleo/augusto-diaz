<template>
  <div id="home">
    <BoxBorder3d class="py-12 px-5 sm:px-10 md:px-40 max-w-full lg:max-w-2xl mx-auto mt-40 shadow-ani duration-300">
      <MeName />
    </BoxBorder3d>
    <h1 data-aos="fade-up" data-aos-delay="5000" class="text-center mt-5 font-bold text-md console">Front-end Developer</h1>
  </div>
</template>
<script>
  import BoxBorder3d from '../components/Utilities/box-border-3d';
  import Name from '../components/Utilities/Name';
  import MeName from '../components/Utilities/MeName';

  export default {
    components: {
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
      box-shadow:  0px 133px 52px -98px rgb(0 0 0 / 30%), 0px -133px 52px -98px rgb(0 0 0 / 30%);
    }
  }
</style>
