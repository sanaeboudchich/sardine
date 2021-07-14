<template>
  <b-navbar toggleable="lg" variant="white" bg-primary class="container navbar">
    <b-navbar-brand to="/">
      <img alt="Logo" src="@/assets/loogo.png" width="90%" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- CENTRE -->
      <b-navbar-nav class="nav ml-md-auto">
        <!--<b-nav-item href="#banner" exact-active-class=" active ">Accueil</b-nav-item>
          <b-nav-item href="#services" exact-active-class=" active">Fonctionnement</b-nav-item>
          <b-nav-item href="#team" exact-active-class=" active">Avantages</b-nav-item>
          <b-nav-item to="/Slack" exact-active-class=" active">Slack</b-nav-item>
          <b-nav-item to="/Legale" exact-active-class=" active">Login</b-nav-item>
          <b-nav-item to="/Senior" exact-active-class=" active">Senior</b-nav-item>
          <b-nav-item to="/Singup" exact-active-class=" active">Sign up</b-nav-item>
          <b-nav-item to="/Profil" exact-active-class=" active">Profil</b-nav-item>
          <b-nav-item to="/Profil1" exact-active-class=" active">Profil1</b-nav-item>
          <b-nav-item href="https://dc-sardine-en-boite.systeme.io/kea-mentoring" exact-active-class=" active">Blog</b-nav-item>
        -->
        <b-nav-item to="/Profil1" exact-active-class=" active">
          <b-button variant="outline" class="blanc" v-if="!islogged"
            >S'inscrire</b-button
          ></b-nav-item
        >
        <b-button
          variant="outline"
          v-if="islogged"
          @click="logout"
          class="blanc"
          >log out</b-button
        >
        <b-nav-item exact-active-class=" active">
          <b-button
            variant="btn btn"
            class="rose"
            @click="modalShow = !modalShow"
            v-if="!islogged"
            >Se connecter</b-button
          ></b-nav-item
        >

        <b-modal
          v-model="modalShow"
          class="modal bg-transparent p-0"
          ok-variant="transparent"
          ok-title=""
          ok-disabled
          cancel-disabled
          cancel-variant="transparent"
          cancel-title=""
        >
          <div class="container-fluid">
            <div class="row pt-4">
                <h2 class="color-purple text-center mx-auto">Bienvenue <br> sur Kea !</h2>
            </div>
            <div class="row pt-2 text-center">
              <p class="mx-auto">Pas encore membre ? <a href="#" class="color-purple">S'inscrire</a></p>
            </div>
            <form class="contact-form px-5" @submit.prevent="signIn">
              <label for="email">Email :</label>
              <input
                type="text"
                id="email"
                class="form-control col"
                v-model="email"
                placeholder="Email"
              /><br />
              <label for="password">Mot de passe :</label>
              <input
                class="form-control col"
                type="password"
                id="password"
                v-model="password"
                placeholder="Password"
              /><br />
              <div class="row text-center mt-2">
                <input type="submit" class="mx-auto" value="Se connecter" />
              </div>
            </form>
          </div>
        </b-modal>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>



<script>
import firebase from "firebase";

export default {
  name: "Header",
  data() {
    return {
      modalShow: false,
      islogged: false,
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
          alert("Vous etes connecté !");
          this.$router.push("/Apropo");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Vous etes déconecté !");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
          this.$router.push("/");
        });
    },
    IsLoggedIn() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.islogged = true;
        } else {
          this.islogged = false;
        }
      });
    },
  },
  created: function () {
    this.IsLoggedIn();
  },
};
</script>



<style scoped>
.modal-header {
  display: none !important;
}
.modal-footer {
  display: none !important;
}
.navbar container-fluid {
  background-color: #0a0a0a;
}
.nav {
  font-family: "Poppins" "Regular";
  font-size: 16px;
  color: #000000;
}

.navbar_items ul {
  display: flex;
}

.navbar_items ul li {
  margin: 0 10px;
  padding-top: 10px;
}

.color-purple{
  color: #fe007a;
}
.nav :active {
  border-bottom: 8px solid #fe007a;
}

.navbar_items ul li a {
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  color: rgb(10, 10, 10);
  padding: 5px;
}

.navbar_items ul li a:hover {
  text-decoration: none;
  color: black;
}
#nav-collapse {
  display: flex;
}

.butn {
  background-color: #fe007a;

  border-radius: 20px;

  line-height: 2;
}
label {
  color: #222222;
  font-size: 15px;
  text-align: left !important;
}
.hmodal {
  color: #222222;
}
.contact-form {
  padding-top: 20px;
  padding-bottom: 70px;
  color: #222222;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #222222;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  color: white;
  background: #e1366a;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
.rose {
  width: 179px;
  height: 43px;
  left: 175px;
  top: 0px;

  /* COULEURS PRIMAIRE/ROSE */

  background: #fe007a;
  /* BLUR CARD */

  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 27.5px;
  color: #ffffff;
}
.blanc {
  width: 150px;

  left: 0px;
  top: 0px;

  border: 1px solid #000000;
  box-sizing: border-box;
  /* BLUR CARD */

  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.1));
  border-radius: 27.5px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>
