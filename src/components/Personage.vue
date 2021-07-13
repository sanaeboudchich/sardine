<template>
 <div class="row w-100 m-0" id="avis">
     <h2 class="text-center">Ils nous font confiance</h2>
<p class="text1 text text-center">Grâce à Kea, perfectionnez vos compétences et développez votre réseau professionnel à travers un canal Slack partagé avec d’autres entrepreneurs d’exception. </p>
	
   <div class="col">
     <br>
     <img v-bind:src="require('../assets/lucas.png')"  WIDTH="140" height="140"  class="rounded-circle" alt="service-image" />
     <h4>Lucas</h4>
     <p>Chef de projet</p>
     <p>Gestion de projet & stratégie globale</p>
     <br>
   </div>
  <div class="col">
     <br>
     <img v-bind:src="require('../assets/thomas.png')"  WIDTH="140" height="140"  class="rounded-circle" alt="service-image" />
     <h4>Thomas</h4>
     <p>Développeur back</p>
     <p>Création de site internet CakePHP - Laravel</p>
     <br>
   </div>
   <div class="col">
     <br>
     <img v-bind:src="require('../assets/sandra.png')"  WIDTH="140" height="140"  class="rounded-circle" alt="service-image" />
     <h4>Sandra</h4>
     <p>Webmarketing</p>
     <p>Stratégie SEO & Analytics</p>
     <br>
   </div>
   <div class="col">
     <br>
     <img v-bind:src="require('../assets/sanae.png')"  WIDTH="140" height="140"  class="rounded-circle" alt="service-image" />
     <h4>Sanae</h4>
     <p>UX Designer</p>
     <p>Interface Web & Mobile Prototypage Invision</p>
     <br>
   </div>
 </div>
</template>

<script>
export default {
name: "Article"
}
</script>

<style scoped>
.row{
  
  padding: 190px 10px 0 90px;
}
h2{
  
  color: #FE007A;
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 60px;
padding: 0px 0px 0px 350px;
}
p{
    color: #000000;
  font-family: 'Poppins';
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
}
.text1 {
  
  color: #000000;
  font-family: 'Poppins';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
       padding: 20px 90px 100px 50px;

}
</style>