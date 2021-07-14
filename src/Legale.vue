<template>

  <section id="content">
    <Headeer/>
    <Banner />
    <Logiin />
  </section>

</template>

<script>

import Banner from './components/Banner'
import Headeer from './components/Headeer.vue';
import Logiin from './components/Logiin';


export default {
  name: 'Legale',
  components:{
   
    Logiin,
    Banner,
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
