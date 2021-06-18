<template>
    <div class="services container-fluid" id="services">
<div class="container">
  <h2 class="text-center">Comment ça marche ?<br/><br/></h2>
  
  
        <div class="row container">
          <div class="icon col-md-6 ">
  <img v-bind:src="require('../assets/keahomme.png')" width="600" class="center-block" alt="service-image" />
  <div class="card-img-overlay">
    <h3 class="card-title text-center">Je suis un <br>
freelance junior</h3>
    <ul class="liste">
    <li>1. Je suis accompagné</li>
    <li>2. Je gagne de l’expérience</li>
    <li>3. Je trouve des clients </li>
    <li>4. J’élargis mon réseau </li>
</ul>

  </div>


          </div>

              <div class="icon col-md-6 ">
  <img v-bind:src="require('../assets/keafemme.png')" width="600" class="center-block" alt="service-image" />
  <div class="card-img-overlay">
        <h3 class="card-title text-center">Je suis un <br>
freelance senior</h3>
    <ul class="liste2">
    <li>1. Je partage mon savoir</li>
    <li>2. J’aide des jeunes freelances</li>
    <li>3. J’élargis mon réseau </li>
   
</ul>
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
  margin: 15px;
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

</style>
