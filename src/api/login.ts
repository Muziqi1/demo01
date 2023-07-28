import { AccountUserVo } from '../entity/account/account-user'
import { QueryType, PostRequestModel } from '../http/request-model'

const prefix = '/login'
export default {
	login: (query: QueryType) => new PostRequestModel<AccountUserVo>(prefix, query).request()
}
