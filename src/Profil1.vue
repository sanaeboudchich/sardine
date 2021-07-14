<template>

  <section id="content">
    <Headeer />
      <Ajoutprofile />
      
     </section>

</template>

<script>

import Ajoutprofile from './components/Ajoutprofile'
import Headeer from './components/Headeer.vue';



export default {
  name: 'Profil1',
  components:{
    Ajoutprofile,
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
