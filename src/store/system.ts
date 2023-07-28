import { acceptHMRUpdate, defineStore } from 'pinia'

interface RequestStore {
	//登录令牌
	token: string
}
const STORE_KEY = 'system-store'
export const useSystemStore = defineStore(STORE_KEY, {
	state: () =>
		<RequestStore>{
			token: ''
		},
	getters: {
		isLogin: state => !!state.token // !!强制转换为布尔类型
	},
	actions: {
		setToken(token: string) {
			this.$patch({ token })
		}
	},
	//数据缓存
	persist: {
		enabled: true,
		strategies: [
			{
				key: STORE_KEY,
				storage: localStorage
			}
		]
	}
})
//热更新
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useSystemStore, import.meta.hot))
}
