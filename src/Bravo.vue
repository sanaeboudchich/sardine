<template>

  <section id="content">
    <Headeer />
      <Bravoo />
      
     </section>

</template>

<script>

import Bravoo from './components/Bravoo'
import Headeer from './components/Headeer.vue';



export default {
  name: 'Bravo',
  components:{
    Bravoo,
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
