<template>
  <form class="row container">
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Titre du profil</label>
    <input type="email" class="form-control" id="inputtitre4">
    <label for="inputAddress" class="form-label">Description</label>
    <input type="text" class="form-control" id="inputDescription">
    <label for="inputPassword4" class="form-label">Nom de la société</label>
    <input type="password" class="form-control" id="inputnst">
    <label for="inputPassword4" class="form-label">Fonctionalité occupé</label>
    <input type="password" class="form-control" id="inputFonctionalité4">
    <label for="inputPassword4" class="form-label">Durée d'occupation</label>
    <input type="password" class="form-control" id="inputDurée4">
     <label for="inputPassword4" class="form-label">Description</label>
    <input type="password" class="form-control" id="inputDescription4">
    <label for="inputPassword4" class="form-label">Nom de la formation</label>
    <input type="password" class="form-control" id="inputNmformation4">
     <label for="inputPassword4" class="form-label">Organisme de sirtification</label>
    <input type="password" class="form-control" id="inputOrganisme4">
    <label for="inputPassword4" class="form-label">Année d'optention</label>
    <input type="password" class="form-control" id="inputAnnee4">
     <label for="inputPassword4" class="form-label">Description</label>
    <input type="password" class="form-control" id="inputDescription4">
    <label for="inputPassword4" class="form-label">Linkedin</label>
    <input type="password" class="form-control" id="inputlinkedin4">
    <label for="inputPassword4" class="form-label">Instagram</label>
    <input type="password" class="form-control" id="inputInsta4">
    <label for="inputPassword4" class="form-label">Tweeter</label>
    <input type="password" class="form-control" id="inpuTtweet4">
    <label for="inputPassword4" class="form-label">Github</label>
    <input type="password" class="form-control" id="inputGit4">
    <label for="inputPassword4" class="form-label">Site</label>
    <input type="password" class="form-control" id="inputSite4">
    <label for="inputPassword4" class="form-label">Behance</label>
    <input type="password" class="form-control" id="inputBehance4">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
  <div class="col-md-12">
  </div>
</form>
</template>

<script>
export default {
   name:'Creationp'

} 
</script>

<style scoped>

@media screen and (max-width: 1300px){
  
  img {width: 50%}
  h1 {
  font-size: 2px;
}
}
h1 {
color: #FE007A;
}
 p {
  color: rgb(3, 3, 3);
  font-size: 16px;
line-height: 24px;
}

h1 {
  font-size: 40px;
  font-weight: bold;
  font-family: 'Poppins' , 'Bold';
}

p{
  font-size: 15px;
  font-weight: normal;
  font-family: 'Poppins';
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




</style>
