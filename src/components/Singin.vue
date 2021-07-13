<template>
<div class="partenaire" id="services">
<div class="container">
  <div class=" row container sing-up">
    <div class=" col-md-6 col-sm-6">
       
        
        <div class="row px-6">
          <div class="boutton col-6 row">
            <input type="text" v-model="email" placeholder="Email" /><br/>
          </div>
           <div class="boutton col-6 row">
            <input type="text" v-model="email" placeholder="Email" /> <br/>
          </div>
        </div>
         
        <div class="row px-6">
          <div class="boutton col-6 row">
            <input type="text" v-model="email" placeholder="Email" />
          </div>
           <div class="boutton col-6 row">
            
          </div>
        </div>

    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button @click="signUp">Inscription</button>
    <router-link tp="/legale">Connexion</router-link>
    </div>
 <div class=" col-md-6 col-sm-6">
  <img v-bind:src="require('../assets/backsng.png')" width="100" alt="service-image" />
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
    };
  },
  methods: {
    async signUp() {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully registered! Please login.");
          this.$router.push("/");
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
