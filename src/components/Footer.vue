<template>
 <div class="footer float-sm-start">

     <cookie-law theme="dark-lime"></cookie-law>


   <div class="container text-center">
     <a href="#"><i class="fab fa-instagram"></i></a>
     <a href="#"> <i class="fab fa-facebook-f"></i></a>
     <a href="#"><i class="fab fa-linkedin-in"></i></a>
     <a href="#"><i class="fab fa-youtube"></i></a>
     <a href="#"><i class="fab fa-twitter"></i></a>
     <p>Tous droits réservés©</p>


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
  color: white;
  font-weight: lighter;
}
p{
  font-weight: lighter;
}

a:hover {
  color: #FECF98;
}

.block_2 {
  padding-bottom: 50px;
}

#map {
  padding: 10px;
  width: 300px;
}

h5 {
  color: #FECF98;
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
  background-color: #343a40;
  padding-top: 40px;
  padding-bottom: 30px;
  color: white;
}
</style>
