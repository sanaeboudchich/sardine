<template>

  <section id="content">
    <router-view></router-view>
     <Bannerslack />
    <Pkslack />
    <Personage />
    <Teams />
    <Partenaire />
    </section>

</template>

<script>
import Bannerslack from './components/Bannerslack.vue'
import Pkslack from './components/Pkslack.vue'
import Teams from './components/Teams.vue'
import Personage from './components/Personage.vue'
import Partenaire from './components/Partenaire.vue';





export default {
  name: 'App',
  components:{
    Bannerslack,
    Pkslack,
    Personage,
    Teams,
    Partenaire
    
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
  


}

</style>
