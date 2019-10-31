import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.prototype.$msgbox = ElementUI.MessageBox;
Vue.prototype.$alert = ElementUI.MessageBox.alert;
Vue.prototype.$confirm = ElementUI.MessageBox.confirm;
Vue.prototype.$prompt = ElementUI.MessageBox.prompt;
Vue.prototype.$message = ElementUI.Message;

Vue.config.productionTip = false;

Vue.use(ElementUI, {
  size: 'mini',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
