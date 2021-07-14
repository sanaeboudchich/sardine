<template>

  <section id="content">
    <router-view></router-view>
    <Header />
     <Bannerslack />
    <Pkslack />
    <Personage />
    <Teams />
    <Pric />
    <Partenaire />
    <Footer />
    </section>

</template>

<script>
import Bannerslack from './components/Bannerslack.vue'
import Pkslack from './components/Pkslack.vue'
import Teams from './components/Teams.vue'
import Personage from './components/Personage.vue'
import Header from './components/Header.vue'
import Partenaire from './components/Partenaire.vue'
import Pric from './components/Pric.vue'
import Footer from './components/Footer.vue';






export default {
  name: 'App',
  components:{
    Bannerslack,
    Pkslack,
    Personage,
    Pric,
    Teams,
    Partenaire,
    Header,
    Footer
    
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
