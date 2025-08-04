import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Articles from '../pages/Articles.vue';
import Tutorials from '../pages/Tutorials.vue';
import Contact from '../pages/Contact.vue';

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
