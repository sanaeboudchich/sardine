<template>
<b-navbar toggleable="lg"
              variant="white"
              bg-primary
              class="container navbar">

      <b-navbar-brand to="/">
        <img alt="Logo" src="@/assets/loogo.png" width="80%">

      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- CENTRE -->
        <b-navbar-nav class="ml-md-auto">
          <b-nav-item href="#banner" exact-active-class=" active">Accueil</b-nav-item>
          <b-nav-item href="#services" exact-active-class=" active">Fonctionnement</b-nav-item>
          <b-nav-item href="#team" exact-active-class=" active">Avantages</b-nav-item>
          <b-nav-item href="#tarif" exact-active-class=" active">Tarif</b-nav-item>
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
.navbar{
  font-family: 'Roboto', sans-serif;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
