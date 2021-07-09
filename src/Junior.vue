<template>

  <section id="content">
      <Bannerjunior />
      <Carousel />
      <Avantageskea />
      
      <Partenaire />
     </section>

</template>

<script>

import Bannerjunior from './components/Bannerjunior.vue'
import Carousel from './components/Carousel.vue'
import Avantageskea from './components/Avantageskea.vue'
import Partenaire from './components/Partenaire.vue';


export default {
  name: 'Junior',
  components:{
    Bannerjunior,
    Carousel,
    Avantageskea,
     Partenaire
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
