import { PostRequestModel, QueryType } from '../http/request-model'
import { PageModel } from '../http/result-model'
import { RuralInfo } from '../entity/ruralInfo/rural-info'

const prefix = '/ruralInfo'
export default {
	page: (query: QueryType) => new PostRequestModel<PageModel<RuralInfo>>(`${prefix}/page`, query).request()
}
