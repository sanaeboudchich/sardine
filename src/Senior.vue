<template>

  <section id="content">
    <Header />
      <Bannersenior />
      <Carousel />
       <Avantageskea />
       <Pric />
      <Partenaire />
      <Footer />
     </section>

</template>

<script>

import Bannersenior from './components/Bannersenior'
import Carousel from './components/Carousel.vue'
import Avantageskea from './components/Avantageskea.vue'
import Partenaire from './components/Partenaire.vue'
import Header from './components/Header.vue'
import Pric from './components/Pric.vue'
import Footer from './components/Footer.vue';


export default {
  name: 'Senior',
  components:{
    Bannersenior,
    Carousel,
    Avantageskea,
     Partenaire,
     Pric,
    Header,
    Footer
  }
}

</script>



<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  list-style: none;
  text-decoration: none;
  scroll-behavior: smooth;
  font-family: 'Poppins';
}

</style>
