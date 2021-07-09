<template>
    <div class="services container-fluid" id="services">
<div class="container">
  <h2 class="text-center">Comment ça marche ?<br/><br/></h2>
  
  
        <div class="row container">
          <div class="icon col-md-4 text-center">

            <img v-bind:src="require('../assets/1.png')" class="center-block" width="220" alt="service-image" />
            <article>
              <br/><h4>Inscris-toi </h4>
              <p>En rejoignant KEA, tu rejoins<br/> un réseau de freelances <br/>bienveillant.</p>
            </article>

          </div>

          <div class="icon col-md-4 text-center">
            <img v-bind:src="require('../assets/2.png')" width="190" class="center-block" alt="service-image" />
            <article>
              <br/><h4>Trouve ton freelance</h4>
              <p>Match avec le freelance <br/>qui te correspond et <br/>travaille avec lui.</p>
            </article>


          </div>

          <div class="icon col-md-4 text-center">
            <img v-bind:src="require('../assets/3.png')" class="center-block" width="190" alt="service-image" />
            <article>
              <br/><h4>Partage et échange</h4>
              <p>Partage tes connaissances et <br/>gagnes en compétences.</p>
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
  img {width: 70%}
}


.service .container {
  background-color: #444444;
}

#services {
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #ffffff;


}

h4 {
  margin: 15px;
  font-size: 20px;
  color: #433232;
   font-family: 'Poppins' 'medium';
   
}
h2{
  font-size: 30px;
  color: #FE007A;
  font-weight: 'Semibold';
  font-family: 'Poppins' 'SemiBold';
}
p {
  font-size: 16px;
  color: #1F1F1F;
  font-family: 'Poppins' 'regular';
  font-style: normal;
font-weight: normal;

line-height: 24px;
text-align: center;
}

</style>
