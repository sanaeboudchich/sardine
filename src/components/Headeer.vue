<template>
  <b-navbar toggleable="lg" variant="white" bg-primary class="container navbar">
    <b-navbar-brand to="/">
      <img alt="Logo" src="@/assets/loogo.png" width="90%" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  </b-navbar>
</template>



<script>
export default {
  name: "Headeer",
};
</script>



<style scoped>
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
  padding-top: 170px;
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
  border-radius: 4px;
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
