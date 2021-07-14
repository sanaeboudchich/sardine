<template>

  <section id="content">
    <Headeer />
      <Bannersenior />
      <Partenaire />
     </section>

</template>

<script>

import Bannersenior from './components/Bannersenior'
import Headeer from './components/Headeer.vue'
import Partenaire from './components/Partenaire.vue';


export default {
  name: 'Profil',
  components:{
    Bannersenior,
     Partenaire,
    Headeer
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
  font-family: 'Ubuntu', sans-serif;
}

</style>
