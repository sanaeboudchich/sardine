<template>
 <div class="background container-fluid">
    <div class="banner_content container">
        <h2>Les avantages qu’offrent KEA<br/><br/></h2>
      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0 text-center">
          <img v-bind:src="require('../assets/Junior.png')" width="750" alt="service-image" />
        </div>
          <div class="col-md-6 mb-5 mb-md-0 text-center">
            <img v-bind:src="require('../assets/senior.png')" width="750" alt="service-image" />
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
    name:'Team'
}

</script>


<style scoped>


#ourteam {
  padding-bottom: 70px;
  padding-top: 70px;
}

img {
  width: 60%;
}

h5 {
  margin: 7px;
  font-size: 14px;
  font-weight: bold;
}
h2{
  color: #FE007A;
}

p {
  font-size: 12px;
  font-weight: lighter;
}

.fas {
  font-size: 50px;
}

.ourteam_wrapper .team_members:hover img{
  transform: scale(1.1);
}

</style>
