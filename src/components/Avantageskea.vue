<template>

  <div class="banner1 background container-fluid" id="banner">
    <div class="banner_content container">
        <h1 class="text-centre">Les avantages de travailler avec nous</h1>
        <p class="text-centre">Mets en avant tes expériences & accompagne des freelances de demain.</p>
      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0 ">
         
          <div class="mtc">
          <h3>Matcher</h3>
          
          <p>Trouve le meilleur profil disponible parmi notre communauté de talents</p>
          </div>
           <div class="ptg">
          <h3>Partager</h3>
          
          <p>Gagne en expérience et développe tes compétences auprès d’un mentor à l’écoute  </p>
          </div>
           <div class="apf">
          <h3>Amplifier</h3>
          
          <p>Fais connaisance, échange avec les membres, et élargie ton réseau pro !</p>
          </div>
        
  
  
  

        </div>
          <div class="col-md-6 mb-5 mb-md-0 text-center">
            <img v-bind:src="require('../assets/Madame.png')" width="150" alt="service-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Banner',
    data() {
      return {
        show: false
      }
    }
}
</script>

<style scoped>


h1 {
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 45px;
text-align: center;
color: #FE007A;

}
h2 {
  font-size: 14px;
  font-weight: Bold;
color: #000000;
font-family: 'Poppins' 'SemiBold';
}


p{
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
padding: 0px 0px 10px 150px;

color: #433232;

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
  width: 50%;
}
.btn {
  background-color: #FE007A;
  align-items: center;
  border-radius: 20px;
  padding: 4 90px;
 
 
  line-height: 2;
}
.banner1{
  background-image: url(/assets/backgrandbanner.png);
}

.sanae {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.mtc{
    box-shadow: rgb(0 0 0 / 25%) 4px 4px 6px;
    border-radius: 12px;
    margin-top: 40px;
}
.ptg{
    box-shadow: rgb(0 0 0 / 25%) 4px 4px 6px;
    border-radius: 12px;
    margin-top: 40px;
}
.apf{
    box-shadow: rgb(0 0 0 / 25%) 4px 4px 6px;
    border-radius: 12px;
    margin-top: 40px;
}
h3{
    padding: 30px 0px 0px 150px;
}
</style>
