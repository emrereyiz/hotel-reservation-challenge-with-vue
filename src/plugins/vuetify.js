import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import Vuelidate from 'vuelidate'
import VueTheMask from 'vue-the-mask'
Vue.use(Vuelidate)
Vue.use(Vuetify);
Vue.use(VueTheMask)

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
});
