<template>
    <div class="tarif container-fluid" id="tarif">
<div class="container">
  <h2 class="text-center"><br/>Nos tarifs<br/><br/></h2>
  
  
        <div class="row container">
          <div class="icon col-md-4 ">
  <img v-bind:src="require('../assets/listenrml.png')" width="300" class="center-block" alt="service-image" />
  <div class="card-img-overlay">
    <h3 class="card-title text-center">Standard</h3>
    <ul class="liste">
    <li>Accès au dispositif KEA</li>
    <li>4 swipes par jour </li>
</ul>
<h3 class="card-title text-center">0€</h3>
  </div>


          </div>
    <div class="col-md-4 ">
  <img v-bind:src="require('../assets/listenrml.png')" width="330" class="center-block" alt="service-image" />
  <div class="card-img-overlay">
    <h3 class="card-title text-center">Premium</h3>
    <ul class="liste">
    <li>Accès au dispositif KEA</li>
    <li>12 swipes par jour </li>
</ul>
<h3 class="card-title text-center">8€/mois</h3>
  </div>


          </div>
              <div class="icon col-md-4 ">
  <img v-bind:src="require('../assets/listenrml.png')" width="300" class="center-block" alt="service-image" />
  <div class="card-img-overlay">
 <h3 class="card-title text-center">Gold +</h3>
    <ul class="liste">
    <li>Accès au dispositif KEA</li>
    <li>Swipes ILLIMITÉS </li>
    <li>Chat en direct avec   le mentor </li>
    
</ul>
<h3 class="card-title text-center">15€/mois</h3>
  </div>


          </div>
        </div>
        </div>

	</div>

</template>


<script>

export default {
    name:'Services'
}

</script>


<style scoped>



@media screen and (max-width: 1300px){
  .icon {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  img {width: 120%}
}


.service .container {
  background-color: #444444;
}

#services {
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #ffffff;


}

h3 {
  margin: 20%;
  font-weight: bold;
  color: #433232;
}
h2{
  color: #FE007A;
}
p {
  font-size: 12px;
  font-weight: lighter;
  color: #1F1F1F;
  font-family: 'Poppins', sans-serif;
}
.liste {
  margin: 15%;

}
.liste2 {
  margin: 15%;

}
.icon {
margin: auto;
}


</style>
