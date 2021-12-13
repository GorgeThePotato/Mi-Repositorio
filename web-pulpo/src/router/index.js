import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Groups from '../views/Groups.vue'
import Questions from '../views/Questions.vue'
import CreateGroup from '../views/CreateGroup.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import GroupViewPage from '../views/GroupViewPage.vue'
import Jobs from '../views/Jobs.vue'
import Terms from '../views/Terms.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Contact from '../views/Contact.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Settings from '../views/Settings.vue'
import Wallet from '../views/Wallet.vue'
import MyGroups from '../views/MyGroups.vue'
import SelectPlatform from '../views/SelectPlatform.vue'
import UpdateSlots from '../views/UpdateSlots.vue'
import UpdateCredentials from '../views/UpdateCredentials.vue'
import Referrals from '../views/Referrals.vue'
import UpdatePrice from '../views/UpdatePrice.vue'
import EmailSignup from '../views/EmailSignup.vue'


Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/dashboard', name: 'Groups', component: Groups},
  {path: '/faq', name: 'FAQ', component: Questions},
  {path: '/create-group', name: 'Create_group', component: CreateGroup},
  {path: '/select-platform', name: 'Select_platform', component: SelectPlatform},
  {path: '/update-slots/:slug', name: 'Update_slots', component: UpdateSlots},
  {path: '/update-price/:slug', name: 'Update_price', component: UpdatePrice},
  {path: '/update-credentials/:slug', name: 'Update_credentials', component: UpdateCredentials},
  {path: '/register', name: 'Register', component: Register},
  {path: '/email-signup', name: 'Email_signup', component: EmailSignup},
  {path: '/login', name: 'Login', component: Login},
  {path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword},
  {path: '/group/:id', name: 'Group_view', component: GroupViewPage},
  {path: '/jobs', name: 'Jobs', component: Jobs},
  {path: '/terms', name: 'Terms', component: Terms},
  {path: '/privacy-policy', name: 'Privacy_policy', component: PrivacyPolicy},
  {path: '/contact', name: 'Contact', component: Contact},
  {path: '/settings', name: 'Settings', component: Settings},
  {path: '/wallet', name: 'Wallet', component: Wallet},
  {path: '/my-groups', name: 'My_groups', component: MyGroups},
  {path: '/referrals', name: 'Referrals', component: Referrals},
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
