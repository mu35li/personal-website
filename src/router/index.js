import HomeView from '../views/HomeView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import DatenschutzView from '../views/DatenschutzView.vue'

export default [
  { path: '/', name: 'home', component: HomeView },
  { path: '/impressum', name: 'impressum', component: ImpressumView },
  { path: '/datenschutz', name: 'datenschutz', component: DatenschutzView },
]
