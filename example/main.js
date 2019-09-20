import Vue from 'vue'
import App from './App.vue'

import PlainLoading from 'plain-loading'

Vue.config.productionTip = false
Vue.use(PlainLoading)

new Vue({
    render: h => h(App),
}).$mount('#app')
