<template>
  <div>
    <header class="fixed w-full top-0 left-0 z-30 console">
      <div class="absolute w-full h-full blur top-0 left-0"></div>
      <nav class="flex justify-between px-8 md:px-16 py-5 md:py-0 relative">
        <div data-aos="fade-down" class="logo text-2xl md:text-6xl text-gray-100 uppercase">
          A
        </div>
        <ul class="items-center hidden md:flex">
          <li data-aos="fade-down" v-for="(item, index, key) in itemsNav" :data-aos-delay="(index + 9)+'00'" :key="key">
            <a :href="item.url" :class="['py-3', 'px-5', 'outline-dashed', item.name === 'Curriculo' ? 'btn-cv' : '']">
              <span>0{{ index }}.</span> {{ item.name }}
              {{ hello }}
            </a>
          </li>
        </ul>
        <MenuResponsive />
      </nav>
    </header>
  </div>
</template>
<script>
import MenuResponsive from '../components/Utilities/MenuResponsive'
import { mapState } from 'vuex'

  export default {
    components: {
      MenuResponsive
    },
    data() {
      return {
        navItems: [{
            url: '#home',
            name: 'Inicio'
          },
          {
            url: '#aboutme',
            name: 'Sobre mi'
          },
          {
            url: '#portfolio',
            name: 'Portafolio'
          },
          {
            url: '#contact',
            name: 'Contacto'
          },
          {
            url: '#',
            name: 'Curriculo'
          }
        ],
        show: true
      }
    },
    computed: {
      ...mapState(['itemsNav'])
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
  .btn-cv {
    border: 1px solid var(--color-secondary);
    padding: .5rem 1rem;
    color: var(--color-secondary);
  }
</style>
