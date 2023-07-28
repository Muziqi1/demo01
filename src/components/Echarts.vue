<template>
	<div :ref="props.id" :id="props.id" :style="{ width: width, height: height }"></div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

type EchartsType = echarts.EChartsType
type EchartsOption = echarts.EChartsOption
const props = defineProps<{
	id: string
	width: string
	height: string
	options: object
}>()
//初始化Echarts
let myEcharts: EchartsType | null = null
onMounted(() => {
	const dom = document.getElementById(props.id) as HTMLElement
	if (myEcharts != null) {
		myEcharts.dispose()
	}
	if (dom) {
		myEcharts = echarts.init(dom)
		window.addEventListener('resize', () => {
			myEcharts?.resize()
		})
		if (props.options) {
			myEcharts?.setOption(props.options as EchartsOption)
		}
	}
})
onUnmounted(() => {
	//销毁Echarts
	myEcharts?.dispose()
})
</script>
<style lang="scss" scoped>
#container {
	width: 100%;
	height: 100%;
}
</style>
