import { createApp } from 'vue/dist/vue.esm-bundler'

const App = {
  template:'<h2>{{content}}</h2>',
  data() {
    return {
      content:"我是标题"
    }
  },
}
createApp(App).mount('#app')
