import { createApp } from 'vue'
import App from './App'
// import ProductItem from "./ProductItem"

const app = createApp(App)
// 全局注册
// app.component('product-item',ProductItem)
app.mount('#app')
