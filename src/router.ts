import Vue from 'vue';
import Router from 'vue-router';
import Homepage from './views/Homepage.vue';
import About from './views/About.vue';
import Contactform from './views/Contact.vue';
import Philosophy from './views/Philosophy.vue';

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
        path: '/about/',
        name: 'About',
        component: About,
        // childrenでは、上位ID('/about')が一致したときにrouter-viewで描画される。
        children: [
            {
                path: 'philosophy',
                name: 'Philosophy',
                component: Philosophy,
            },
        ],
    },
    {
        path: '/contact',
        name: 'Contactform',
        component: Contactform,
    },
],
});
