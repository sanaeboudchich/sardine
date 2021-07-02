<template>
<b-navbar toggleable="lg"
              variant="white"
              bg-primary
              class="container navbar">

      <b-navbar-brand to="/">
        <img alt="Logo" src="@/assets/loogo.png" width="90%">

      </b-navbar-brand>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- CENTRE -->
        <b-navbar-nav class="nav ml-md-auto">
          <b-nav-item href="#banner" exact-active-class=" active">Accueil</b-nav-item>
          <b-nav-item href="#services" exact-active-class=" active">Fonctionnement</b-nav-item>
          <b-nav-item href="#team" exact-active-class=" active">Avantages</b-nav-item>
          <b-nav-item href="#tarif" exact-active-class=" active">Tarif</b-nav-item>
          <b-nav-item to="/Slack" exact-active-class=" active">Slack</b-nav-item>
          <b-nav-item to="/Legale" exact-active-class=" active">Login</b-nav-item>
          <b-nav-item to="/Singup" exact-active-class=" active">Sign up</b-nav-item>
          <b-nav-item href="https://dc-sardine-en-boite.systeme.io/kea-mentoring" exact-active-class=" active">Blog</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
</b-navbar>
</template>



<script>
export default {
    name:'Header'

}

</script>



<style scoped>


.navbar container-fluid{
  background-color: #0a0a0a;
}
.nav {
    font-family: 'Poppins' 'Regular';
    font-size: 16px;
    color: #000000;
 
}


.navbar_items ul{
  display: flex;
}

.navbar_items ul li{
  margin: 0 10px;
  padding-top: 10px;
}

.navbar_items ul li a{
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  color: rgb(10, 10, 10);
  padding: 5px;
}

.navbar_items ul li a:hover {
  text-decoration: none;
  color: black;
}
#nav-collapse {
  display: flex;
}

</style>
