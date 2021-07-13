<template>
    <div class="tarif container-fluid row" id="tarif">
<div class="container">
  <h2 class="text-center"><br/>Nos tarifs<br/><br/></h2>
  
  
        <div class="row container">
          <div class="ico col-6 ">
  
    <h3 class="s card-title text-center">Standard</h3>
    <ul class="liste">
    <li>Accès au dispositif KEA</li><br/>
    <li>4 swipes par jour </li>
</ul>
<h3 class="titre2 card-title text-center">0€</h3>
  


          </div>
    
  
              <div class="icone col-6 ">
 
 <h3 class="g card-title text-center">Gold +</h3>
    <ul class="liste">
    <li>Accès au dispositif KEA</li><br/>
    <li>Swipes ILLIMITÉS </li><br/>
    <li>Chat en direct avec   le mentor </li>
    
</ul>
<h3 class="card-title text-center">15€/mois</h3>
  
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
  margin: 10%;
  font-weight: bold;
  color: #433232;
}
h2{
  color: #FE007A;
  font-size: 30px;
  margin: 90px;
  padding: 0px 0px 0px 0;
  font-weight: 'Semibold';
  font-family: 'Poppins' 'SemiBold';
}
p {
  font-size: 12px;
  font-weight: lighter;
  color: #1F1F1F;
  font-family: 'Poppins';
}
.liste {
  margin: 15%;

}
.liste2 {
  margin: 15%;

}
.titre1 {
  margin: 120px;
}
.titre2 {
  margin: 90px;
}
.icon {
margin: auto;
}
li {
  list-style-type: square;
}
.p {
   background-color: #00E19B;
  background-size: 3.2em;
  background-position: 30px;
  margin-bottom: 30px;
  padding: -5px 7px 7px 0;
}
.g {
   background-color: #A163FF;
  background-size: 3.2em;
  background-position: 30px;
  margin-bottom: 30px;
  padding: -5px 7px 7px 0;
}
.s {
   background-color: #07DAE8;
  background-size: 3.2em;
  background-position: 30px;
  margin-bottom: 30px;
  padding: -5px 7px 7px 0;
}
.ico{
  box-shadow: 4px 4px 6px rgb(0 0 0 / 25%);
    border-radius: 12px;
    margin-top: 40px;
}
.icone{
  box-shadow: 4px 4px 6px rgb(0 0 0 / 25%);
    border-radius: 12px;
    margin-top: 40px;
}
</style>
