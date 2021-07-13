<template>

  <section id="content">
      <Bannersenior />
      <Partenaire />
     </section>

</template>

<script>

import Bannersenior from './components/Bannersenior'
import Partenaire from './components/Partenaire.vue';


export default {
  name: 'Profil',
  components:{
    Bannersenior,
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
  font-family: 'Ubuntu', sans-serif;
}

</style>
