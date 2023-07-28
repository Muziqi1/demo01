import { BusinessPo } from '../common/base'

export interface RuralDefiled extends BusinessPo {
	//农村id
	fkRuralId: string
	//微调研（办事）数
	researchNumber: number
	//微排调研（办事）比率%
	researchRatio: number
	//农村名称
	rfRuralName: string
	//群众满意度%
	satisfactionRatio: number
	//微排查（力量）数
	screeningNumber: number
	//微排查（力量）同比率%
	screeningRatio: number
	//微安全（民情）数
	securityNumber: number
	//微安全比（民情）率%
	securityRatio: number
	//年份
	statisticsYear: number
	//微走访数
	visitNumber: number
	//微走访同比率%
	visitRatio: number
}
