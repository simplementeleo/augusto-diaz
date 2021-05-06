<template>
  <div>
    <container-y>
      <section class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <title-section n="1" title="Sobre Mi" />
          <article>
            <p class="text-md sm:text-lg">
              Hola! Soy Augusto, egresado como Ingeniero en Informática de la <a href="#"
                class="text-blue-300 font-bold underline">UPTEB.</a> Me aplico en el Diseño y Programación de
              Aplicaciones Web, tomando en cuenta que mi fuerte es el front-end. Soy minimalista, un buen diseño no
              requiere de exceso de elementos. Sin embargo la meta es complacer al cliente.
            </p>
            <p class="text-md sm:text-lg">
              Además creo firmemente que una relación profesional se debe basar en honestidad y transparencia. La
              constancia de aprender me mantiene vigente, actual y me ayuda a crecer como profesional.
            </p>
            <p class="text-md sm:text-lg">
              Actualmente he trabajado con estas tecnologías:
            </p>
            <div class="flex console text-sm mt-3">
              <div>
                <li>Vue</li>
                <li>(S)CSS</li>
                <li>Javascript (ES6+)</li>
              </div>
              <div class="ml-10">
                <li>Node.js</li>
                <li>TailwindCSS</li>
                <li>Bootstrap</li>
              </div>
            </div>
          </article>
        </div>
        <div>
          <!-- <img src="../static/images/me.jpg" width="100%" height="100%" alt="Image Me"> -->
        </div>
      </section>
    </container-y>
  </div>
</template>
<script>
  import TitleSection from '../components/Utilities/Title'
  import ContainerY from '../components/Utilities/Container-y'
  export default {
    components: {
      TitleSection,
      ContainerY
    }
  }

</script>
<style scoped>
  li {
    list-style: none;
  }

  li::before {
    /* content: "˫"; */
    /* content: "ᐅ"; */
    content: "᠉";
    color: var(--color-secondary);
    margin-right: 10px;
  }

  a {
    color: var(--color-secondary);
  }

</style>
