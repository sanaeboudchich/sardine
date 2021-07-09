<template>
    <div class="partenaire container-fluid" id="services">
<div class="container">
  <h2 class="text-center">Ils nous font confiance</h2>
<p class="text1 text text-center">Grâce à Kea, perfectionnez vos compétences et développez votre réseau professionnel à travers un canal Slack partagé avec d’autres entrepreneurs d’exception. </p>
	
        <div class="row container">
          <div class="icon col-md-3 text-center">

            <img v-bind:src="require('../assets/appel.png')" class="center-block" width="60" alt="service-image" />
          </div>

          <div class="icon col-md-3 text-center">
            <img v-bind:src="require('../assets/firefox.png')" width="70" class="center-block" alt="service-image" />
          </div>

          <div class="icon col-md-3 text-center">
            <img v-bind:src="require('../assets/google.png')" class="center-block" width="70" alt="service-image" />
          </div>
          <div class="icon col-md-3 text-center">
            <img v-bind:src="require('../assets/ok.png')" class="center-block" width="70" alt="service-image" />
          </div>
       
        </div>
        </div>

	</div>

</template>


<script>

export default {
    name:'Partenaire'
}

</script>


<style scoped>



@media screen and (max-width: 1300px){
  .icon {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  img {width: 30%}
}


.service .container {
  background-color: #444444;
}

#services {
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #ffffff;


}

h4 {
  margin: 15px;
  font-weight: Medium;
  color: #433232;
   font-family: 'Poppins' 'Medium';
}

h2{
  
  color: #FE007A;
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 60px;
}p {
  
  color: #000000;
  font-family: 'Poppins';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
       padding: 20px 50px 80px 50px;

}

</style>