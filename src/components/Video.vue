<template>
  <div class="background container-fluid" id="video">
    <div class="banner_content container">
      <div class="row">

        <div class="col-md-12 text-center">
          <div class="video">
            <iframe width="350" height="200" src="https://www.youtube.com/embed/-icXGp0DhwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
             </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Video'

}
</script>

<style scoped>

.facebook {

}



h1, p {
  color: white;
  padding-bottom: 5px;
}

h1 {
  font-size: 40px;
  font-weight: bold;
}

p{
  font-size: 15px;
  font-weight: lighter;
}

.col-md-6 {
  padding: 15px;
}

.background{
  padding-top:70px;
  background-color: #FFFFFF;
  padding-bottom: 70px;
}

.btn:hover {
  transform: scale(1.1);
}



@media screen and (max-width: 1300px){
  #video {
    width: 400px;
    height: 220px;
  }
}
</style>
