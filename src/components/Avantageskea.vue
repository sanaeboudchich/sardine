<template>

  <div class="banner1 background container-fluid" id="banner">
    <div class="banner_content container">
        <h1 class="text-centre">Les avantages de travailler avec nous</h1>
        <p class="avantag text-center">Intègre la meilleure communauté de freelances (oui rien que ça).</p>
      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0 ">
         
          <div class="mtc row">
            <div class="col-1">
              <h1 class="un">1</h1>
              </div>
            <div class="col-11">
          <h3>Matcher</h3>
          
          <p>Accompagne à ton rythme et rencontre des milliers de freelances motivés !</p>
          </div>
          </div>
           <div class="ptg row">
             <div class="col-1">
              <h1 class="un">2</h1>
              </div>
            <div class="col-11">
          <h3>Briefer</h3>
          
          <p>Transmets ton savoir en partageant tes connaissances et tes compétences.</p>
          </div>
          </div>
           <div class="apf row">
             <div class="col-1">
              <h1 class="un">3</h1>
              </div>
            <div class="col-11">
          <h3>Souffler</h3>
          
          <p>Confie à des freelances de confiance les missions que tu ne peux pas assurer.</p>
          </div>
        
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
@media screen and (max-width: 1300px) {
.un{
  right: -33px !important;
    top: 50px !important;
}
.avantag{
  padding: 0px !important;
}
}
h1 {
font-family: "Poppins";
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 45px;
text-align: center;

/* COULEURS PRIMAIRE/ROSE */

color: #FE007A;

}
h2 {
  font-size: 14px;
  font-weight: Bold;
color: #000000;
font-family: 'Poppins' 'SemiBold';
}


p{
font-family: "Poppins";
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
padding: 0px 0px 10px 90px;

color: #433232;

}
.avantag{

font-family: "Poppins";
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
padding: 0px !important;
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
    padding: 30px 0px 0px 90px;
    color: black;
}
.banner1{
  background-image: url(../assets/vue2.png);
}
.un{
  position: absolute;
left: 6.99%;
right: 86.21%;
top: 10%;
bottom: 0.91%;
padding: 0px 0px 0px 50px;
font-family: "Poppins";
font-weight: bolder;
font-weight: 900;

font-size: 60px;
line-height: 90px;

color: #FFB600;

}
</style>
