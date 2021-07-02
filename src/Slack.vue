<template>

  <section id="content">
      <bannerslack />
    <Pkslack />
    <Teams />
    <Partenaire />
  </section>
</template>

<script>

import Bannerslack from './components/Bannerslack.vue'
import Pkslack from './components/Pkslack.vue'
import Teams from './components/Teams.vue'
import Partenaire from './components/Partenaire.vue';

export default {
  name: 'Legale',
  components:{
    Bannerslack,
    Pkslack,
    Teams,
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
