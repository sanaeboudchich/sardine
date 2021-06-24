<template>

  <section id="content">
      <Banner />
    <Singin/>
  </section>

</template>

<script>

import Banner from './components/Banner'
import Singin from './components/Singin';


export default {
  name: 'Legale',
  components:{
   Singin,
    Banner
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
