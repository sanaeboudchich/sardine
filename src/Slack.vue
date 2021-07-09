<template>

  <section id="content">
    
    <Services />
    <Team />   
    <Login />
    <Arrow />
</template>

<script>


import Services from './components/Services'
import Arrow from './components/Arrow'
import Login from "./components/login"
import Team from "./components/Team";

export default {
  name: 'Legale',
  components:{
     
    Login,
    
    Services,
    Team,
    Arrow
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
