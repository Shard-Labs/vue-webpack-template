import Vue from 'vue';
import App from './App.vue';

// Style
import './styles/style.scss';
import './styles/index.css';

new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app');