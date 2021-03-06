// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import ui from './components'
import './scss/main.scss'
import storage from '@/util/storage'
import model from '@/util/model'

Vue.use(MuseUI)
Vue.use(ui)

Vue.config.productionTip = false

Vue.prototype.$storage = storage
Vue.prototype.$model = model

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
