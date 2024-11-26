import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import ApplicationForm from '../components/ApplicationForm.vue'; // Import the new component

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/apply', name: 'ApplicationForm', component: ApplicationForm }, // Add this route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;