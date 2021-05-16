<template>
  <div>
    <Navigation />
    <ElementsFixed />
    <Nuxt />
  </div>
</template>

<script>
  import aosMixin from '../mixins/aos'
  import Navigation from './Navigation'
  import ElementsFixed from './ElementsFixed'
  export default {
    mixins: [aosMixin],
    components: {
      Navigation,
      ElementsFixed
    }
  }

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');

  :root {
    --color-primary: #eee;
    --color-secondary: #00ffff;
    --bg-primary: #0a0b35;
    /* #4146df-#0a0b35 - A>= 040527*/

  }

  html {
    background: var(--bg-primary);
    color: var(--color-primary);
    font-family: 'Fira Sans', sans-serif;
    scroll-behavior: smooth;
  }

  p {
    @apply text-lg leading-loose mt-3 text-gray-500;
  }

  .console {
    font-family: 'Inconsolata', monospace;
  }

  .fade {
    animation: fade .5s ease-in-out forwards;
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .outline-dashed {
    transition: all .3s ease-in-out;
  }

  .outline-dashed:focus {
    outline: 2px dashed var(--color-secondary);
    color: var(--color-secondary);
  }

  .btn-main-hover {
    @apply duration-300;
  }

  .btn-main-hover:hover {
    @apply transform -translate-y-1 cursor-pointer;
    color: var(--color-secondary);
  }

</style>
