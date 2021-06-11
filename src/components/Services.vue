<template>
    <div class="services container-fluid" id="services">
<div class="container">
        <div class="row container">
          <div class="icon col-md-4 text-center">

            <img v-bind:src="require('../assets/musicien.jpg')" class="center-block" width="150" alt="service-image" />
            <article>
              <h3>Comment calculer son tarif horaire freelance ?</h3>
              <p>Pour cela, partez du salaire net mensuel que vous aimeriez percevoir. Ajoutez-y le montant nécessaire pour couvrir vos charges sociales et fiscales, ainsi que vos frais d’activité. Divisez ensuite ce montant par le nombre d’heures travaillées en un mois, et vous obtenez votre taux horaire.</p>
            </article>

          </div>

          <div class="icon col-md-4 text-center">
            <img v-bind:src="require('../assets/pleureuse.jpg')" width="150" class="center-block" alt="service-image" />
            <article>
              <h3>Les statuts freelance</h3>
              <p>Pour devenir freelance, la majorité des travailleurs indépendants optent soit pour le statut de SARL (ou la forme unipersonnelle EURL), soit pour celui de SAS (ou la forme unipersonnelle SASU), soit pour le régime d’auto-entrepreneur.</p>
            </article>


          </div>

          <div class="icon col-md-4 text-center">
            <img v-bind:src="require('../assets/maxresdefault.jpg')" class="center-block" width="150" alt="service-image" />
            <article>
              <h3>Comment trouver des clients ?</h3>
              <p>Il y a plusieurs choses qu’un jeune freelancer puisse faire pour trouver des clients, en créant un site web et des réseaux sociaux pour se construire une présence en ligne et se donner de la visibilité, en travaillant gratuitement au début pour gagner la confiance d’un potentiel client, ….</p>
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
  background-color: #f2f2f2;


}

h4 {
  margin: 15px;
  font-weight: bold;
}

p {
  font-size: 12px;
  font-weight: lighter;
}

</style>
