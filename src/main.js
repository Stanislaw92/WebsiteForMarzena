
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueSmoothScroll from 'vue3-smooth-scroll'

import './theme/styles.css'
const pinia = createPinia()

createApp(App).use(router).use(pinia).use(VueSmoothScroll).mixin({
    methods: {
        isInAViewPort(el, correct_height = 0) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.bottom + correct_height - ( rect.height / 2 ) <= (window.innerHeight || document.documentElement.clientHeight)
            );
        },
    }
  }).mount('#app')
