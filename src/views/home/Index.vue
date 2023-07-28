<template>
	<div>
		<screen-adapter>
			<div class="home">
				<!-- 顶部-->
				<div class="top-box">
					<!--顶部左侧-->
					<div class="t-left">
						<span class="t-left-title">百千万工程数据可视化驾驶舱</span>
						<span class="t-left-subtext">王店镇 南梅村</span>
					</div>
					<!--顶部右侧-->
					<div class="t-right">
						<span class="datetime">{{ currDateTime }}</span>
						<img src="@/assets/images/go-system.png" alt="" />
						<span class="go-system">
							<span>进入后台</span>
						</span>
					</div>
				</div>
				<!-- 左侧-->
				<div class="left-box">
					<div class="left-1">
						<div class="img-box">
							<a-carousel autoplay :dots="false">
								<div v-for="(item, index) in photos" :key="'image' + index">
									<img :src="item" alt="" />
								</div>
							</a-carousel>
						</div>
						<div class="type-box">
							<img src="@/assets/images/left-right-1.png" alt="" />
							<img src="@/assets/images/left-right-2.png" alt="" />
							<img src="@/assets/images/left-right-3.png" alt="" />
						</div>
					</div>
					<div class="left-2">
						<div class="left-2-item">
							<div class="value">{{ ruralInfo?.committeeManNumber }}/{{ ruralInfo?.committeeWomanNumber }}</div>
							<div class="text">班子/后备</div>
						</div>
						<div class="left-2-item">
							<div class="value">{{ ruralInfo?.populationNumber }}</div>
							<div class="text">总人数</div>
						</div>
						<div class="left-2-item">
							<div class="value">{{ ruralInfo?.floatingPopulationNumber }}</div>
							<div class="text">流动人口</div>
						</div>
					</div>
					<div class="common-title">党组织情况</div>
					<div class="echarts-box">
						<Echarts v-if="mulPieOpt" :key="mulPieOpt" :id="'mulPie'" :width="'100%'" :height="'100%'" :options="mulPieOpt" />
					</div>
					<div class="tab-box">
						<ul>
							<li v-for="(item, index) in tabList" :key="item.typeName" :class="{ active: currTabIndex === index }" @click="onTabChange(index)">
								<img :src="item.icon" alt="" />
								<span>{{ item.typeName }}</span>
							</li>
						</ul>
					</div>
					<div class="echarts-box2">
						<Echarts v-if="Object.values(panelOptions).length > 0" :id="'panel'" :width="'100%'" :options="panelOptions" :height="'100%'" />
					</div>
				</div>
				<!-- 右侧-->
				<div class="right-box">
					<div class="common-title">连心服务</div>
					<div class="box1">
						<div class="box-1-1">
							<div class="text">微走访</div>
							<img class="line" src="@/assets/images/222@2x.png" alt="" />
							<img class="up" src="@/assets/images/up.png" alt="" />
							<div class="percent">{{ service?.visitRatio }}%</div>
							<div class="value">{{ service?.visitNumber }}条</div>
						</div>
						<div class="box-1-2">
							<div class="text">微力量</div>
							<img class="line" src="@/assets/images/222@2x.png" alt="" />
							<img class="up" src="@/assets/images/up.png" alt="" />
							<div class="percent">{{ service?.screeningRatio }}%</div>
							<div class="value">{{ service?.screeningNumber }}条</div>
						</div>
						<div class="box-1-3">
							<div class="text">微民情</div>
							<img class="line" src="@/assets/images/222@2x.png" alt="" />
							<img class="down" src="@/assets/images/up.png" alt="" />
							<div class="percent">{{ service?.securityRatio }}%</div>
							<div class="value">{{ service?.securityNumber }}条</div>
						</div>
						<div class="box-1-4">
							<div class="text">微办事</div>
							<img class="line" src="@/assets/images/222@2x.png" alt="" />
							<img class="up" src="@/assets/images/up.png" alt="" />
							<div class="percent">{{ service?.researchRatio }}%</div>
							<div class="value">{{ service?.researchNumber }}条</div>
						</div>
						<div class="echarts-box">
							<div class="text">群众满意率</div>
							<Echarts v-if="barOptions1" :key="barOptions1" :id="'bar5'" :width="'100%'" :options="barOptions1" :height="'100%'" />
						</div>
					</div>
					<div class="common-title">集体经济</div>
					<div class="echarts-box">
						<Echarts v-if="barOpt" :key="barOpt" :id="'bar'" :width="'100%'" :height="'100%'" :options="barOpt" />
					</div>
					<div class="common-title">党组织活动</div>
					<div class="echarts-box2">
						<Echarts v-if="lineOpt" :key="lineOpt" :id="'line'" :width="'100%'" :height="'100%'" :options="lineOpt" />
					</div>
				</div>
				<!-- 底部-->
				<div class="bottom-box">
					<div class="botton1">
						<div>
							<span>32</span>
							<span>荣誉分</span>
						</div>
						<div>
							<span>92</span>
							<span>总分</span>
						</div>
						<div>强基指数</div>
					</div>
					<p />
					<div class="bottom2">
						<div class="l-bottom">
							<div v-for="(item, index) in botList" :key="item">
								<div>{{ item.text }}</div>
								<div>
									<span>{{ item.score1 }}</span>
									<span>得分</span>
									<span>{{ item.score2 }}</span>
									<span>标准得分</span>
								</div>
								<div class="echarts-box">
									<Echarts :id="'load' + index" :width="'100%'" :height="'100%'" :options="initData3(index)" />
								</div>
							</div>
						</div>
						<div class="r-bottom">
							<div class="t-box">
								<div>1</div>
								<div>镇排名</div>
							</div>
							<div class="b-box">
								<div>3</div>
								<div>区排名</div>
							</div>
						</div>
					</div>
				</div>
				<!-- map-->
				<echarts-map />
			</div>
		</screen-adapter>
	</div>
