import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {defineComponent} from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
// const MyComponent = defineComponent({
//     data() {
//       return { count: 1 }
//     },
//     methods: {
//       increment() {
//         this.count++
//       }
//     },
//     mounted() {
//         this.count++
//     },
//   })


  
//   console.log(MyComponent)

  

app.use(createPinia())
app.use(router)

app.mount('#app')

