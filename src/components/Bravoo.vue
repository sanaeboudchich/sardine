<template>
<div class="content">
  <div class="nn container">
    <div class="nmp text-center">
      <img
        v-bind:src="require('../assets/etape5.png')"
        width="790"
        class="vu center-block"
        alt="service-image"
      />
    </div>
    <h2>Merci pour ton inscription !<br /><br /></h2>
    <div class="text-center">
        <img
        v-bind:src="require('../assets/Pose241.png')"
        width="200"
        class="center-block"
        alt="service-image"
      />
      <p>Tu peux désormais accèder à notre Slack afin de discuter<br/>
avec d’autres freelances ou encore de dénicher des missions.<br/>
Tu auras accès aux chans réservés aux senior une fois<br/>
ton profil vérifé !</p>
    </div>
    
      
    
  </div>
  </div>
 
</template>


<script>
export default {
  name: "Bravoo",
};
</script>


<style scoped>
@media screen and (max-width: 1300px) {
  .icon {
    padding-top: 15px;
    padding-bottom: 15px;
  }
   .vu{
    width: 200px !important;
  }
  img {
    width: 100%;
  }
 
  h2 {
    font-size: 10px;
    font-weight: normal bold;
  }
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
  color: #433232;
  font-family: "Poppins", "Medium";
  padding: 20px 0px 0px 0px;
}
span {
  background-color: #ffb600;
  background-size: 3.2em;
  background-position: 30px;
  margin-bottom: 50px;
  padding: -5px 10px 10px 0;
}
h2 {
  font-size: 30px;
  color: #000000;
  padding: 80px 50px 0px 60px;
  font-weight: "Semibold";
  font-family: "Poppins" "SemiBold";
}

.senior {
  padding: 20px 0px 0px 30px;
}


</style>
