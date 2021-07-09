<template>
<div class="sing-up">
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password"  placeholder="Password"><br>
    <button @click="signUp">Inscription</button>
    <router-link tp="/legale">Connexion</router-link>
</div>
</template>


<script>
import firebase from 'firebase';

export default {
    name:'singin',
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods: {
        async signUp() {
           await firebase.auth().
           createUserWithEmailAndPassword(this.email, this.password)
           .then(async (response) => {
                if (response.user) {
                    await firebase.firestore().collection("users")
                        .doc(response.user.uid).catch(error => {
                            console.log(error).code;
                        })
                   }
                },
                function (err){
                alert('Oops.' + err.message)
                }
            );
        }
    }

}

</script>
