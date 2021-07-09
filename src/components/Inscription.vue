<template>
  <form class="row container">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nom</label>
    <input type="email" class="form-control" id="inputNom4">
    <label for="inputAddress" class="form-label">Prenom</label>
    <input type="text" class="form-control" id="inputPrenom">
    <label for="inputPassword4" class="form-label">Email</label>
    <input type="password" class="form-control" id="inputEmail">
    <label for="inputPassword4" class="form-label">Mot de passe</label>
    <input type="password" class="form-control" id="inputPassword4">
    <label for="inputPassword4" class="form-label">Mot de passe</label>
    <input type="password" class="form-control" id="inputPassword4">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
  <div class="col-md-6">
  </div>
</form>
</template>

<script>
export default {
    name:'Inscription'

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
