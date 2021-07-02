<template>
    <div class="tarif container-fluid" id="tarif">
<div class="container">
  <h2 class="text-center"><br/>Nos tarifs<br/><br/></h2>
  
  
        <div class="row container">
          <div class="icon col-md-4 ">
  <img v-bind:src="require('../assets/listenrml.png')" width="300" class="center-block" alt="service-image" />
  <div class="card-img-overlay">
    <h3 class="s card-title text-center">Standard</h3>
    <ul class="liste">
    <li>Accès au dispositif KEA</li><br/>
    <li>4 swipes par jour </li>
</ul>
<h3 class="titre2 card-title text-center">0€</h3>
  </div>


          </div>
    <div class="col-md-4 ">
  <img v-bind:src="require('../assets/listenrml.png')" width="330" class="center-block" alt="service-image" />
  <div class="card-img-overlay">
    <h3 class="p card-title text-center">Premium</h3>
    <ul class="liste">
    <li>Accès au dispositif KEA</li><br/>
    <li>12 swipes par jour </li>
</ul>
<h3 class="titre1 card-title text-center">8€/mois</h3>
  </div>


          </div>
              <div class="icon col-md-4 ">
  <img v-bind:src="require('../assets/listenrml.png')" width="300" class="center-block" alt="service-image" />
  <div class="card-img-overlay">
 <h3 class="g card-title text-center">Gold +</h3>
    <ul class="liste">
    <li>Accès au dispositif KEA</li><br/>
    <li>Swipes ILLIMITÉS </li><br/>
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
  margin: 10%;
  font-weight: bold;
  color: #433232;
}
h2{
  color: #FE007A;
  font-size: 30px;
  margin: 90px;
  padding: 0px 0px 0px 0;
  font-weight: 'Semibold';
  font-family: 'Poppins' 'SemiBold';
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
.titre1 {
  margin: 120px;
}
.titre2 {
  margin: 90px;
}
.icon {
margin: auto;
}
li {
  list-style-type: square;
}
.p {
   background-color: #00E19B;
  background-size: 3.2em;
  background-position: 30px;
  margin-bottom: 30px;
  padding: -5px 7px 7px 0;
}
.g {
   background-color: #A163FF;
  background-size: 3.2em;
  background-position: 30px;
  margin-bottom: 30px;
  padding: -5px 7px 7px 0;
}
.s {
   background-color: #07DAE8;
  background-size: 3.2em;
  background-position: 30px;
  margin-bottom: 30px;
  padding: -5px 7px 7px 0;
}

</style>
