<template>
  <div class="banner1 background container-fluid" id="banner">
    <div class="banner_content container">
      <h1 class="text-center">Vous êtes freelance Junior ?</h1>
      <h5 class="text-center">
        Booste tes performances et gagne en compétences
      </h5>
      <p class="text2 text-center">
        Avec Kea, développe ton réseau professionnel à travers un canal Slack
        partagé avec d’autres entrepreneurs d’exception. Les freelances juniors
        peuvent maintenant être accompagnés par ceux ayant déjà de l’expérience.
      </p>
	<div class="gap-2 col-12 text-center">
    <b-nav-item to="/Singup" exact-active-class=" active">
  <button class="btn btn-primary" type="button" >Rejoindre la communauté Kea</button>
      </b-nav-item>
       </div>
      <div class="gap-2 col-12 text-center pt-5">
        <a href="#crousel"><img class="link" src="../assets/link.png" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  color: #000000;
  font-weight: Bold;
  font-family: "Poppins" "SemiBold";
}
h5 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;

  color: #1f1f1f;
}
p {
  font-size: 16px;
  color: #000000;
  font-family: "Poppins";
}

.col-md-6 {
  padding: 15px;
  padding-top: 50px;
}

.background {
  padding-top: 100px;
  background-color: #ffffff;
  padding-bottom: 100px;
}

img {
  width: 50%;
}
.btn {
  background-color: #ffb600;
  align-items: 4;
  border-radius: 20px;

  color: #ffffff;

  line-height: 2;
}
.link {
  width: 3%;
}
.banner1 {
  background-image: url(../assets/vue2.png);
}
</style>
