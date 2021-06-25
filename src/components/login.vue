<template>
<iframe width="540" height="405" src="https://f88e18e5.sibforms.com/serve/MUIEALNWgrsPtMUmMTEgbSIbtqD9CHR1sIEEck2dSsy88oScLM8YWrnW9kP8UGPqwTjsTJkv4urvgG-ie1A61IE38nyM5QOLCW5moNrs8v_oE7tq1JjtcUAhkVrTK2YwbzqKA4TrxqUdSjzL28zK1kkMsukGxs2d52oQVhB3wVUbuf6j3QGvXv-MZol6ldXdIxp3d87jhC7zWT3E" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>


</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('default_service', 'template_vlj2a4e', e.target, 'user_v1mytDfMzcYesOlmdPxXg')
          .then((result) => {
            alert('SUCCESS!', result.status, result.text);
          }, (error) => {
            alert('FAILED...', error);
          });
    }
  }
}
</script>


<style scoped>

.champ{
  padding-top: 20px;
}

.newsletter{
  padding-top: 70px;
  padding-bottom: 70px;
}

img {
  width: 100%;
}

label {
  font-size: 15px;
  text-align: left!important;

}

h1 {
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
}

h4 {
  font-weight: bold;
  color: #FECF98;
  text-transform: uppercase;
}



#login {
 width: 400px;
 border: 2px solid #CCCCCC;
 background-color: white;
 margin: auto;
 margin-top: 20px;
 padding: 20px;

}
#map{
 margin-left: 470px;
 margin-top: 20px;
}

</style>
