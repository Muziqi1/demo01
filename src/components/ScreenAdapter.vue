<template>
	<div class="screen-adapter" :style="style">
		<slot />
	</div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, withDefaults } from 'vue'

interface ScreenAdapterState {
	width?: number
	height?: number
}
const props = withDefaults(defineProps<ScreenAdapterState>(), {
	width: 1920,
	height: 1080
})
const style = reactive({
	width: props.width + 'px',
	height: props.height + 'px',
	transform: 'scale(1) translate(-50%,-50%)'
})
/**
 * 每隔3秒获取屏幕大小计算缩放比例，从而进行屏幕的适配
 * 函数防抖：
 * 函数节流
 */
const Debounce = (fn: () => void, t: number): (() => void) => {
	const delay = t || 500
	let timer: NodeJS.Timeout | null
	return function () {
		if (timer) {
			clearTimeout()
		}
		timer = setTimeout(() => {
			timer = null
			fn()
		}, delay)
	}
}
const getScale = () => {
	const w = window.innerWidth / props.width
	const h = window.innerHeight / props.height
	return { w, h }
}
const setScale = () => {
	const w = getScale().w
	const h = getScale().h
	style.transform = 'scaleX(' + w + ') scaleY(' + h + ' ) translate(-50%, -50%)'
}
onMounted(() => {
	setScale()
	window.onresize = Debounce(setScale, 3000)
})
</script>
<style lang="scss" scoped>
.screen-adapter {
	position: absolute;
	left: 50%;
	top: 50%;
	transition: 0.3s;
	transform-origin: 0 0;
}
</style>
