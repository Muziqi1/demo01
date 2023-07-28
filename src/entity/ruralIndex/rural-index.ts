import { BusinessPo } from '../../entity/common/base'

export interface distributeInfo extends BusinessPo {
	//分布区间名称（数据字典）
	distributionIntervalName: string
	//分布数量
	distributionNumber: number
	// 分布区间Id（数据字典）
	fkDistributionIntervalId: string
	//农村Id
	fkRuralId: string
	//类型Id（数据字典）
	fkTypeId: string
	//党支部名称
	partyBranchName: string
	//农村名称
	rfRuralName: string
	//类型名称（数据字典）
	typeName: string
}
export interface RuralIndex {
	//农村党支部人员分布情况
	distributeList: distributeInfo[]
	//类型名称
	typeName: string
	//图标
	icon: string
}
