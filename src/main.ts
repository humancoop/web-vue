import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './assets/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobeAfrica, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Thumbor from './components/Thumbor.vue'
import SectionTitle from './components/SectionTitle.vue'
import SectionTitleLong from './components/SectionTitleLong.vue'

library.add(faGlobeAfrica)
library.add(faFacebook)
library.add(faInstagram)
library.add(faTwitter)
library.add(faSpotify)
library.add(faEnvelope)

const app = createApp(App)
app.use(router)
app.component('Thumbor', Thumbor)
app.component('SectionTitle', SectionTitle)
app.component('SectionTitleLong', SectionTitleLong)
app.component("fa", FontAwesomeIcon)
app.mount('#app')
