// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
Vue.use(require('vue-moment'));


Vue.config.productionTip = false
let app;
var config = {
    apiKey: "AIzaSyDfZPOvTb-dHf3gFKw-YNyH0NE90tonzEU",
    authDomain: "vue-firebase-project-419b3.firebaseapp.com",
    databaseURL: "https://vue-firebase-project-419b3.firebaseio.com",
    projectId: "vue-firebase-project-419b3",
    storageBucket: "vue-firebase-project-419b3.appspot.com",
    messagingSenderId: "274884994655"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
    if (!app) {
        app = new Vue({
            el: '#app',
            template: '<App/>',
            components: { App },
            router
        })
    }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