</template>

<script lang="ts" setup>
import ScreenAdapter from '@/components/ScreenAdapter.vue'
import { onMounted, ref, toRaw } from 'vue'
import { formatByDate } from '../../utils/datetime-util'
import { COUNTRY_WEEK } from '../../enum/date'
import Echarts from '@/components/Echarts.vue'
import { setBarOpt, setLineOpt, setPanelOption, setMulPieOpt, setBarOptions1, setProgressOpt } from './options'
import tabIcon1 from '../../assets/images/xueli.png'
import tabIcon2 from '../../assets/images/gender.png'
import tabIcon3 from '../../assets/images/age.png'
import tabIcon4 from '../../assets/images/profession.png'
import tabIcon5 from '../../assets/images/dangling.png'
import tabIcon6 from '../../assets/images/develop.png'
import EchartsMap from '../../components/EchartsMap.vue'
import requestMethod from '../../api/login'
import ruralInfoRequest from '../../api/ruralInfo'
import ruralIndexRequest from '../../api/ruralIndex'
import { useUserStore } from '../../store/user'
import { useSystemStore } from '../../store/system'
import { messageMethod } from '../../utils/message-util'
import { RuralInfo } from '../../entity/ruralInfo/rural-info'
import { BaseUtil } from '../../utils/base-util'
import { RuralIndex } from '../../entity/ruralIndex/rural-index'
import { RuralDefiled } from '../../entity/defiled/rural-defiled'

//获取当前日期时间
const currDateTime = ref('')
//时间定时器
const currTimeInte = ref()
//轮播图片数组
const photos = ref<string[]>([])
//党组织情况分类options
const panelOptions = ref({})
//党组织情况options
let mulPieOpt = ref({})
let barOpt = ref({})
let lineOpt = ref({})
let progressOpt = ref()
let barOptions1 = ref({})

const initData3 = (index: number) => {
	progressOpt.value = setProgressOpt(toRaw(botList.value), index)
	return progressOpt.value
}

