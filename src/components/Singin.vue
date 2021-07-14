<template>
<div class="partenaire" id="services">
<div class="container">
     <img
        v-bind:src="require('../assets/Group9.png')"
        
        class=" img center-block text-centre"
        alt="service-image"
      />
  <div class=" row container sing-up">
    <div class=" col-md-6">
       <img
        v-bind:src="require('../assets/trer.png')"
        width="500"
        class="vu center-block"
        alt="service-image"
      />
        
        <div class="row px-6">
          <div class="boutton col-md-6 ">
              <b-form-group
        id="input-group-1"
        label="Nom:"
        />
            <b-form-input type="text" v-model="nom" /><br/>
          </div>
           <div class="boutton col-md-6">
               <b-form-group
        id="input-group-1"
        label="Prenom:"
        />
            <b-form-input type="text" v-model="prenom" /> <br/>
          </div>
        </div>
         
        <div class="row px-6">
          <div class="boutton col-md-6">
              <b-form-group
        id="input-group-1"
        label="Date de naissance:"
        />
            <b-form-input type="text" v-model="naissance" />
          </div>
           <div class="boutton col-md-6">
            
          </div>
        </div>
              <b-form-group
        id="input-group-1"
        label="Email:"
        />
    <b-form-input type="text" v-model="email" /><br />
              <b-form-group
        id="input-group-1"
        label="Mot de passe:"
        />
    <b-form-input type="password" v-model="password" /><br />
           <b-form-group
        id="input-group-1"
        label="Confirmer le mot de passe:"
        />
    <b-form-input type="password" v-model="password" /><br />
    <button @click="signUp" class="ins">Inscription</button>
    <router-link tp="/profil3">Connexion</router-link>
    </div>

 </div>
</div>
</div>
</template>


<script>
import firebase from "firebase";

export default {
  name: "singin",
  data() {
    return {
      email: "",
      password: "",
      nom:"",
      prenom: "",
      naissance:"",
    };
  },
  methods: {
    async signUp() {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/Profil3");
        })
        .catch((error) => {
          alert(error.message);
        });
      /*.then(
          async (response) => {
            if (response.user) {
              await firebase
                .firestore()
                .collection("users")
                .doc(response.user.uid)
                .catch((error) => {
                  console.log(error).code;
                });
            }else{
                console.log("HII");
            }
          },
          function (err) {
            alert("Oops." + err.message);
          }
        );*/
    },
  },
};
</script>
<style scoped>
.ins{
  background: #FE007A;
/* BLUR CARD */

box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
border-radius: 27.5px;
 align-items: 4;
  border-radius: 20px;

  color: #ffffff;

  line-height: 2;

}
.img{
    width: 1000px;
  }
.partenaire{
  background: url("../assets/Group6.png") no-repeat center;
  height: 1176px;
}
@media screen and (max-width: 1300px) {

  .partenaire{
    background: url("../assets/Group387.png") no-repeat right !important;
    height: 1500px !important;
  }
  .img{
    width: 300px !important;
  }
  .vu{
    width: 200px !important;
  }
}
</style>
