<template>

  <section id="content">
    
    <router-view></router-view>
    
  </section>

</template>

<script>
import firebase from 'firebase'


import {mapActions} from 'vuex'

export default {
  name: 'App',
  components:{
   
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
