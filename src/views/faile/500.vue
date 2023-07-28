<template>
	<a-result status="500" title="500" sub-title="Sorry, the server is wrong.">
		<template #extra>
			<a-button type="primary">Back Home</a-button>
		</template>
	</a-result>
</template>

<script>
//v2
export default {
	data() {
		return {}
	},
	methods: {
		goHome() {
			this.get$router.push('/')
		}
	}
}
</script>
