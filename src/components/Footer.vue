<template>
  <div class="footer float-sm-start">
    <cookie-law theme="dark-lime"></cookie-law>

    <div class="container">
      <div class="row w-100">
        <div class="col-md-4">
          <img
            v-bind:src="require('../assets/loogo.png')"
            width="100"
            alt="service-image"
          />
          <div class="menubblock_2">
            <br />
            <p>8 Bis rue de la fontaine au roi,<br />75011 Paris</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="menub">
            <div
              class="sib-form p-0"
              style="text-align: center; background-color: transparent"
            >
              <div id="sib-form-container" class="sib-form-container">
                <div
                  id="sib-container"
                  class="sib-container--large sib-container--vertical p-0"
                  style=""
                >
                  <form
                    id="sib-form"
                    method="POST"
                    @submit="alertit();"
                    action="https://f88e18e5.sibforms.com/serve/MUIEABkoKoZIgli1RTAy1ts4OsNMoxJ1NkfYAd6EZ46l4ABfW3at93MY9BG94zm_KwzjU3q2D9hGrSlPkDYPos-4CWFjo0SuDQWwBwL6dpBcksY2dkj0OVYxlk2R6r26tGprq9QPDKNH-beA1gsgebyX8ZI8EGk594dAmOpQ2Uc5HmE3SSvXiJuPKtDSkJ3X_U_ERncsZS8K8M72"
                  >
                    <div style="padding: 8px 0">
                      <div
                        class="sib-form-block"
                        style="
                          font-size: 24px;
                          text-align: left;
                          font-weight: 700;
                          font-family: 'Helvetica', sans-serif;
                          color: #3c4858;
                          background-color: transparent;
                        "
                      >
                        <h5 class="text-center" style="padding: 0px 27px">
                          S’inscrire à la newsletter
                        </h5>
                      </div>
                    </div>
                    <div style="padding: 8px 0">
                      <div class="sib-input sib-form-block">
                        <div class="form__entry entry_block">
                          <div class="form__label-row">
                            <div class="entry__field">
                              <input
                                class="input"
                                type="text"
                                id="EMAIL"
                                name="EMAIL"
                                autocomplete="off"
                                placeholder="EMAIL"
                                data-required="true"
                                required
                                style="
                                  overflow: visible;
                                  padding: 2%;
                                  border: 1px solid rgb(255, 255, 255);
                                  box-sizing: border-box;
                                  padding: 2%;
                                  color:black;
                                  box-shadow: rgb(162 160 162 / 10%) 3px 6px
                                    29px 3px;
                                  border-radius: 100px;
                                "
                              />
                              <button class="border-0 bg-white"  type="submit">
                                 <img
                                  class="circle"
                                  src="../assets/news.png"
                                  width="40px"
                              />
                              </button>
                            </div>
                          </div>

                          <label
                            class="entry__error entry__error--primary"
                            style="
                              font-size: 16px;
                              text-align: left;
                              font-family: 'Helvetica', sans-serif;
                              color: #661d1d;
                              background-color: #ffeded;
                              border-radius: 3px;
                              border-color: #ff4949;
                            "
                          >
                          </label>
                        </div>
                      </div>
                    </div>

                    <input type="hidden" name="locale" value="fr" />
                    <input type="hidden" name="html_type" value="simple" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="icone col-md-4 pr-4">
          <div class="iconcol-md-3text-centerblock_2">
            <ul class="color-rose text-right">
              <li><a href="#">Blog</a></li>
              <li><a href="/Communique_de_presse_Kea.pdf" download>Dossier de press</a></li>
            </ul>
            <div style="position: absolute; right: 0">
              <a href="https://twitter.com/keaofficiel"
                ><img class="twitter" height="40px" src="../assets/twitter.png"
              /></a>
              <a href="https://www.instagram.com/keaofficiel/"
                ><img class="instagram" height="40px" src="../assets/insta.png"
              /></a>
              <a href="hhttps://www.linkedin.com/company/keaofficiel"
                ><img class="linkedin" height="40px" src="../assets/in.png"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <p class="tous text-center">© Tous droits réservés à l’agence Sardine</p>
    </div>
  </div>
</template>


<script>
import CookieLaw from "vue-cookie-law";
export default {
  name: "Footer",
  components: { CookieLaw },
  methods:{
    alertit : function () {
      alert('Vous etes inscrit');
    }
  }
};
</script>


<style>
@media screen and (max-width: 1300px) {
  img {
    width: 50%;
  }
  P {
    padding: 10px;
  }
}
.entry__field{
border-radius: 20px !important;
}

.color-rose a {
  color: #fe007a;
}

a {
  color: rgb(7, 7, 7);
  font-weight: lighter;
}
p {
  font-family: "Poppins";
  color: #0a0a0a;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}

.tous {
  font-family: "Poppins";
  color: #0a0a0a;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
}

a:hover {
  color: #050505;
}

.block_2 {
  padding-bottom: 50px;
}

#map {
  padding: 10px;
  width: 300px;
}

h6 {
  color: #070707;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
}

.menub {
  display: grid;
}

.fab {
  font-size: 20px;
  color: white;
  margin: 10px;
  padding-bottom: 40px;
}

.fas {
  margin-right: 7px;
}

.fab:hover {
  color: #fecf98;
}

.footer {
  background-color: #ffffff;
  padding-top: 40px;
  padding-bottom: 30px;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
}
.instagram {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}
.twitter {
  margin-left: 1.5rem !important;
}
.linkedin {
  margin-right: 2rem !important;
}
.footer {
  background-color: #ffffff;
}
.icone {
  padding: 0px 80px 0px;
}
</style>
