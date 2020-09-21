import { createRouter, createWebHistory } from 'vue-router'

import CoachDetails from './pages/coaches/CoachDetails.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegister from './pages/coaches/CoachRegister.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' }, // redirect main to /coaches
    { path: '/coaches', component: CoachesList }, // landing page
    { path: '/coaches/:id', component: CoachDetails, // See specific coach page
      children: [
       { path: 'contact', component: ContactCoach } // /coaches/:id/contact  --- contact specific coach
      ] },
    { path: '/register', component: CoachRegister }, // Coach sign up
    { path: '/requests', component: RequestsReceived }, // See user's request to coaches
    { path: '/:notFound(.*)', component: NotFound }, // Page not found redirect
  ]
})

export default router