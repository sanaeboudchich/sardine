<template>
  <div class="banner1 background container-fluid" id="banner">
    <div class="banner_content container">
        <h1 class="text-center">Vous êtes freelance Senior</h1>
        <h5 class="text-center">Tansmettez votre savoir aux freelances de demain</h5>
<p class="text1 text text-center">Grâce à Kea, mettez à l’épreuve et perfectionnez vos compétences techniques & pédagogiques en accompagnant de jeunes freelances. Rejoingnez notre communautée et participer à l’évolution de la french tech dans l’univers du numérique.</p>
	<div class="gap-2 col-12 mx-auto">
  <button class="btn btn-primary" type="button" onclick="/t/kea-freelance/shared_invite/zt-saf0p3sk-2RbyTcFAmsRimaaYLeY5vw';">Rejoindre la communauté Kea</button>
  
</div>
      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0 ">
         
          <h1>Freelance ?  Rejoignez Kea !</h1>
          <h2>Grâce à Kea, perfectionnez vos compétences et développez votre réseau professionnel</h2>
          <br/>
          <p>À travers un canal Slack partagé avec d’autres entrepreneurs d’exception.  Les freelances juniors peuvent maintenant être accompagnés par ceux ayant déjà de l’expérience.</p>
        
        <div class="gap-2 col-12 mx-auto">
  <button class="btn btn-primary" type="button" onclick="/t/kea-freelance/shared_invite/zt-saf0p3sk-2RbyTcFAmsRimaaYLeY5vw';">Rejoindre la communauté Kea</button>
  
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
    name:'Banner'

}
</script>

<style scoped>

h1{
  font-size: 30px;
  color: #FE007A;
  font-weight: Bold;
font-family: 'Poppins' 'SemiBold';
}
p {
  font-size: 16px;
  color: #000000;
  font-family: 'Poppins', sans-serif;
   margin: 10px 0px 20px 60px;

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
  align-items: 4;
  border-radius: 20px;
  padding: 4 70px;
 
 
  line-height: 2;
}
.banner1{
  background-image: url(/assets/backgrandbanner.png);
}
</style>
