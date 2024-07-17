import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineComponent } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

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
app.use(ElementPlus)
app.use(router)

app.mount('#app')

