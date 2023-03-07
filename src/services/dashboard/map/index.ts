import { request } from "http/"

export const getActivityMap = () => request("company/map")
export const getOrders = () => request("business/orders/new")
export const getStatistics = () => request("statistics/company")
