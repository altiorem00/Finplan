import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vuelidate from "vuelidate";
import VueMeta from "vue-meta";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import titlePlugin from "@/utils/title.plugin";
import currencyFilter from "@/filters/currency.filter";
import localizeFilter from "@/filters/localize.filter";
import tooltipDirective from "@/directives/tooltip.directive";

import Loader from "@/components/app/Loader";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.filter("date", dateFilter);
Vue.filter("localize", localizeFilter);
Vue.filter("currency", currencyFilter);
Vue.directive("tooltip", tooltipDirective);
Vue.component("Loader", Loader);

firebase.initializeApp({
  apiKey: "AIzaSyAJ7zeJzd_yrTzCkVH00KgfDTenLzeUwtc",
  authDomain: "vue-crm-941f2.firebaseapp.com",
  databaseURL:
    "https://vue-crm-941f2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-crm-941f2",
  storageBucket: "vue-crm-941f2.appspot.com",
  messagingSenderId: "603388644633",
  appId: "1:603388644633:web:2ee0772392d36a76580988",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
