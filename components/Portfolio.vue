<template>
  <div id="portfolio">
    <container-y>
      <container-x>
         <title-section data-aos="fade-up" n="2" title="Portafolio" />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-auto">
        <div class="card transform hover:-translate-y-2 p-6 rounded-md shadow-2xl relative h-64 duration-300 cursor-pointer w-full md:max-w-sm" v-for="(work, index) in works" :key="index">
          <div class="top-0 right-0 p-1 px-5 m-3 absolute flex z-20 options rounded-full">
            <a v-show="work.git.isActive" target="_blank" :href="work.git.url" class="text-lg p-1">
              <i class="fa fa-github"></i>
            </a>
            <a v-show="work.codepen.isActive" target="_blank" :href="work.codepen.url" class="text-lg p-1">
              <i class="fa fa-codepen"></i>
            </a>
            <a v-show="work.demo.isActive" target="_blank" :href="work.demo.url" class="text-lg p-1">
              <i class="fa fa-external-link"></i>
            </a>
          </div>
          <div class="bottom-0 left-0 w-full absolute console p-6 z-20">
            <h1 class="text-xl">{{ work.title }}</h1>
            <div class="flex text-sm">
              <span v-for="(tech, index) in work.techs" class="mr-3 text-xs text-gray-500" :key="index">
                {{ tech }} 
              </span>
            </div>
          </div>
          <div class="absolute top-0 left-0 w-full h-full rounded-md bg-gradient">
            <img :src="require('../static/images/'+work.image)" class="rounded-md object-cover h-64" width="100%" alt="Project">
          </div>
        </div>
      </div>
      </container-x>
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
      background: linear-gradient(to top, #080a1a, #0000);
      z-index: 10;
      @apply rounded-md;
  }
  .card:hover ~ .bg-gradient::before {
    background: red;
  }
  .options {
    background: var(--bg-primary);
  }

</style>
<script>
  import ContainerX from './Utilities/Container-x'
  import ContainerY from './Utilities/Container-y'
  import TitleSection from './Utilities/Title'
  export default {
    components: {
      TitleSection,
      ContainerY,
      ContainerX
    },
    data() {
      return {
        works: [
          {
            git: { url: '#', isActive: false},
            codepen: { url: '#', isActive: false},
            demo: { url: 'https://ibizawashservice.com/', isActive: true},
            title: 'Landing Page | Ibiza',
            techs: [
              'CDN Vue.js',
              'Node.js',
              'Nodemailer'
            ],
            image: '1.png'
          },
          {
            git: { url: '#', isActive: false},
            codepen: { url: '#', isActive: true},
            demo: { url: '#', isActive: false},
            title: 'UI Login',
            techs: [
              'HTML',
              'CSS',
            ],
             image: '2.png'
          },
           {
            git: { url: '#', isActive: false},
            codepen: { url: '#', isActive: true},
            demo: { url: '#', isActive: false},
            title: 'UI Testimonials',
            techs: [
              'CDN Vue.js',
              'HTML',
              'CSS'
            ],
             image: '3.png'
          },
           {
            git: { url: '#', isActive: false},
            codepen: { url: '#', isActive: true},
            demo: { url: '#', isActive: false},
            title: 'UI Login & Register',
            techs: [
              'HTML',
              'CSS',
              'JS'
            ],
             image: '4.png'
          }
        ]
      }
    }
  }

</script>
