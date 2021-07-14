<template>
  <div class="banner1 background container-fluid" id="banner">
    <div class="banner_content container">
        <h1 class="text-center">Vous êtes freelance Senior</h1>
        <h5 class="text-center">Tansmettez votre savoir aux freelances de demain</h5>
<p class="text2 text-center">Grâce à Kea, mettez à l’épreuve et perfectionnez vos compétences techniques & pédagogiques en accompagnant de jeunes freelances. Rejoingnez notre communautée et participer à l’évolution de la french tech dans l’univers du numérique.</p>
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
    name:'Banner'

}
</script>

<style scoped>

h1{
  font-size: 30px;
  color: #000000;
  font-weight: Bold;
font-family: 'Poppins' 'SemiBold';

}
p {
  font-size: 16px;
  color: #000000;
  font-family: "Poppins";
}



.btn {
  background-color: #A163FF;
  
  align-items: 4;
  border-radius: 20px;

  color: #ffffff;

  line-height: 2;
}
.link {
  width: 3%;
}

h5{
  font-family: "Poppins";
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 37px;


color: #1F1F1F;
}

</style>
