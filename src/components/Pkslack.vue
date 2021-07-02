<template>
    <div class="team container-fluid" id="team">
<div class="cn container">
        <div class="row container">
          <div class="icon col-md-6 ">
    <img v-bind:src="require('../assets/orange.png')" width="500" class="center-block" alt="service-image" />
  <div class="card-img-overlay text-center">
    <h3 class="card-title text-center">Je suis Junior<br>
      </h3>
      <h4>Grâce à Kea, perfectionnez</h4>
      
  <p>avec d’autres entrepreneurs d’exception.  Les freelances <br/> juniors peuvent maintenant être accompagnés par ceux<br/> ayant déjà de l’expérience.</p>
  <div class="gap-2 col-12 mx-auto text-center">
  <button class="btn" type="button" onclick="window.location.href = 'https://join.slack.com/t/kea-freelance/shared_invite/zt-saf0p3sk-2RbyTcFAmsRimaaYLeY5vw';">Pourquoi nous utiliser</button>
  
</div>
  </div>


          </div>

              <div class="icon col-md-6 ">
  <img v-bind:src="require('../assets/violé.png')" width="500" class="center-block" alt="service-image" />
  <div class="card-img-overlay text-center">
    <h3 class="card-title text-center">Je suis Junior<br>
      </h3>
      <h4>Grâce à Kea, perfectionnez</h4>
  <p>avec d’autres entrepreneurs d’exception.  Les freelances <br/>juniors peuvent maintenant être accompagnés par ceux <br/>ayant déjà de l’expérience.</p>
  <div class="gap-2 col-12 mx-auto text-center">
  <button class="btn" type="button" onclick="window.location.href = 'https://join.slack.com/t/kea-freelance/shared_invite/zt-saf0p3sk-2RbyTcFAmsRimaaYLeY5vw';">Pourquoi nous utiliser</button>
  
</div>
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
  color: #ffffff;
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
    border-radius: 20px;
  padding: 90 70px;
  line-height: 1.5;
}
h4{
 margin: 20px;
  
  color: #ffffff;
}
h2{
 margin: 20px;
  
  color: #FE007A;
}
.text{
 color: #000;
}
.cn {
     margin: 90px;
  padding: 0px 0px 0px 0;
}
</style>
