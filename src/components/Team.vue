<template>
    <div class="team container-fluid" id="team">
<div class="container">
  <h2 class="text-center">Les avantages qu’offrent KEA<br/><br/></h2>
  
  
        <div class="row container">
          <div class="icon col-md-6 ">
  <img v-bind:src="require('../assets/keahomme.png')" width="590" class="center-block" alt="service-image" />
  <div class="card-img-overlay">
    <h3 class="card-title text-center">Je suis un<br>
      <span>freelance junior</span>
      </h3>
  <ul class="liste">
    <li>Je suis accompagné</li>
    <li>Je gagne de l’expérience</li>
    <li>Je trouve des clients </li>
    <li>J’élargis mon réseau </li>
</ul>

  </div>


          </div>

              <div class="icon col-md-6 ">
  <img v-bind:src="require('../assets/keafemme.png')" width="600" class="center-block" alt="service-image" />
  <div class="card-img-overlay">
 <h3 class="card-title text-center">Je suis un<br>
      <span>freelance senior</span>
      </h3>
    <ul class="liste2">
    <li>Je partage mon savoir</li>
    <li>J’aide des jeunes freelances</li>
    <li>J’élargis mon réseau </li>
   
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
  margin: 20px;
  font-weight: bold;
  color: #433232;

  
}
span {
  background-color: #FFB600;
  background-size: 3.2em;
  background-position: 30px;
  margin-bottom: 50px;
  padding: -5px 10px 10px 0;
  
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
li {
  list-style-type: square;
}

</style>
