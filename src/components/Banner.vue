<template>
  <div class="background container-fluid" id="banner">
    <div class="banner_content container">
      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0 ">
         
          <h1>Kea besoin d’aide ?</h1>
          <p class="prgrf">Kea est une plateforme web mettant en relation des freelance entre eux. L’objectif est de mettre en relation les auto-entrepreneurs avec un système de mentorat. Les freelance junior peuvent maintenant être accompagnés par ceux ayant déjà de l’expérience.  </p>
        <div><iframe width="540" height="405" src="https://f88e18e5.sibforms.com/serve/MUIEALNWgrsPtMUmMTEgbSIbtqD9CHR1sIEEck2dSsy88oScLM8YWrnW9kP8UGPqwTjsTJkv4urvgG-ie1A61IE38nyM5QOLCW5moNrs8v_oE7tq1JjtcUAhkVrTK2YwbzqKA4TrxqUdSjzL28zK1kkMsukGxs2d52oQVhB3wVUbuf6j3QGvXv-MZol6ldXdIxp3d87jhC7zWT3E" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe></div>
 
        </div>
        
          <div class="col-md-6 mb-5 mb-md-0 text-center">
            <img v-bind:src="require('../assets/bannerkea.png')" width="450" alt="service-image" />
      
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Banner'

}
</script>

<style scoped>

@media screen and (max-width: 1300px){
  
  img {width: 50%}
  h1 {
  font-size: 2px;
}
}
h1 {
color: #FE007A;
}
 p {
  color: rgb(3, 3, 3);
  font-size: 16px;
line-height: 24px;
}

h1 {
  font-size: 40px;
  font-weight: bold;
  font-family: 'Poppins' , 'Bold';
}

p{
  font-size: 15px;
  font-weight: normal;
  font-family: 'Poppins';
}

.col-md-6 {
  padding: 15px;
  padding-top: 50px;
}

.background{
  padding-top: 100px;
  background-color: #FFFFFF;
  padding-bottom: 70px;
}
.btn-primary {
  background-color: #E3A964;
  border-color: #E3A964 ;
  margin-right: 15px;
}

.btn:hover {
  transform: scale(1.1);
}

img{
  width: 80%;
}
 .image{
  background-image: url(../assets/Ellipse6.png);
}

.prgrf{
  padding: 10px 180px 20px 0;
}



</style>