//当前选中tab下标
const currTabIndex = ref(0)
//tab数据
const tabList = ref<RuralIndex[]>([])
const service = ref<RuralDefiled>()
//bottom数据
let botList = ref<{ text: string; score1: number; score2: number }[]>([])
//data
const data = ref<object>([
	{
		number: 1,
		rank: '镇排名'
	},
	{
		number: 3,
		rank: '区排名'
	}
])
let requestId = 0
//动画事件
const requestAnimation = (angle: number) => {
	cancelAnimationFrame(requestId)
	angle += 1
	panelOptions.value = setPanelOption(angle)
	requestId = requestAnimationFrame(() => {
		requestAnimation(angle)
	})
}
const loginParams = {
	userAccount: 'admin',
	password: '111111'
}
//获取星期
onMounted(async () => {
	const week = COUNTRY_WEEK.CN[formatByDate(new Date(), 'yyyy年MM月dd日 HH:mm:ss').week]
	currTimeInte.value = setInterval(() => {
		let datetime = formatByDate(new Date(), 'yyyy年MM月dd日 HH:mm:ss').text
		currDateTime.value = datetime + week
	}, 1000)
	await getPanel()
	await login()
	await getRuralInfo()
	await getRuralIndex()
	await getRuralCollectiveEconomy()
	await getRuralPartyActivities()
	await getProjectEvaluationRaking()
	await getRuralDefiled()
	await getRuralProjectEvaluation()
})
//使用系统存储
const systemStore = useSystemStore()
//使用用户信息存储
const userStore = useUserStore()
const fkRuralId = ref<string | undefined>('')
//农村详情信息
const ruralInfo = ref<RuralInfo>()

//登录请求
const login = async () => {
	await requestMethod.login(loginParams).then(({ data }) => {
		// console.log(data)
		//设置系统信息存储
		systemStore.setToken(data.authToken)
		//设置用户信息存储
		messageMethod.success('登录成功!')
	})
}
//农村id
const ruralInfoParams = {
	pageNum: 1,
	pageSize: 10,
	rfRuralName: '测试村'
}
const getRuralInfo = async () => {
	await ruralInfoRequest.page({ pageNum: 1, pageSize: 10, rfRuralName: '测试村' }).then(({ data }) => {
		// console.log(data.list[0])
		ruralInfo.value = data.list[0]
		fkRuralId.value = ruralInfo.value?.fkRuralId
		const photosList: string[] =
			ruralInfo.value?.groupPhoto === ''
				? ruralInfo.value?.centerPhoto.split(',')
				: ruralInfo.value?.groupPhoto.split(',').concat(ruralInfo.value?.centerPhoto.split(','))
		photos.value = photosList.map(item => BaseUtil.getUploadPath(item))
	})
}
// 获取党员分布情况
const getRuralIndex = async () => {
	await ruralIndexRequest.getRuralPartyBranchPersonnelDistributeByFkRuralId(fkRuralId.value).then(({ data }) => {
		// console.log(data)
		const icons = [tabIcon1, tabIcon4, tabIcon3, tabIcon5, tabIcon2, tabIcon6]
		tabList.value = data
		tabList.value.forEach((item, index) => {
			item.icon = icons[index]
		})
		const chartsData = tabList.value[currTabIndex.value].distributeList.map(item => {
			return {
				name: item.distributionIntervalName,
				value: item.distributionNumber
			}
		})
		// console.log(chartsData)
		mulPieOpt.value = setMulPieOpt(chartsData)
	})
}

//根据农村id查询发展指数（村集体经济）
const getRuralCollectiveEconomy = async () => {
	await ruralIndexRequest.getRuralCollectiveEconomyByFkRuralId(fkRuralId.value).then(({ data }) => {
		const statisticsYear = data.map(item => item.statisticsYear)
		const operatingIncome = data.map(item => item.operatingIncome)
		const operatingAverageIncome = data.map(item => item.operatingAverageIncome)
		const recurringIncome = data.map(item => item.recurringIncome)
		const recurringAverageIncome = data.map(item => item.recurringAverageIncome)
		barOpt.value = setBarOpt({
			xAxisData: statisticsYear,
			seriesData: [operatingIncome, operatingAverageIncome, recurringIncome, recurringAverageIncome]
		})
	})
}
//根据农村id查询堡垒指数（党员活动
const getRuralPartyActivities = async () => {
	await ruralIndexRequest.getRuralPartyActivitiesByFkRuralId(fkRuralId.value).then(({ data }) => {
		// console.log(data)
		const activitiesNumber = data.map(item => item.activitiesNumber)
		const activitiesRatio = data.map(item => item.activitiesRatio)
		const statisticsMonth = data.map(item => item.statisticsMonth.substring(5))
		lineOpt.value = setLineOpt({
			xAxisData: statisticsMonth,
			seriesData: [activitiesNumber, activitiesRatio]
		})
	})
}
const getRuralProjectEvaluation = async () => {
	await ruralIndexRequest.getRuralProjectEvaluationByFkRuralId(fkRuralId.value).then(({ data }) => {
		// console.log(data)
		data.map(item => {
			botList.value.push({
				text: item.typeName,
				score1: item.evaluationScore,
				score2: item.criteriaScore
			})
		})
	})
}
const getProjectEvaluationRaking = async () => {
	await ruralIndexRequest.getProjectEvaluationRakingByFkRuralId(fkRuralId.value).then(({ data }) => {
		console.log(data)
	})
}

