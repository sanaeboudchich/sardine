<template>
  <form class="row container" @submit.prevent="saveProfile">
    <div class="formulaire col-md-12 col-sm-12">
      <img
        v-bind:src="require('../assets/etape-4.png')"
        width="800"
        class="center-block"
        alt="service-image"
      />
      <h1>Complète ton profil :</h1>
      <div class="titre">
        <h5 class="rss">Titre du profil *</h5>
        <div class="boutton">
          <input
            type="text"
            v-model="title"
            class="form-control"
            id="inputtitre4"
          />
          <br />
        </div>
      </div>
      <div class="titre">
        <h5 class="rss">Description *</h5>
        <div class="boutton">
          <input
            type="text"
            class="form-control"
            v-model="description"
            id="inputDescription"
            style="padding: 50px"
          />
          <br />
        </div>
      </div>

      <div class="titre">
        <h5 class="rss">Experience *</h5>
        <div class="row px-4">
          <div class="boutton col-4 row">
        <label for="inputPassword4" class="forum form-label"
          >Nom de la société
        </label>
        
          <input
            type="text"
            class="form-control col"
            id="inputnst"
            v-model="company"
          />
        </div>
          <div class="boutton col-4 row">

        <label for="inputPassword4" class="forum form-label"
          >Fonctionalité occupé
        </label>
        
          <input
            type="text"
            class="form-control col"
            id="inputFonctionalité4"
            v-model="job"
          />
          </div>
          <div class="boutton col-4 row">

          <label for="inputPassword4" class="forum form-label"
            >Durée d'occupation
          </label>
          <input
            type="text"
            class="form-control col"
            id="inputDurée4"
            v-model="seniority"
          />
        </div>
        </div>
        <label for="inputPassword4" class="forum form-label"
          >Description
        </label>
        <div class="boutton">
          <input
            type="text"
            class="form-control"
            id="inputDescription4"
            v-model="description1"
            style="padding: 50px"
          />
          <br />
        </div>

        
        </div>
      
      <div class="titre">
        <h5 class="rss">Formation *</h5>
        <div class="row px-4">
          <div class="boutton col-4 row">
        
        <label for="inputPassword4" class="forum form-label"
          >Nom de la formation</label
        >
        
          <input
            type="text"
            class="form-control col"
            id="inputNmformation4"
            v-model="education"
          />
       
        </div>
          <div class="boutton col-4 row">
        <label for="inputPassword4" class="forum form-label"
          >Organisme de sirtification</label
        >
        
          <input
            type="text"
            class="form-control col"
            id="inputOrganisme4"
            v-model="organization"
          />
          </div>
          <div class="boutton col-4 row">
          <label for="inputPassword4" class="form-label"
            >Année d'optention</label
          >
          <input
            type="text"
            class="form-control col"
            id="inputAnnee4"
            v-model="year_od_obtaining"
          />
        </div>
        </div>
        <div class="boutton">
       
          <label for="inputPassword4" class="form-label">Description</label>
          <input
            type="text"
            class="form-control col"
            id="inputDescription4"
            v-model="description2"
            style="padding: 50px"
          />
          <br/>
          </div>
        </div>
      <div class="titre">
        <h5 class="rs">Vous contacter *</h5>
        <div class="row px-5">
          <div class="boutton col row">
            <img
              v-bind:src="require('../assets/linkedin.png')"
              width="38px"
              height="38px"
              class="center-block"
              alt="service-image"
            />
            <input
              type="text"
              class="form-control col"
              id="inputlinkedin4"
              v-model="linkedin"
            />
          </div>
          <div class="boutton col row">
            <img
              v-bind:src="require('../assets/instagram.png')"
              width="38px"
              height="38px"
              class="center-block"
              alt="service-image"
            />
            <input
              type="text"
              class="form-control col"
              v-model="instagram"
              id="inputInsta4"
            />
          </div>
        </div>
        
        
        <div class="row px-5">
          <div class="boutton col row">
             <img
              v-bind:src="require('../assets/tweeter.png')"
              width="38px"
              height="38px"
              class="center-block"
              alt="service-image"
            />
          <input
            type="text"
            class="form-control col"
            id="inpuTtweet4"
            v-model="tweeter"
          />
        
        </div>
       
          <div class="boutton col row">
             <img
              v-bind:src="require('../assets/github.png')"
              width="38px"
              height="38px"
              class="center-block"
              alt="service-image"
            />
          <input
            type="text"
            class="form-control col"
            id="inputGit4"
            v-model="github"
          />
        
        </div>
        </div>
        <div class="row px-5">
          <div class="boutton col row">
         <img
              v-bind:src="require('../assets/site.png')"
              width="38px"
              height="38px"
              class="center-block"
              alt="service-image"
            />
        
          <input
            type="text"
            class="form-control col"
            id="inputSite4"
            v-model="site"
          />
          <br/>
         </div>
      
          <div class="boutton col row">
             <img
              v-bind:src="require('../assets/behance.png')"
              width="38px"
              height="38px"
              class="center-block"
              alt="service-image"
            />
          <input
            type="text"
            class="form-control col"
            id="inputBehance4"
            v-model="behance"
          />
          <br/>
          </div>
        
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import firebase from "firebase";

export default {
  name: "Creationp",
  computed: {
    ...mapState(["user"]),
  },
  data() {
    return {
      title: "",
      description: "",
      company: "",
      job: "",
      seniority: "",
      description1: "",
      organization: "",
      year_od_obtaining: "",
      description2: "",
      linkedin: "",
      tweeter: "",
      github: "",
      site: "",
      behance: "",
    };
  },
  methods: {
    ...mapActions(["fetchUser"]),
    async saveProfile() {
      await firebase
        .firestore()
        .collection("users")
        .doc(this.user.data.uid)
        .set({
          title: this.title,
          description: this.description,
          company: this.company,
          job: this.job,
          seniority: this.seniority,
          description1: this.description1,
          organization: this.organization,
          year_od_obtaining: this.year_od_obtaining,
          description2: this.description2,
          linkedin: this.linkedin,
          tweeter: this.tweeter,
          github: this.github,
          site: this.site,
          behance: this.behance,
        })
        .then(() => {
          this.fetchUser();
          this.$router.push({ name: "Home" });
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 1300px) {
  img {
    width: 50%;
  }
  h1 {
    font-size: 2px;
  }
}

p {
  color: rgb(3, 3, 3);
  font-size: 16px;
  line-height: 24px;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  font-family: "Poppins", "Bold";
}

p {
  font-size: 15px;
  font-weight: normal;
  font-family: "Poppins";
}
.img {
  padding: 20px 150px 40px;
}

.col-md-12 {
  padding: 60px 0px 0px 300px;
}
.background {
  padding-top: 100px;
  background-color: #ffffff;
  padding-bottom: 70px;
}
.btn-primary {
  background-color: #e3a964;
  border-color: #e3a964;
  margin-right: 15px;
}

.btn:hover {
  transform: scale(1.1);
}

.titre {
  box-shadow: rgb(0 0 0 / 25%) 4px 4px 6px;
  border-radius: 12px;
  margin-top: 40px;
}
.forum {
  padding: 10px 60px 0px 30px;
  font-family: "Poppins";
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

display: flex;
align-items: center;
}
.boutton {
  padding: 10px 60px 0px 30px;
}
.rs{
      padding: 20px 0px 20px 50px;
       font-weight: bold;
  font-family: "Poppins", "Bold";
}
.rss{
      padding: 30px 0px 20px 30px;
       font-weight: bold;
  font-family: "Poppins", "Bold";
}
</style>
