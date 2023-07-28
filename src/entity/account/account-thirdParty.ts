import { BasePo } from '../../entity/common/base'

export interface AccountThirdParty extends BasePo {
	//第三方账户openId
	appOpenId: string
	//第三方账户类型（qq/dingTalk/weChat等
	appType: string
	//第三方账户用户Id
	appUserId: string
	//第三方账户名称
	appUserName: string
	//用户Id
	fkUserId: string
}
