import { RuralList } from './rural-list'

export interface RuralActivityVo extends RuralList {
	list: RuralList[]
}
export interface RuralActivity {
	endRow: number
	hasNextPage: boolean
	hasPreviousPage: boolean
	isFirstPage: boolean
	isLastPage: boolean
	navigateFirstPage: number
	navigateLastPage: number
	navigatePages: number
	navigatepageNums: []
	nextPage: number
	pageNum: number
	pageSize: number
	pages: number
	prePage: number
	size: number
	startRow: number
	total: number
}
