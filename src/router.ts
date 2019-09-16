import Vue from 'vue';
import Router from 'vue-router';
import Homepage from './views/Homepage.vue';
import About from './views/About.vue';
import Contactform from './views/Contact.vue';

Vue.use(Router);

export default new Router({
mode: 'history',
base: process.env.BASE_URL,
routes: [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/contact',
        name: 'Contactform',
        component: Contactform,
    },
],
});
