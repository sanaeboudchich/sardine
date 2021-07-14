<template>
  <form class="container" @submit.prevent="saveProfile">
    <div class="nn container">
      <div class="nmp text-center">
        <img
          v-bind:src="require('../assets/Group049.png')"
          width="790"
          class="center-block"
          alt="service-image"
        />
      </div>
      <h2>Quel est ton secteur d’activité ?<br /><br /></h2>
      <div class="row gx-5 w-100">
        <div class="col-md-4">
          <div class="p-3 text-center border rounded shadow">
            <div v-on:click="disHidden = !disHidden">
              <img class="link" src="../assets/mdidou1.png" height="200px" />
            </div>
            <h4>Design</h4>
            <div class="design text-left my-4">
              <b-form-checkbox-group
                v-if="disHidden"
                v-model="selected"
                :options="doptions"
                :aria-describedby="ariaDescribedby"
                name="design"
                stacked
              ></b-form-checkbox-group>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 text-center border rounded shadow">
            <div v-on:click="devisHidden = !devisHidden">
              <img class="link" src="../assets/mdidou2.png" height="200px" />
            </div>
            <h4>Développement</h4>
            <div class="dev text-left my-4">
              <b-form-checkbox-group
                v-if="devisHidden"
                v-model="selected"
                :options="devoptions"
                :aria-describedby="ariaDescribedby"
                name="dev"
                stacked
              ></b-form-checkbox-group>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 text-center border rounded shadow">
            <img class="link" src="../assets/mdidou3.png" height="200px" />
            <h4>Marketing</h4>
            <div class="marketing text-left my-4"></div>
          </div>
        </div>
      </div>
      <div class="row float-right my-5">
        <button type="submit" class="btn btn-primary">Suivant</button>
      </div>
    </div>
  </form>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Case",
  data() {
    return {
      disHidden: false,
      devisHidden: false,
      misHidden: false,
      selected: [], // Must be an array reference!
      doptions: [
        { text: "Graphiste", value: "Graphiste" },
        { text: "Webdesigner", value: "Webdesigner" },
        { text: "UX Designer", value: "UX Designer" },
        { text: "Illustrateur", value: "Illustrateur" },
        { text: "Directeur artistique", value: "Directeur artistique" },
        { text: "Product Designer", value: "Product Designer" },
        { text: "Motion Designer", value: "Motion Designer" },
      ],
      devoptions: [
        { text: "Developpement front", value: "Developpement front" },
        { text: "Developpement Back", value: "Developpement Back" },
        { text: "Utilisation de CMS", value: "Utilisation de CMS" },
        { text: "Developpement Mobile", value: "Developpement Mobile" },
        { text: "Developpement logiciel", value: "Developpement logiciel" },
        { text: "Cyber sécurité", value: "Cyber sécurité" },
        {
          text: "Administrateur de base de données",
          value: "Administrateur de base de données",
        },
      ],
    };
  },
  methods: {
    saveProfile() {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .update({ competences: this.selected })
        .then(() => {
          //console.log("user updated!");
          this.$router.push("/Profil3");
        });
    },
  },
};
</script>