import { BusinessPo } from '../../entity/common/base'

export interface RuralPartyActivities extends BusinessPo {
	//活动数量
	activitiesNumber: number
	//活动参与率%
	activitiesRatio: number
	//农村Id
	fkRuralId: string
	//农村名称
	rfRuralName: string
	//月份
	statisticsMonth: string
}
