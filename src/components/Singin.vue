<template>
<div class="sing-up">
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password"  placeholder="Password"><br>
    <button @click="signUp">Singn UP</button>
    <router-link tp="/legale">loginin</router-link>
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
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function (){
                    alert('Your account has been created !')
                },
                function (err){
                alert('Oops.' + err.message)
                }
            );
        }
    }

}

</script>
