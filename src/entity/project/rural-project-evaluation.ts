import { BusinessPo } from '../common/base'

export interface RuralProjectEvaluation extends BusinessPo {
	//指标分数
	criteriaScore: number
	//测评分
	evaluationScore: number
	//审批记录id
	fkApprovalId: string
	//农村id
	fkRuralId: string
	//建设标准类型id（一级指标id）
	fkTypeId: string
	//农村名称
	rfRuralName: string
	//年份
	statisticsYear: number
	//建设标准类型名称（一级指标名称）
	typeName: string
}
