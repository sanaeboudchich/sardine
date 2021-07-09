<template>
 <div class="footer float-sm-start">

     <cookie-law theme="dark-lime"></cookie-law>


   <div class="container">
  <div class="row w-100">
    <div class="col-md-4">
  <img v-bind:src="require('../assets/loogo.png')" width="100" alt="service-image" />
  <div class="menubblock_2">
  <br/>
    <p>8 Bis rue de la fontaine au roi,<br>75011 Paris</p>
  </div>
  </div>
    <div class="col-md-4">
    
    <div class="menub">
        <div class="sib-form" style="text-align: center;
         background-color: transparent;                                           ">
  <div id="sib-form-container" class="sib-form-container">
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="">
      <form id="sib-form" method="POST" action="https://f88e18e5.sibforms.com/serve/MUIEABkoKoZIgli1RTAy1ts4OsNMoxJ1NkfYAd6EZ46l4ABfW3at93MY9BG94zm_KwzjU3q2D9hGrSlPkDYPos-4CWFjo0SuDQWwBwL6dpBcksY2dkj0OVYxlk2R6r26tGprq9QPDKNH-beA1gsgebyX8ZI8EGk594dAmOpQ2Uc5HmE3SSvXiJuPKtDSkJ3X_U_ERncsZS8K8M72">
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:24px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;">
            <h4 class="text-centre" style="padding: 0px 27px;">S’inscrire à la newsletter</h4>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">

                <div class="entry__field">
                  <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required style="overflow: visible;
    padding: 2%; border: 1px solid rgb(255, 255, 255);
    box-sizing: border-box; padding: 2%;box-shadow: rgb(162 160 162 / 10%) 3px 6px 29px 3px;border-radius: 50px;"/>
                </div>
              </div>

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="text-align: center">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:center; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#FFFFFF; background-color:#3E4857; border-radius:3px; border-width:0px;" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
              </svg>
              S&#039;INSCRIRE
            </button>
          </div>
        </div>
        
        <input type="hidden" name="locale" value="fr">
        <input type="hidden" name="html_type" value="simple">
      </form>
    </div>
  </div>
</div>
    </div>
    </div>

  

<div class="icone col-md-4">
  <div class="iconcol-md-3text-centerblock_2">
    <h6>SUIS-NOUS SUR LES RÉSEAUX</h6>
        <a href="https://twitter.com/keaofficiel"><img class="twitter" src="../assets/twitter.png"></a>
        <a href="https://www.instagram.com/keaofficiel/"><img class="instagram" src="../assets/insta.png"></a>
        <a href="hhttps://www.linkedin.com/company/keaofficiel"><img class="linkedin" src="../assets/in.png"></a>
  </div>

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
.icone{
  padding: 0px 80px 0px;
}
</style>
