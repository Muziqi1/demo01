/**
 * 状态管理
 **/
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import Antd from 'ant-design-vue'
import './assets/scss/global.scss'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import { getRouter } from './router'
import '@/assets/fonts/fonts.scss'

const app = createApp(App)
createApp(App)
	// 使用pinia代替vuex缓存
	.use(createPinia().use(piniaPluginPersist))
	.use(getRouter())
	.use(ElementPlus)
	.use(Antd)
	.mount('#app')
