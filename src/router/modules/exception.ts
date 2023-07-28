export default [
	{
		path: '/:pathMatch(.*)*',
		redirect: '/404'
	},
	{
		name: '403',
		path: '/403',
		component: () => import('@/views/faile/403.vue')
	},
	{
		name: '404',
		path: '/404',
		component: () => import('@/views/faile/404.vue')
	},
	{
		name: '500',
		path: '/500',
		component: () => import('@/views/faile/500.vue')
	}
]
