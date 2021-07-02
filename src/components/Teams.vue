<template>
    <div class="team container-fluid" id="team">
<div class="container">
  <h2 class="text-center">Nos talents</h2>
<p class="text1 text text-center">Grâce à Kea, perfectionnez vos compétences et développez votre réseau professionnel à travers un canal Slack <br/>partagé avec d’autres entrepreneurs d’exception.  Les freelances juniors peuvent maintenant être accompagnés par <br/>ceux ayant déjà de l’expérience.</p>
	
        <!--<div class="row container text center">

              <div class="icon col-md-12 ">
  <img v-bind:src="require('../assets/bonne.png')" width="1000" class="center-block" alt="service-image" />
  <div class="card-img-overlay">
    <h3 class="card-title text-center">Une communauté soudéer<br>
      </h3>
      <h4>Nous rejoindre, c’est avoir une épaule sur laquelle s’appuyer 24h/7j.</h4>
  <p>Nous rejoindre, c’est avoir une épaule sur laquelle s’appuyer 24h/7j. Vous avec une question à poser, une annecdote à raconter : Kea est là !</p>
 
  </div>


          </div>
        </div>-->
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
  color: #000000;

  
}
span {
  background-color: #FFB600;
  background-size: 3.2em;
  background-position: 30px;
  margin-bottom: 50px;
  padding: -5px 10px 10px 0;
  
}

p {
  font-size: 17px;
  font-weight: lighter;
  color: #000000;
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
.btn{
    background-color: #ffffff;
    color: #000;
}
h4{
 margin: 20px;
  
  color: #000000;
}
h2{
  font-size: 30px;
  color: #FE007A;
}
.text{
 color: #000;
}
.text1 {
 padding: 0px 50px 130px;
}
</style>