import { GetRequestModel, QueryType } from '../http/request-model'
import { RuralIndex } from '../entity/ruralIndex/rural-index'
import { RuralCollectiveEconomy } from '../entity/ruralIndex/rural-collective-economy'
import { RuralPartyActivities } from '../entity/ruralIndex/rural-party-activities'
import { ProjectEvaluationRanking } from '../entity/ranking/project-evaluation-ranking'
import { RuralDefiled } from '../entity/defiled/rural-defiled'
import { RuralProjectEvaluation } from '../entity/project/rural-project-evaluation'

const prefix = 'ruralIndex'
export default {
	getRuralPartyBranchPersonnelDistributeByFkRuralId: (query: QueryType) =>
		new GetRequestModel<RuralIndex[]>(`${prefix}/getRuralPartyBranchPersonnelDistributeByFkRuralId?fkRuralId=${query}`).request(),
	getRuralCollectiveEconomyByFkRuralId: (query: QueryType) =>
		new GetRequestModel<RuralCollectiveEconomy[]>(`${prefix}/getRuralCollectiveEconomyByFkRuralId?fkRuralId=${query}`).request(),
	getRuralPartyActivitiesByFkRuralId: (query: QueryType) =>
		new GetRequestModel<RuralPartyActivities[]>(`${prefix}/getRuralPartyActivitiesByFkRuralId?fkRuralId=${query}`).request(),
	getProjectEvaluationRakingByFkRuralId: (query: QueryType) =>
		new GetRequestModel<ProjectEvaluationRanking[]>(`${prefix}/getProjectEvaluationRakingByFkRuralId?fkRuralId=${query}`).request(),
	getRuralDefiledIndexByFkRuralId: (query: QueryType) =>
		new GetRequestModel<RuralDefiled>(`${prefix}/getRuralDefiledIndexByFkRuralId?fkRuralId=${query}`).request(),
	getRuralProjectEvaluationByFkRuralId: (query: QueryType) =>
		new GetRequestModel<RuralProjectEvaluation[]>(`${prefix}/getRuralProjectEvaluationByFkRuralId?fkRuralId=${query}`).request()
}
