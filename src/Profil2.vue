<template>

  <section id="content">
    <Headeer />
      <Inscription />
      
     </section>

</template>

<script>
import Headeer from './components/Headeer.vue'

import Inscription from './components/Inscription.vue';



export default {
  name: 'Profil2',
  components:{
    Inscription,
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
  font-family: 'Poppins';
}

</style>
