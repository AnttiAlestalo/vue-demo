import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage'
import CustomerList from "@/components/CustomerList";
import Reports from "@/components/Reports";
import ReadCustomer from "@/components/ReadCustomer";
import EditCustomer from "@/components/EditCustomer";

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: HomePage,
    }, {
        path: '/customers',
        name: 'Customers',
        component: CustomerList,
    }, {
        path: '/customers/read/:id',
        name: 'ReadCustomer',
        component: ReadCustomer,
    }, {
        path: '/customers/edit/:id',
        name: 'EditCustomer',
        component: EditCustomer,
    }, {
        path: '/reports',
        name: 'Reports',
        component: Reports,
    }]
})