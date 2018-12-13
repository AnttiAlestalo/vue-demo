import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueI18n from 'vue-i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faArrowUp, faCog} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VuejsDialog from 'vuejs-dialog';
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import Popover  from 'vue-js-popover';

Vue.use(VueI18n);
Vue.use(Popover);
Vue.use(VuejsDialog);
library.add(faArrowDown, faArrowUp, faCog);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

const messages = {
    en: {
        lang: {
            home: 'Home',
            customers: 'Customers',
            reports: 'Reports',
            custbycountry: 'Customers by country',
            custbygender: 'Customers by gender',
            name: 'Name',
            email: 'Email',
            phone: 'Phone number',
            country: 'Country',
            addnew: 'Add new',
            customer: 'Customer',
            edit: 'Edit',
            firstname: 'First name',
            lastname: 'Last name',
            gender: 'Gender',
            company: 'Company',
            address: 'Street address',
            postcode: 'Post code',
            city: 'City',
            lastcontacted: 'Last contacted',
            customerid: 'Customer id',
            additionalinfo: 'Additinal info',
            save: 'Save',
            delete: 'Delete',
            cancel: 'Cancel',
        }
    },
    fi: {
        lang: {
            home: 'Etusivu',
            customers: 'Asiakkaat',
            reports: 'Raportit',
            custbycountry: 'Asiakkaat maittain',
            custbygender: 'Sukupuolen mukaan',
            name: 'Nimi',
            email: 'Sähköposti osoite',
            phone: 'Puhelinnumero',
            country: 'Maa',
            addnew: 'Lisää uusi',
            customer: 'Asiakas',
            edit: 'Muokkaa',
            firstname: 'Etunimi',
            lastname: 'Sukunimi',
            gender: 'Sukupuoli',
            company: 'Yritys',
            address: 'Katuosoite',
            postcode: 'Postinumero',
            city: 'Kaupunki',
            lastcontacted: 'Edellinen yhteydenotto',
            customerid: 'Asiakasnumero',
            additionalinfo: 'Lisätiedot',
            save: 'Tallenna',
            delete: 'Poista',
            cancel: 'Takaisin',
        }
    }
};

const i18n = new VueI18n({
    locale: 'en',
    messages,
});

new Vue({
    i18n,
    render: h => h(App),
    router,
}).$mount('#app');
