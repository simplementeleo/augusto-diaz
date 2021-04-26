<template>
  <div>
    <header class="fixed w-full top-0 left-0 z-30 console">
      <div class="absolute w-full h-full blur top-0 left-0"></div>
      <nav class="flex justify-between px-16 relative">
        <div data-aos="fade-down" class="logo text-6xl text-gray-100 uppercase">
          A
        </div>
        <ul class="flex items-center hidden md:flex">
          <li data-aos="fade-down" v-for="(item, index, key) in navItems" :data-aos-delay="(index + 9)+'00'" :key="key">
            <a :href="item.url" class="py-3 px-5 outline-dashed">
              <span>0{{ index }}.</span> {{ item.name }}
            </a>
          </li>
        </ul>
        <div class="block md:hidden"> 
          menu
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        navItems: [{
            url: '#',
            name: 'Inicio'
          },
          {
            url: '#',
            name: 'Sobre mi'
          },
          {
            url: '#',
            name: 'Portafolio'
          },
          {
            url: '#',
            name: 'Contacto'
          },
        ],
        show: true
      }
    },
    mounted() {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.querySelector('header').style.top = '0';
          document.querySelector('header').style.boxShadow = '0px 10px 19px #03030347';
        } else {
           document.querySelector('header').style.top = '-150px';
        }
        if (prevScrollpos <= 2 || currentScrollPos == 0) {
              document.querySelector('header').style.boxShadow = 'none';
        }
        prevScrollpos = currentScrollPos;
      }
    }
  }

</script>
<style scoped>
header {
    transition: all .2s ease-in-out;
}
  .blur {
    backdrop-filter: blur(6px);
    background: #0a0b359e;
  }

  span {
    color: var(--color-secondary);
  }
</style>
