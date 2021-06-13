<template>
<nav class="navbar navbar-expand-md navbar-light bg-white aos-init aos-animate" data-aos="fade-up"
        data-aos-duration="100">
        <a class="navbar-brand" href="#">
            <div style="margin-top: -5px">

               <img v-bind:src="require('../assets/loogo.png')" width="70" alt="service-image" />
            </div>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end pe-5" id="navbarText">
            <ul class="navbar-nav ml-auto text-right">
                <li class="nav-item me-3">
                    <a class="nav-link" href="#">Accueil</a>
                </li>
                <li class="nav-item me-3">
                    <a class="nav-link" href="#">Fonctionnnement</a>
                </li>
                <li class="nav-item me-3">
                    <a class="nav-link" href="#">Avantages</a>
                </li>
                <li class="nav-item me-3">
                    <a class="nav-link" href="#">Tarifs</a>
                </li>
                
            </ul>
        </div>
    </nav>
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
</style>
