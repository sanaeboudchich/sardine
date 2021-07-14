<template>
  <div class="container">
    <h2 class="font-weight-bold color-rose text-center mb-5 pb-5">
      Nos tarifs
    </h2>
    <div class="col-7 row mx-auto d-flex justify-content-between">
      <div class="col-md-5 border rounded p-4 text-center">
        <h2>Standard</h2>
        <ul class="my-4">
          <li>• Accès au Slack Kea</li>
          <li>• Offre exclusive</li>
          <li>• Communauté de passionée</li>
        </ul>
        <h2 class="mt-4 font-weight-bold">9,99€/mois</h2>
        <p class="font-weight-light">Sans engagement</p>
      </div>
      <div class="col-md-5 border rounded p-4 text-center">
        <h2>Premuim</h2>
        <ul class="my-4">
          <li>• Accès au Slack Kea</li>
          <li>• Offre exclusive</li>
          <li>• Communauté de passionée</li>
        </ul>
        <h2 class="mt-4 font-weight-bold">7,99€/mois</h2>
        <p class="font-weight-light">Engagement Annuel 2 mois gratuit</p>
       
      </div>
       <div class="gap-2 col-12 text-center mt-5">
          <b-nav-item to="/Singup" exact-active-class="active">
            <button class="btn btn-primary" type="button">
              Rejoindre la communauté Kea
            </button>
          </b-nav-item>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pric",
};
</script>

<style scoped>
p {
  font-size: 14px;
}
.rounded {
  border-radius: 14px !important;
}
.color-rose {
  color: #fe007a;
}
.btn {
  background-color: #a163ff;

  align-items: 4;
  border-radius: 20px;

  color: #ffffff;

  line-height: 2;
}
</style>