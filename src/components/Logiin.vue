<template>
 
<div class="login">
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="signIn">Connection</button>
</div>
</template>


<script>
import firebase from 'firebase';

export default {
    name:'Logiin',
    data() {
        return {
            email: '',
            password:''
        }
    },
 methods: {
        signIn: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
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
