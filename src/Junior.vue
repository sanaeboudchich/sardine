<template>

  <section id="content">
    <Header />
      <Bannerjunior />
      <Carousel />
      <Avantageskea />
      <Personage />
      <Pric />
      <Partenaire />
      <Footer />
     </section>

</template>

<script>

import Bannerjunior from './components/Bannerjunior.vue'
import Carousel from './components/Carousel.vue'
import Avantageskea from './components/Avantageskea.vue'
import Personage from './components/Personage.vue'
import Partenaire from './components/Partenaire.vue'
import Header from './components/Header.vue'
import Pric from './components/Pric.vue'
import Footer from './components/Footer.vue';


export default {
  name: 'Junior',
  components:{
    Bannerjunior,
    Carousel,
    Pric,
    Avantageskea,
    Personage,
     Partenaire,
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
