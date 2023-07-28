<template>
	<a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
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
