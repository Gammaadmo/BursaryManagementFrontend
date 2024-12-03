import { createRouter, createWebHistory } from 'vue-router';

// Import your views
import LandingPageView from '../views/LandingPageView.vue'; // Landing page
import BursarListView from '../views/BursarListView.vue';
import BursarDashboardView from '../views/BursarDashboardView.vue';
import BursarProfileView from '../views/BursarProfileView.vue';
import BursarProfileEditView from '../views/BursarProfileEdit.vue'; // Adjusted import
import BursarApplicationsView from '../views/BursarApplications.vue'; // Adjusted import
import BursarLoginView from '../views/BursarLoginView.vue';

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPageView },
  { path: '/bursars', name: 'BursarList', component: BursarListView },
  { path: '/bursar/dashboard', name: 'BursarDashboard', component: BursarDashboardView },
  { path: '/bursar/profile', name: 'BursarProfile', component: BursarProfileView },
  { path: '/bursar/profile/edit', name: 'BursarProfileEdit', component: BursarProfileEditView },
  { path: '/bursar/applications', name: 'BursarApplications', component: BursarApplicationsView },
  { path: '/bursar/login', name: 'BursarLogin', component: BursarLoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
