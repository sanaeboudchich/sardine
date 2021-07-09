<template>
    <div class="teams container-fluid" id="team">
<div class="container">
  <h2 class="text-center">Pourquoi nous rejoindre ?</h2>

        <div class="row1 row container">

              <div class="icon col-md-12 ">
  <img v-bind:src="require('../assets/bonne.png')" width="99%" class="img" alt="service-image" />
  <div class="card-img-overlay"><br/><br/>
    <h3 class="carde card-title">Une communauté soudée<br>
      </h3>
      <h5 class="carde">Partage, discute et rencontre des indépendants motivés </h5>
  <p class="carde">Nous rejoindre, c’est avoir une épaule sur laquelle s’appuyer 24h/7j. Tu as une question à poser, une annecdote à raconter : Kea est là !</p>
 
  </div>
          </div>
          
        </div>
              <div class="row2 row container">

              <div class="icon col-md-12 ">
  <img v-bind:src="require('../assets/horizon.png')" width="99%" class="img" alt="service-image" />
  <div class="card-img-overlay"><br/><br/>
    <h3 class="carde2 card-title">Des freelances de tout horizon<br>
      </h3>
      <h5 class="carde2">Développe tes compétences en permanence </h5>
  <p class="carde2">Échange avec des entrepreneurs aux expertises variées. Inspires-toi de leurs expériences et de leurs réussites !</p>
 
  </div>
          </div>
          
        </div>
               <div class="row3 row container">

              <div class="icon col-md-12 ">
  <img v-bind:src="require('../assets/ressources.png')" width="99%" class="img" alt="service-image" />
  <div class="card-img-overlay"><br/><br/>
    <h3 class="carde card-title">Des ressources uniques<br>
      </h3>
      <h5 class="carde">Profite d’une multitude de ressources mises à disposition  </h5>
  <p class="carde">Le Slack Kea, c’est aussi une mine d’or d’informations enrichie en permanance par la communauté.</p>
 
  </div>
          </div>
          
        </div>
        </div>

	</div>
    

</template>


<script>

export default {
    name:'Teams'
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
.img{
object-position: right ;
}

h3 {
  
  font-weight: bold;
  color: #000000;
  
}
.carde{
  margin: 3px 150px 20px 400px;
  
}
span {
  background-color: #FFB600;
  background-size: 3.2em;
  background-position: 30px;
  margin-bottom: 50px;
  padding: -5px 10px 10px 0;
  
}

p {
  
  color: #000000;
  font-family: 'Poppins';
   margin: 10px 0px 20px 60px;
   
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;

}
.carde2{
margin: 10px 400px 20px 90px;
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
h5{
 margin: 20px;
  font-family: 'Poppins';
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
  color: #000000;
}
h2{
  
  padding: 214px 0px 100px;
  color: #FE007A;
  font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 60px;
}
.text{
 color: #000;
}
.text1 {
 padding: 0px 50px 130px;
 font-family: 'Poppins' 'SemiBold';
}
.row1{
  padding: 0px 80px 100px;
}
.row2{
  padding: 0px 80px 100px;
}
.row3{
  padding: 0px 80px 100px;
}

</style>