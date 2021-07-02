<template>

  <section id="content">
      <bannerslack />
    <Pkslack />
    <Teams />
  </section>
</template>

<script>

import Bannerslack from './components/Bannerslack.vue'
import Pkslack from './components/Pkslack.vue'
import Teams from './components/Teams.vue';

export default {
  name: 'Legale',
  components:{
    Bannerslack,
    Pkslack,
    Teams
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
