<template>
  <div class="login">
      <h3>Sign in</h3>
      <input type="text" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button v-on:click='signIn'>Log In</button>
      <p>You don't have an account? You can <router-link to="/sign-up">create one</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: "login",
  data: function() {
      return {
          email: '',
          password: ''
      }
  },
  methods: {
    signIn: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.$router.replace('hello')
                },
                (err) => {
                    alert('Oops. ' + err.message)
                }
        );
    }
  }
}
</script>

<style scoped>
    .login {
        margin-top: 40px;
    }
    input {
        display: block;
        margin: 10px auto;
        width: 200px;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid #35495E;
        color: #35495E;
        background: #41B883;
    }
    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
        padding: 5px;
        border-radius: 15px;
        border: 1px solid #35495E;
        color: #35495E;
        background: #41B883;
    }
    p {
        margin-top: 40px;
        font-size: 13px;
    }
    p a {
        text-decoration: underline;
        cursor: pointer;
        color: #41B883;
    }

</style>
