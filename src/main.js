import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { TroisJSVuePlugin } from 'troisjs';
import App from './App.vue'
import router from './router'
import components from "@/components/UI"
import './styles/UI.scss'
import './styles/media.scss'


const app = createApp(App)

components.forEach(component => {
	app.component(component.name, component)
});

app.use(createPinia())
app.use(router)
app.use(TroisJSVuePlugin)

app.mount('#app')
