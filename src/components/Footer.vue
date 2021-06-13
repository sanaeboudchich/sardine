<template>
 <div class="footer float-sm-start">

     <cookie-law theme="dark-lime"></cookie-law>


   <div class="container text-center">
  <div class="row w-100">
    <div class="col">
  <img v-bind:src="require('../assets/loogo.png')" width="100" alt="service-image" />
  <div class="menubblock_2">

    <p>8 Bis rue de la fontaine au roi,75011 Paris</p>
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
    <h5>Reseaux Sociaux</h5>
      </div>




  </div>
    <br>
  <p>Tous droits réservés©2021</p>
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

a {
  color: rgb(7, 7, 7);
  font-weight: lighter;
}
p{
  font-weight: lighter;
  color: rgb(7, 7, 7);
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

h5 {
  color: #070707;
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
}
</style>
