<template>
  <div class="flex items-center justify-center text-white md:hidden">
    <button @click="isActive" :class="['burguer', toggle ? ['outline-dashed', 'active'] : '', ]">
      <span class="block md:hidden" v-for="i in 3" :key="i"></span>
    </button>
    <div v-show="toggle" @click="isActive" class="fixed card-nav bottom-0 right-0 w-full h-full">
       <div class="absolute bottom-0 bg-blue-500 card w-full flex flex-col justify-center items-center">
           <ul>
               <li v-for="(item, index) in items" :key="index"> 
                   <a :href="item.url" class="p-3 mb-4 block outline-dashed">
                       <span class="secondary">0{{ index + 1 }}</span> {{ item.name }}
                   </a>
                </li>
           </ul>
       </div>
    </div>
  </div>

</template>
<script>
  export default {
      data() {
          return {
              toggle: false,
              items: [
                  {
                      url: '#home',
                      name: 'Inicio'
                  },
                  {
                      url: '#aboutme',
                      name: 'Sobre Mi'
                  },
                  {
                      url: '#portfolio',
                      name: 'Portafolio'
                  },
                  {
                      url: '#contact',
                      name: 'Contacto'
                  }
              ]
          }
      },
      methods: {
          isActive() {
              this.toggle = !this.toggle
          }
      }
  }

</script>
<style scoped>

  .burguer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;
    outline: none;
    cursor: pointer;
  }

  .burguer span {
    height: 2px;
    border-radius: 10px;
    background: #eee;
    transition: all .3s ease-in-out;
  }

  .burguer span:nth-child(1) {
    width: 35px;
    margin-bottom: 7px;
  }

  .burguer span:nth-child(2) {
    width: 25px;
    margin-bottom: 7px;
  }

  .burguer span:nth-child(3) {
    width: 35px;
  }

  .active  span:nth-child(2) {
    opacity: 0;
  }

  .active span:nth-child(1) {
    transform: translate(0px, 0px);
  }

  .active span:nth-child(1) {
    transform: translate(0px, 10px) rotateZ(45deg);
  }

  .active span:nth-child(3) {
    transform: translate(0px, -9px) rotateZ(-45deg);
  }

  .card-nav {
      background: #191313ab;
      transition: all .3s ease-in-out;
  }
  .card {
      border-radius: 100px 100px 0 0;
      transition: all .3s ease-in-out;
      padding: 5rem 2rem;
      background: #191a35;
      box-shadow: 0 -10px 20px #00000026;
  }

    .secondary {
        color: var(--color-secondary);
    }
</style>
