<template>
 <div class="footer float-sm-start">

     <cookie-law theme="dark-lime"></cookie-law>


   <div class="container">
  <div class="row w-100">
    <div class="col">
  <img v-bind:src="require('../assets/loogo.png')" width="100" alt="service-image" />
  <div class="menubblock_2">
  <br/>
    <p>8 Bis rue de la fontaine au roi,<br>75011 Paris</p>
  </div>
  </div>
    <div class="col">
    
    <div class="menub">
        
    </div>
    </div>

  <div class="col">
  <div class="menub">
    <p></p>
  </div>
  </div>


  <div class="iconcol-md-3text-centerblock_2">
    <h6>SUIS-NOUS SUR LES RÉSEAUX</h6>
        <a href="https://twitter.com/keaofficiel"><img class="twitter" src="../assets/twitter.png"></a>
        <a href="https://www.instagram.com/keaofficiel/"><img class="instagram" src="../assets/insta.png"></a>
        <a href="hhttps://www.linkedin.com/company/keaofficiel"><img class="linkedin" src="../assets/in.png"></a>
  </div>




  </div>
    <br>
  <p class="tous text-center">© Tous droits réservés à l’agence Sardine</p>
			</div>
   </div>
</template>


<script>
import CookieLaw from 'vue-cookie-law'
export default {
    name:'Footer',
  components:{CookieLaw}
}

</script>


<style>

@media screen and (max-width: 1300px){
  
  img {width: 50%}
  P {
  padding: 10px;
}
}


a {
  color: rgb(7, 7, 7);
  font-weight: lighter;
}
p{
  font-family: 'Poppins';
  color: #0a0a0a;
  font-style: normal;
font-weight: normal;
font-size: 16px;
}

.tous{
  font-family: 'Poppins';
  color: #0a0a0a;
  font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 15px;
}

a:hover {
  color: #050505;
}

.block_2 {
  padding-bottom: 50px;
}

#map {
  padding: 10px;
  width: 300px;
}

h6 {
  color: #070707;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  
}

.menub {
  display: grid;
}

.fab {
  font-size: 20px;
  color: white;
  margin:10px;
  padding-bottom: 40px;

}

.fas {
  margin-right:7px;
}

.fab:hover{
  color: #FECF98;
}

.footer{
   background-color: #FFFFFF;
  padding-top: 40px;
  padding-bottom: 30px;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
}
.instagram {
  margin-right: 1.5rem!important;
  margin-left: 1.5rem!important;
  width: 13%;
}
.twitter {
  margin-left: 1.5rem!important;
  width: 13%;
}
.linkedin {
  margin-right: 2rem!important;
  width: 13%;
}
.footer{
  background-color: #ffffff;
}
</style>
