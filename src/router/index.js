import { createRouter, createWebHistory } from 'vue-router';
import Home from '@theme-pages/Home.vue';
import About from '@theme-pages/About.vue';
import Articles from '@theme-pages/Articles.vue';
import Tutorials from '@theme-pages/Tutorials.vue';
import Contact from '@theme-pages/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/articles', name: 'Articles', component: Articles },
  { path: '/tutorials', name: 'Tutorials', component: Tutorials },
  { path: '/contact', name: 'Contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
