import { BusinessPo } from '../../entity/common/base'

export interface RuralInfo extends BusinessPo {
	//服务中心图片
	centerPhoto: string
	//两委男班子数
	committeeManNumber: number
	//两委班子数
	committeeNumber: number
	//两委女班子数
	committeeWomanNumber: number
	//农村Id
	fkRuralId: string
	//流动人口数
	floatingPopulationNumber: number
	//网格数
	gridNumber: number
	//集体照
	groupPhoto: string
	//强基指数荣誉分
	honorPoints: number
	//户数
	householdsNumber: number
	//微网格数
	microGridNumber: number
	//党员活动平均参与率%
	partyActivitiesRatio: number
	//党员人数
	partyMemberNumber: number
	//总人口数
	populationNumber: number
	//户籍人口数
	registeredPopulationNumber: number
	//常住人口数
	residentsPopulationNumber: number
	//农村名称
	rfRuralName: string
	//党组织书记荣誉
	secretaryHonor: string
	//党组织书记姓名
	secretaryName: string
	//党组织书记照片
	secretaryPhoto: string
	//党组织书记标签
	secretaryTag: string
}
