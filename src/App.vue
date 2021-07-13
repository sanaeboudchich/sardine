<template>

  <section id="content">
    <Header />
    <router-view></router-view>
    <Footer />
  </section>

</template>

<script>
import firebase from 'firebase'
import Header from './components/Header'
import Footer from './components/Footer'

import {mapActions} from 'vuex'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  methods:{
    ...mapActions(['fetchUser']),
    
  },
 mounted() {
    firebase.auth().onAuthStateChanged(() => {
      this.fetchUser()
    })
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
