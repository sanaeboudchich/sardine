<template>

  <section id="content">
    <router-view></router-view>
    <Banner />
    <Services />
    <Team />
    <Tarif />
    <Video />
    <logine />
    <Arrow />
  </section>

</template>

<script>
import Banner from './components/Banner'
import Services from './components/Services'
import Video from './components/Video'
import Arrow from './components/Arrow'
import Login from "./components/login"
import Tarif from "./components/Tarif"
import Team from "./components/Team";



export default {
  name: 'App',
  components:{
    Video,
    Login,
    Banner,
    Services,
    Team,
    Tarif,
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
  font-family: 'Ubuntu', sans-serif;
}

</style>
