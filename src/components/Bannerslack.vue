<template>
  <div class="banner1 background container-fluid" id="banner">
    <div class="banner_content container">
      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0 ">
         
          <h1>Freelance ?  Rejoignez Kea !</h1>
          <h2>Grâce à Kea, perfectionnez vos compétences et développez votre réseau professionnel</h2>
          <br/>
          <p>À travers un canal Slack partagé avec d’autres entrepreneurs d’exception.  Les freelances juniors peuvent maintenant être accompagnés par ceux ayant déjà de l’expérience.</p>
        
        <div class="gap-2 col-12 mx-auto">
          <b-nav-item to="/Senior" exact-active-class=" active">
  <button class="btn btn-primary" type="button" to="/Senior">Rejoindre la communauté Kea</button></b-nav-item>
  <div>
    <!--<b-overlay :show="show" rounded="sm" @shown="onShown" @hidden="onHidden">
      <b-card title="Card with custom overlay content" :aria-hidden="show ? 'true' : null">
        <b-button ref="show" :disabled="show" variant="primary" @click="show = true">
          Rejoindre la communauté Kea
        </b-button>
      </b-card>
      <template #overlay>
        <div class="text-center sanae">
          <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
          <p id="cancel-label">Please wait...</p>
          <b-button
            ref="cancel"
            variant="outline-danger"
            size="sm"
            aria-describedby="cancel-label"
            @click="show = false"
          >
            Cancel
          </b-button>
        </div>
      </template>
    </b-overlay>-->
  </div>
  
</div>
        </div>
          <div class="col-md-6 mb-5 mb-md-0 text-center">
            <img v-bind:src="require('../assets/bannerslack.png')" width="300" alt="service-image" />
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
  font-size: 40px;
color: #000000;
  font-weight: Bold;
font-family: 'Poppins' 'SemiBold';
}
h2 {
  font-size: 14px;
  font-weight: Bold;
color: #000000;
font-family: 'Poppins' 'SemiBold';
}
 p {
  color: rgb(3, 3, 3);
  padding-bottom: 15px;
}


p{
  font-size: 16px;
  Font-family: 'Poppins' ,'Regular';
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
</style>
