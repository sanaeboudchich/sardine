<template>
  <div class="content">
    <b-navbar
      toggleable="lg"
      variant="white"
      bg-primary
      class="container navbar"
    >
      <b-navbar-brand to="/">
        <img alt="Logo" src="@/assets/loogo.png" width="90%" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- CENTRE -->
        <b-navbar-nav class="nav ml-md-auto">
          <b-nav-item href="https://app.slack.com/client/T0266KM53L2/C0266KM6RKL" exact-active-class=" active" class="mr-4" >
            <b-button  variant="outline" class="rose" v-if="!islogged"
              >Ouvrir Stock</b-button
            ></b-nav-item
          >
          <b-nav-item class="mt-1"> {{ this.nom }} {{ this.prenom }} <img
            v-bind:src="this.avatar"
            width="30px"
            height="30px"
            class="center-block rounded-0"
            alt="service-image"
          /></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container pb-5 mb-5">
      <div class="row py-5">
        <div class="col-md-2 text-center">
          <img
            v-bind:src="this.avatar"
            width="80px"
            height="80px"
            class="center-block rounded-0"
            alt="service-image"
          />
        </div>
        <div class="col-md-6 pt-2">
          <div class="row font-weight-bold pb-2">
            {{ this.nom }} {{ this.prenom }}
          </div>
          <div class="row">{{ this.titre }}</div>
        </div>
        <div class="col-md-3 text-right pt-5">
          Paris, France
          <img
            v-bind:src="require('../assets/ghchacha.png')"
            width="20px"
            height="20px"
            class="center-block rounded-0"
            alt="service-image"
          />
        </div>
      </div>
      <div class="row">
        <ul id="example-1">
          <li
            v-for="competence in this.competences"
            :key="competence"
            style="display: block; float: left"
            class="pr-3"
          >
            <div class="competences">{{ competence }}</div>
          </li>
        </ul>
        <div class="col-md-8"></div>
        <div class="col-md-4"></div>
      </div>
      <h4 class="font-weight-bold py-4">Retrouvez Roméo sur :</h4>
      <div class="row py-1">
        <div class="col-md-4">
          <div class="row">
            <div class="col-10 border border-primary rounded pl-0">
              <img
                v-bind:src="require('../assets/linkedin.png')"
                width="42px"
                height="42px"
                class="center-block"
                alt="service-image"
              />
              {{ this.linkedin }}
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-10 border border-primary rounded pl-0">
              <img
                v-bind:src="require('../assets/instagram.png')"
                width="42px"
                height="42px"
                class="center-block"
                alt="service-image"
              />
              {{ this.instagram }}
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-10 border border-primary rounded pl-0">
              <img
                v-bind:src="require('../assets/tweeter.png')"
                width="42px"
                height="42px"
                class="center-block"
                alt="service-image"
              />
              {{ this.github }}
            </div>
          </div>
        </div>
      </div>
      <div class="row py-1">
        <div class="col-md-4">
          <div class="row">
            <div class="col-10 border border-primary rounded pl-0">
              <img
                v-bind:src="require('../assets/github.png')"
                width="42px"
                height="42px"
                class="center-block"
                alt="service-image"
              />
              {{ this.tweeter }}
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-10 border border-primary rounded pl-0">
              <img
                v-bind:src="require('../assets/site.png')"
                width="42px"
                height="42px"
                class="center-block"
                alt="service-image"
              />
              {{ this.site }}
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-10 border border-primary rounded pl-0">
              <img
                v-bind:src="require('../assets/behance.png')"
                width="42px"
                height="42px"
                class="center-block"
                alt="service-image"
              />
              {{ this.behance }}
            </div>
          </div>
        </div>
      </div>
      <h4 class="font-weight-bold py-5">Expérience :</h4>

      <div class="row w-50">
        <div class="col-md-6 font-weight-bold">{{ this.job }}</div>
        <div class="col-md-6">
          {{ this.company }} - {{ this.seniority }}
        </div>
      </div>
      <div class="row pl-4 pt-2">
        {{ this.description1 }}
      </div>

      <h4 class="font-weight-bold py-5">Formation :</h4>

      <div class="row w-50">
        <div class="col-md-6 font-weight-bold">{{ this.job }}</div>
        <div class="col-md-6">
          {{ this.education }} - {{ this.year_od_obtaining }}
        </div>
      </div>
      <div class="row pl-4 pt-2">
        {{ this.description2 }}
      </div>
    </div>
  </div>
</template>



<style scoped>
.rose {
  color: white;
  background-color: rgb(255, 30, 86);
  border-radius: 20px;
}
.competences {
  border: 1px solid rgb(255, 30, 86);
  color: rgb(255, 30, 86);
  padding: 5px 8px;
  border-radius: 50px;
  width: 100%;
}
</style>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      nom: "",
      prenom: "",
      job: "",
      competences: [],
      behance: "",
      avatar: "",
      company: "",
      description: "",
      description1: "",
      description2: "",
      instagram: "",
      github: "",
      linkedin: "",
      organization: "",
      seniority: "",
      site: "",
      title: "",
      education: "",
      tweeter: "",
      year_od_obtaining: "",
    };
  },
  name: "Monprofil",
  methods: {
    getUserInformations() {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((doc) => {
          this.job = doc.data().job;
          this.nom = doc.data().nom;
          this.prenom = doc.data().prenom;
          this.behance = doc.data().behance;
          this.avatar = doc.data().avatar;
          this.company = doc.data().company;
          this.description = doc.data().description;
          this.description1 = doc.data().description1;
          this.description2 = doc.data().description2;
          this.github = doc.data().github;
          this.competences = doc.data().competences;
          this.education = doc.data().education;
          this.instagram = doc.data().instagram;
          this.linkedin = doc.data().linkedin;
          this.organization = doc.data().organization;
          this.seniority = doc.data().seniority;
          this.site = doc.data().site;
          this.title = doc.data().title;
          this.tweeter = doc.data().tweeter;
          this.year_od_obtaining = doc.data().year_od_obtainin;
        });
    },
  },
  created: function () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.getUserInformations();
      } else {
        console.log("wa sana");
      }
    });
  },
};
</script>


