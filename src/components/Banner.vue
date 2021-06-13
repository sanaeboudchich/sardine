<template>
  <div class="background container-fluid">
    <div class="banner_content container">
      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0 ">
          <br/>
          <br/>
          <br/>
          <h1>Kea besoin d’aide ?</h1>
          <p>Kea est une plateforme web mettant en relation des freelance entre eux. L’objectif est de mettre en relation les auto-entrepreneurs avec un système de mentorat. Les freelance junior peuvent maintenant être accompagnés par ceux ayant déjà de l’expérience.</p>
          <h3>S’inscrire à la newsletters</h3>
          <p>pour être au courant de l’avancé du projet</p>
          <button class="btn btn-primary" type="button" >Découvrir</button>
          <button class="btn btn-dark" type="button" >Nous contacter</button>
        </div>
          <div class="col-md-6 mb-5 mb-md-0 text-center">
            <img v-bind:src="require('../assets/banner2.png')" width="450" alt="service-image" />
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


h1 {
color: #FE007A;
}
 p {
  color: rgb(3, 3, 3);
  padding-bottom: 15px;
}

h1 {
  font-size: 40px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
}

p{
  font-size: 15px;
  font-weight: lighter;
  font-family: 'Poppins', sans-serif;
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
  width: 100%;
}
</style>