//根据农村id查连心服务
const getRuralDefiled = async () => {
	await ruralIndexRequest.getRuralDefiledIndexByFkRuralId(fkRuralId.value).then(({ data }) => {
		console.log(data)
		service.value = data
		const satisfactionRatio = service.value.satisfactionRatio
		barOptions1.value = setBarOptions1({
			seriesData: satisfactionRatio
		})
	})
}
function onTabChange(index: number) {
	currTabIndex.value = index
	if (currTabIndex.value != undefined) {
		const chartsData = tabList.value[currTabIndex.value].distributeList.map(item => {
			return {
				name: item.distributionIntervalName,
				value: item.distributionNumber
			}
		})
		mulPieOpt.value = setMulPieOpt(chartsData)
	}
}

function getPanel() {
	panelOptions.value = setPanelOption(0)
	requestAnimation(0)
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
$boxBgColor: rgba(0, 0, 0, 0.08);
$valueColors: #43b9fe, #f8af3c, #51ffc1;
.common-title {
	@include wh(228px, 52px);
	background: url('@/assets/images/t_bg.png') no-repeat;
	background-size: 100% 100%;
	text-align: center;
	line-height: 52px;
	@include fontmixin(24px, 400, #c7e6ff);
	letter-spacing: 2px;
}
.home {
	@include wh(100%, 100%);
	background: url('@/assets/images/bg.png') no-repeat;
	background-size: 100%, 100%;
	color: #fff;
	.top-box {
		position: absolute;
		width: 100%;
		@include flexmixin(space-between, center);
		padding: 43px 23px 24px 53px;
		.t-left {
			/*border: 1px solid red;*/
			.t-left-title {
				@include fontmixin(48px, 700);
				margin-right: 22px;
				letter-spacing: 6px;
			}
			.t-left-subtext {
				@include fontmixin(28px, 700);
				letter-spacing: 2px;
			}
		}
		.t-right {
			//border: 1px solid red;
			display: flex;
			align-items: center;
			.datetime {
				@include fontmixin(18px, 500);
			}
			img {
				@include wh(36px, 36px);
				margin: 0 7px 0 18px;
			}
			.go-system {
				@include fontmixin(21px, 700);
				&:after {
					content: '';
					display: inline-block;
					@include wh(10.1px, 11px);
					background: url('@/assets/images/arrow-right.png') no-repeat;
					background-size: 100% 100%;
					margin-left: 2px;
				}
			}
		}
	}
	.left-box,
	.right-box {
		@include wh(447px, 930px);
		//border: 1px solid red;
		position: absolute;
		top: 113px;
		background-color: $boxBgColor;
		padding: 12px 13px;
		z-index: 2;
	}
	.left-box {
		left: 37px;
		.left-1 {
			.img-box {
				@include wh(319px, 186px);
				vertical-align: middle;
				display: inline-block;
				border: 1px solid #cbedff;
				background-color: rgba(0, 0, 0, 0.2);
				padding: 12px 11px;
				:deep(.ant-carousel) {
					.slick-slide img {
						@include wh(297px, 162px);
					}
				}
			}
			.type-box {
				margin-left: 20px;
				display: inline-block;
				vertical-align: middle;
				& > img {
					@include wh(63px, 46px);
					margin-bottom: 19px;
					display: block;
				}
				img:last-child {
					margin-bottom: 0;
				}
			}
		}
		.left-2 {
			@include flexmixin(space-around, center);
			margin: 49px 0;
			@each $color in $valueColors {
				$index: index($valueColors, $color);
				div:nth-child(#{$index}) {
					.value {
						@include fontmixin(40px, 400, $color);
						font-family: DS-DIGF;
						letter-spacing: 4px;
						line-height: 40px;
					}
					.text {
						font-size: 14px;
					}
				}
			}
			/*.left-2-item:nth-child()*/
		}
		.echarts-box {
			@include wh(100%, 247px);
		}
		.tab-box {
			width: 100%;
			ul {
				margin: 0;
				padding: 0;
				text-align: center;
				& > li {
					margin-left: -1px;
				}
				& > li:first-child {
					margin-left: 0;
				}
				li {
					display: inline-block;
					border: 1px solid #42b9fe;
					cursor: pointer;
					padding: 6px 9px;
					img,
					span {
						vertical-align: middle;
					}
					img {
						margin-right: 2px;
					}
				}
				.active {
					background-color: #11d290;
					border: 1px solid #11d290;
					color: #fff;
				}
			}
		}
		.echarts-box2 {
			@include wh(100%, 260px);
		}
	}
	.right-box {
		right: 37px;
		.box1 {
			@include wh(447px, 300px);
			display: flex;
			flex-direction: column;
			align-items: center;
			.box-1-1 {
				@include wh(398px, 44px);
				display: flex;
				align-items: center;
				background-color: RGBA(23, 90, 146, 0.2);
				background-size: 100% 100%;
				margin-top: 16px;
				.text {
					@include fontmixin(16px, 500, #0b1d41);
					@include wh(72px, 26px);
					margin-left: 16px;
					background-color: #f1ac40;
					border-radius: 5px;
					text-align: center;
				}
				.line {
					margin-left: 13px;
				}
				.up {
					margin-left: 23px;
				}
				.percent {
					@include fontmixin(18px, 400, #3ad8d8);
					margin-left: 3px;
				}
				.value {
					@include fontmixin(19px, 500, #42b9fe);
					margin-left: 17px;
				}
			}
			.box-1-2 {
				@include wh(398px, 44px);
				display: flex;
				align-items: center;
				margin-top: 16px;
				.text {
					@include fontmixin(16px, 500, #0b1d41);
					@include wh(72px, 26px);
					margin-left: 16px;
					background-color: #45bdfe;
					text-align: center;
					border-radius: 5px;
				}
				.line {
					margin-left: 13px;
				}
				.up {
					margin-left: 23px;
				}
				.percent {
					@include fontmixin(18px, 400, #3ad8d8);
					margin-left: 3px;
				}
				.value {
					@include fontmixin(19px, 500, #42b9fe);
					margin-left: 17px;
				}
			}
			.box-1-3 {
				@include wh(398px, 44px);
				display: flex;
				align-items: center;
				background-color: RGBA(23, 90, 146, 0.2);
				background-size: 100% 100%;
				margin-top: 16px;
				.text {
					@include fontmixin(16px, 500, #0b1d41);
					@include wh(72px, 26px);
					margin-left: 16px;
					background-color: #f1ac40;
					text-align: center;
					border-radius: 5px;
				}
				.line {
					margin-left: 13px;
				}
				.down {
					margin-left: 23px;
				}
				.percent {
					@include fontmixin(18px, 400, #3ad8d8);
					margin-left: 3px;
				}
				.value {
					@include fontmixin(19px, 500, #42b9fe);
					margin-left: 17px;
				}
			}
			.box-1-4 {
				@include wh(398px, 44px);
				display: flex;
				align-items: center;
				background-size: 100% 100%;
				margin-top: 16px;
				.text {
					@include fontmixin(16px, 500, #0b1d41);
					@include wh(72px, 26px);
					margin-left: 16px;
					background-color: #45bdfe;
					text-align: center;
					border-radius: 5px;
				}
				.line {
					margin-left: 13px;
				}
				.up {
					margin-left: 23px;
				}
				.percent {
					@include fontmixin(18px, 400, #3ad8d8);
					margin-left: 3px;
				}
				.value {
					@include fontmixin(19px, 500, #42b9fe);
					margin-left: 17px;
				}
			}
			.echarts-box {
				margin-top: 16px;
				@include wh(398px, 80px);
				display: flex;
				align-items: center;
				.text {
					@include wh(150px, 30px);
					margin-top: -10px;
					@include fontmixin(16px, 700px, #fff);
				}
			}
		}
		.echarts-box {
			@include wh(100%, 255px);
		}
		.echarts-box2 {
			@include wh(100%, 224px);
		}
	}
	.bottom-box {
		@include wh(905px, 327px);
		position: absolute;
		top: 717px;
		left: 0;
		right: 0;
		margin: 0 auto;
		background-color: $boxBgColor;
		.botton1 {
			@include wh(905px, 81px);
			display: flex;
			div:nth-child(1) {
				@include wh(128px, 81px);
				margin-left: 20px;
				margin-top: 18px;
				span:nth-child(1) {
					@include fontmixin(35px, 400, #2bdaf2);
					font-family: DS-DIGF;
					padding-left: 15px;
				}
				span:nth-child(2) {
					@include fontmixin(13px, 800, #ffffff);
					margin-left: 10px;
				}
			}
			div:nth-child(2) {
				@include wh(128px, 81px);
				margin-left: 20px;
				margin-top: 18px;
				span:nth-child(1) {
					@include fontmixin(35px, 400, #2bdaf2);
					font-family: DS-DIGF;
					padding-left: 15px;
				}
				span:nth-child(2) {
					@include fontmixin(13px, 800, #ffffff);
					margin-left: 10px;
				}
			}
			div:nth-child(3) {
				@include fontmixin(24px, bold, #c7e6ff);
				margin-top: 18px;
				margin-left: 459px;
			}
		}
		p {
			border: 2px #a0d3ff solid;
			opacity: 0.2;
		}
		.bottom2 {
			@include wh(905px, 244px);
			display: flex;
			.l-bottom {
				@include wh(684px, 244px);
				display: grid;
				grid-template-rows: repeat(2, 80px);
				grid-template-columns: repeat(2, 319px);
				grid-gap: 46px 27px;
				margin-top: 20px;
				margin-left: 54px;
				div:nth-child(1) {
					@include fontmixin(14px, 500, #ffffff);
					margin-bottom: -4px;
				}
				div:nth-child(2) {
					span:nth-child(1) {
						@include fontmixin(30px, 400, #3eb4f7);
						font-family: DS-DIGF;
					}
					span:nth-child(2) {
						@include fontmixin(12px, 500, #c7e6ff);
						margin-left: 11px;
					}
					span:nth-child(3) {
						@include fontmixin(30px, 400, #f8af3c);
						font-family: DS-DIGF;
						margin-left: 41px;
					}
					span:nth-child(4) {
						@include fontmixin(12px, 500, #c7e6ff);
						margin-left: 11px;
					}
				}
				.echarts-box {
					@include wh(319px, 18px);
					background: url('@/assets/images/bar-bg.png') no-repeat;
				}
			}
			.r-bottom {
				@include wh(86.3px, 244px);
				display: grid;
				grid-template-rows: repeat(2, 120px);
				grid-gap: 4px;
				margin-left: 785px;
				position: absolute;
				.t-box {
					margin-top: 30px;
					background: url('@/assets/images/shui1.png') no-repeat;
					div:nth-child(1) {
						@include fontmixin(21px, bold, #fefefe);
						margin-left: 38px;
						margin-top: 17px;
					}
					div:nth-child(2) {
						@include fontmixin(13px, bold, #fefefe);
						margin-left: 24px;
						margin-top: -5px;
					}
				}
				.b-box {
					margin-top: 30px;
					background: url('@/assets/images/shui2.png') no-repeat;
					div:nth-child(1) {
						@include fontmixin(21px, bold, #fefefe);
						margin-left: 38px;
						margin-top: 17px;
					}
					div:nth-child(2) {
						@include fontmixin(13px, bold, #fefefe);
						margin-left: 24px;
						margin-top: -5px;
					}
				}
			}
		}
	}
}
</style>
