<template>
    <div className="us container-fluid"  id="about">
      <div class="container container-fluid">
        <div class="row">
          <div class="col-md-6">

            <h2>Contexte</h2>
            <article>
              <p>En 10 ans, le nombre de freelances a augmenté de près de 120%. Ils sont désormais 830.000 en France, soit plus de 10% des actifs. Environ 60% des auto-entrepreneurs ont moins de 35 ans, mais ils se rendent compte que se lancer dans ce métier est plus difficile qu'auparavant. En effet, être son propre patron, ça fait rêver mais freelance c’est aussi ne plus compter ses heures... En moyenne, ces travailleurs indépendants dépassent (très) largement les 35 heures. Parmi ces jeunes indépendants, nombreux ceux qui souhaitent être accompagnés pour leur première mission afin de disposer de conseils auprès des plus expérimentés.</p>
            </article>

            <audio controls preload="auto" autoplay="autoplay">
              <source src="../assets/coffin-dance-official-music-video-hd.mp3"
                      type="audio/mpeg">
            </audio>

            <button class="btn btn-dark" type="button" >Notre instagram</button>

          </div>

          <div class="col-md-6 text-center">
            <img v-bind:src="require('../assets/dance.jpg')" width="450" alt="service-image" />
          </div>

        </div>
      </div>
		</div>
</template>


<script>
export default {
	name:'About',
}

</script>



<style scoped>

/* About */

#about {
  padding-top: 70px;
  padding-bottom: 70px;
}
h1 {
  font-size: 40px;
}

span {
  font-weight: bold;
  color: #FECF98;
  text-transform: uppercase;
}

.btn {
  display: flex;
  margin-top: 25px;
}

.btn:hover {
  transform: scale(1.1);
}

img{
  width: 100%;
}


@media screen and (max-width: 1300px){
  img {
    padding-top: 100px;
  }
}
</style>
