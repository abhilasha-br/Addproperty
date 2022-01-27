import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Rating from 'primevue/rating';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Galleria from 'primevue/galleria';
import Steps from 'primevue/steps';
import Ripple from 'primevue/ripple'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea';
import RadioButton from 'primevue/radiobutton';
import Dropdown from 'primevue/dropdown';
import FileUpload from 'primevue/fileupload';
import Menu from 'primevue/menu';
import Calendar from 'primevue/calendar';
import Editor from 'primevue/editor';
import Fieldset from 'primevue/fieldset';
import Multiselect from 'primevue/multiselect';
import SelectButton from 'primevue/selectbutton';
import Divider from 'primevue/divider';
import Panel from 'primevue/panel';




Vue.config.productionTip = false

Vue.use(PrimeVue, {ripple: true});
Vue.directive('p-ripple', Ripple);
Vue.component('p-data-table', DataTable);

Vue.component('p-column', Column);
Vue.component('p-rating', Rating);
Vue.component('p-button', Button);
Vue.component('p-input-text', InputText);
Vue.component('p-galleria', Galleria);
Vue.component("p-steps", Steps);
Vue.component('p-textarea', Textarea);
Vue.component('p-checkbox', Checkbox);
Vue.component('p-card', Card);
Vue.component('p-radio-button', RadioButton);
Vue.component('p-dropdown', Dropdown);
Vue.component('p-file-upload', FileUpload);
Vue.component('p-menu', Menu);
Vue.component('p-calendar', Calendar);
Vue.component('p-editor', Editor);
Vue.component('p-fieldset', Fieldset);
Vue.component('p-multiselect', Multiselect);
Vue.component('p-select-button', SelectButton);
Vue.component('p-divider', Divider);
Vue.component('p-panel', Panel);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
