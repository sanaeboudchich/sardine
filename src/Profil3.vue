<template>

  <section id="content">
    <Headeer />
      <Creationp />
      
     </section>

</template>

<script>

import Creationp from './components/Creationp.vue'
import Headeer from './components/Headeer.vue';



export default {
  name: 'Profil3',
  components:{
    Creationp,
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
