<template>
 <div class="lic row w-100 m-0" id="avis">
     <h2 class="text-center">Nos talents</h2>
<p class="text1 text text-center">À la recherche de freelances d’exceptions ? Collabore avec des indépendants expérimentés. Trouve THE mentor en un instant. Et commencez à travailler main dans la main.</p>
	
   <div class=" col">
     <br>
     <img v-bind:src="require('../assets/lucas.png')"  WIDTH="140" height="140"  class="rounded-circle" alt="service-image" />
     <h4>Lucas</h4>
     <p class="titre text-centre">Chef de projet</p>
     <p class="disc">Gestion de projet & <br/>stratégie globale</p>
     <button class="btnn btn" type="button" href="#img3">Voir le profil</button>
     <br>
   </div>
  <div class="col">
     <br>
     <img v-bind:src="require('../assets/thomas.png')"  WIDTH="140" height="140"  class="rounded-circle" alt="service-image" />
     <h4>Thomas</h4>
     <p class="titre text-centre">Développeur back</p>
     <p class="disc">Création de site internet CakePHP - Laravel</p>
     <button class="btnn btn" type="button" href="#img3">Voir le profil</button>
     <br>
   </div>
   <div class="col">
     <br>
     <img v-bind:src="require('../assets/sandra.png')"  WIDTH="140" height="140"  class="rounded-circle" alt="service-image" />
     <h4>Sandra</h4>
     <p class="titre text-centre">Webmarketing</p>
     <p class="disc">Stratégie SEO & Analytics</p>
     <br>
     <button class="btnn btn" type="button" href="#img3">Voir le profil</button>
     <br>
   </div>
   <div class="col">
     <br>
     <img v-bind:src="require('../assets/sanae.png')"  WIDTH="140" height="140"  class="rounded-circle" alt="service-image" />
     <h4>Sanae</h4>
     <p class="titre text-centre">UX Designer</p>
     <p class="disc">Interface Web & Mobile Prototypage Invision</p>
     <button class="btnn btn" type="button" href="#img3">Voir le profil</button>
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
padding: 0px 0px 0px 450px;
}
h4{
  padding: 10px 10px 0px 25px;
  font-family: "Poppins";
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 37px;
color: #000000;
}
p{
font-family: "Poppins";
font-style: medium;
font-weight: medium;
font-size: 14px;
line-height: 14px;



}

.titre{
  padding: 0px 0px 0px 12px;
  font-size: 16px;
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
.avantag{

font-family: "Poppins";
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
padding: 10px 100px 10px 225px;
}
.disc{
  padding: 0px 50px 0px 5px;
  }
.btnn{
    width: 162px;
height: 42px;
left: 45.5px;
top: 354px;
color:#ffffff;
/* COULEURS PRIMAIRE/MARRON */

background: #433232;
/* BLUR CARD */

box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
border-radius: 27.5px;

/* Inside Auto Layout */

flex: none;
order: 3;
flex-grow: 0;
margin: 18px 0px;
  }
  .lic{
    
background-image: url(../assets/Frameeouf.png);
  }
</style>