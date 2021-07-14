<template>
<div class="content">
  <div class="nn container">
    <div class="nmp text-center">
      <img
        v-bind:src="require('../assets/Group49.png')"
        width="790"
        class="center-block"
        alt="service-image"
      />
    </div>
    <h2>Tu es?<br /><br /></h2>
    <div class="row gx-5 w-100">
      <div class="col-md-6">
        <div class="p-3">
          <b-nav-item to="/Singup" exact-active-class=" active">
            <img class="link" src="../assets/Group384.png" width="500px"
          /></b-nav-item>
        </div>
      </div>
      <div class="col-md-6">
        <div class="p-3">
          <b-nav-item to="/Singup" exact-active-class=" active">
            <img class="link" src="../assets/Group84.png" width="500px"
          /></b-nav-item>
        </div>
      </div>
    </div>
  </div>
  </div>
  <!--<div class="team container-fluid" id="team">
<div class="container">
  <div class="nmp">
  <img v-bind:src="require('../assets/Group49.png')" width="790" class="center-block" alt="service-image" />
  </div>
  <h2 >Tu es?<br/><br/></h2>
  
  
        <div class="row container">
          <div class="icon col-md-6 ">
  <img v-bind:src="require('../assets/keahomme.png')" width="590" class="center-block" alt="service-image" />
  <div class="card-img-overlay">
    <h3 class="card-title">Un junior
      </h3>
     <p class="senior">Je débute dans le métier</p>

  </div>


          </div>

              <div class="icon col-md-6 ">
  <img v-bind:src="require('../assets/keafemme.png')" width="600" class="center-block" alt="service-image" />
  <div class="card-img-overlay">
 <h3 class="card-title ">Un senior
      </h3>
    <p class="senior">3 ans d’expérience min</p>
  </div>


          </div>
        </div>
        </div>
<img v-bind:src="require('../assets/backkkkk.png')" width="1300" alt="service-image" />
	</div>-->
</template>


<script>
export default {
  name: "Ajoutprofile",
};
</script>


<style scoped>
@media screen and (max-width: 1300px) {
  .icon {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  img {
    width: 100%;
  }
  .content {
    background: url("../assets/moudoubaliz.png") no-repeat right !important;
    height: 1500px !important;
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
.nmp {
  padding: 70px 0px 0px 150px;
}
.content {
  background: url("../assets/backkkkk.png") no-repeat center;
  height: 1500px;
}
</style>
