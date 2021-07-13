<template>
  <div class="login">
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button @click="signIn">Connection</button>
  </div>
</template>



<script>
import firebase from "firebase";

export default {
  name: "Logiin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn: function () {
      /*firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
               function (){
                    
                    this.$router.push({name:"Home"}) 
                    this.$router.push({name:"Home"}) 
                },
                function (err){
                alert('Oops.' + err.message)
                }
            );*/
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION);
          alert("Successfully logged in");
          this.$router.push("/Profil3");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
