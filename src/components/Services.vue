<template>
    <div class="services container-fluid" id="services">
<div class="container">
  <h2>Comment ça marche ?<br/><br/></h2>
  
  
        <div class="row container">
          <div class="icon col-md-4 text-center">

            <img v-bind:src="require('../assets/3.png')" class="center-block" width="150" alt="service-image" />
            <article>
              <br/><h3>Inscris sur la <br/>plateforme KEA</h3>
              <p>En rejoignant KEA, tu <br/>rejoins un réseau de <br/>freelances bienveillant.</p>
            </article>

          </div>

          <div class="icon col-md-4 text-center">
            <img v-bind:src="require('../assets/2.png')" width="150" class="center-block" alt="service-image" />
            <article>
              <br/><h3>Trouve ton <br/>freelance</h3>
              <p>Match avec le freelance <br/>qui te correspond et <br/>travaille avec lui.</p>
            </article>


          </div>

          <div class="icon col-md-4 text-center">
            <img v-bind:src="require('../assets/3.png')" class="center-block" width="150" alt="service-image" />
            <article>
              <br/><h3>Gagne de <br/>l’expérience</h3>
              <p>Partage tes<br/> connaissances et gagnes <br/>en compétences.</p>
            </article>


          </div>
        </div>
        </div>

		<!--<h1 class="title">Nos services</h1>
		<p>Parce que tu dois partir en fanfare nous te proposons un assortiment d'exotisme avec plusieurs extrats. Grâce à cela vous et votre entourage pourront partager un moment unique autour de votre cercueil.
        </p>

		<div class="diff_services">

            <div class="diff_services_item">
                <img v-bind:src="require('../assets/dance2.jpg')" alt="service-image" />
                <h3 class="sub_title">Danceur</h3>
                <p>Pour ne rien rater de ton enterement rester eveillé grace au secouse en rythme</p>
            </div>

            <div class="diff_services_item">
                <img v-bind:src="require('../assets/pleureuse.jpg')" alt="service-image" />
                <h3 class="sub_title">Pleureuse</h3>
                <p>Pourquoi pleurer quand d'autres peuvent le faire a ta place</p>
            </div>

            <div class="diff_services_item">
                <img v-bind:src="require('../assets/musicien.jpg')" alt="service-image" />
                <h3 class="sub_title">Musicien</h3>
                <p>Un peu de musique pour couvrir le bruit de défunt qui se cogne...</p>
            </div>

		</div>-->
	</div>

</template>


<script>

export default {
    name:'Services'
}

</script>


<style scoped>



@media screen and (max-width: 1300px){
  .icon {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  img {width: 30%}
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
  margin: 15px;
  font-weight: bold;
  color: #433232;
}
h2{
  color: #FE007A;
}
p {
  font-size: 12px;
  font-weight: lighter;
  color: #1F1F1F;
  font-family: 'Poppins', sans-serif;
}

</style>
