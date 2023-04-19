export interface ICardPlan {
	id: string
	services: number | string
	categories: number | string
	employees: number | string
	offices: number | string
	price: number
	isFree: boolean
	isActive: boolean
	discount: number | null
	subTitle: string
	title: string
	type: "Month" | "Year"
	reviewsPage: boolean
	accountingPage: boolean
	activityMapPage: boolean
	customerSupport: boolean
	statisticsPage: boolean
	isLink?: boolean
	isChangePlan?: boolean
}

export type IPlan = Omit<ICardPlan, "price"> & {
	pricePerMonth: number
	pricePerYear: number
}