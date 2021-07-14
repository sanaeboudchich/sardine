<template>

  <section id="content">
      <Headeer/>
    <Singin/>
  </section>

</template>

<script>


import Singin from './components/Singin'

import Headeer from './components/Headeer.vue';


export default {
  name: 'Legale',
  components:{
   Singin,
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
