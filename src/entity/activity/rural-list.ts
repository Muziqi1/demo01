import { BusinessPo } from '../common/base'

export interface RuralList extends BusinessPo {
	activitiesNumber: number
	activitiesRatio: number
	fkRuralId: string
	rfRuralName: string
	statisticsMonth: string
	updateUserName: string
}
