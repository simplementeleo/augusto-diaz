<template>
  <div class="mt-24">
    <Home />
    <AboutMe data-aos="fade-up" />
    <Portfolio data-aos="fade-up" />
    <Contact data-aos="fade-up" />
    <Footer />
  </div>
</template>

<script>
import Home from '../components/Home'
import AboutMe from '../components/AboutMe'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default {
  components: {
    Home,
    AboutMe,
    Portfolio,
    Contact,
    Footer
  }
}
</script>

