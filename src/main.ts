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
import TextInput from './components/TextInput.vue'
import AreaInput from './components/AreaInput.vue'
import ToggleInput from './components/ToggleInput.vue'
import NumberInput from './components/NumberInput.vue'
import AmountInput from './components/AmountInput.vue'
import AmountSquare from './components/AmountSquare.vue'
import TaxCalculator from './components/TaxCalculator.vue'
import DateInput from './components/DateInput.vue'
import TelInput from './components/TelInput.vue'
import EmailInput from './components/EmailInput.vue'
import SelectInput from './components/SelectInput.vue'
import SubmitButton from './components/SubmitButton.vue'
import StyledButton from './components/StyledButton.vue'
import StyledLink from './components/StyledLink.vue'
import StyledRouteLink from './components/StyledRouteLink.vue'
import StyledCheckbox from './components/StyledCheckbox.vue'
import FormRow from './components/FormRow.vue'
import FormField from './components/FormField.vue'
import CoverImage from './components/CoverImage.vue'
import SectionTitleLong from './components/SectionTitleLong.vue'
import DonacionForm from './views/Donacion/components/DonacionForm.vue'
import SocioForm from './views/Socio/components/SocioForm.vue'
import VoluntarioForm from './views/Voluntario/components/VoluntarioForm.vue'

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
app.component('TextInput', TextInput)
app.component('AreaInput', AreaInput)
app.component('NumberInput', NumberInput)
app.component('AmountInput', AmountInput)
app.component('AmountSquare', AmountSquare)
app.component('TaxCalculator', TaxCalculator)
app.component('DateInput', DateInput)
app.component('ToggleInput', ToggleInput)
app.component('TelInput', TelInput)
app.component('EmailInput', EmailInput)
app.component('SelectInput', SelectInput)
app.component('SubmitButton', SubmitButton)
app.component('StyledButton', StyledButton)
app.component('StyledLink', StyledLink)
app.component('StyledRouteLink', StyledRouteLink)
app.component('StyledCheckbox', StyledCheckbox)
app.component('FormRow', FormRow)
app.component('FormField', FormField)
app.component('CoverImage', CoverImage)
app.component('DonacionForm', DonacionForm)
app.component('SocioForm', SocioForm)
app.component('VoluntarioForm', VoluntarioForm)
app.component('StyledButton', StyledButton)
app.component("fa", FontAwesomeIcon)
app.mount('#app')
