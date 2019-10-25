import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import { MessageBox, Message } from 'element-ui';

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

import {
  Form,
  FormItem,
  Input,
  Button,
  Select,
  Option,
} from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
