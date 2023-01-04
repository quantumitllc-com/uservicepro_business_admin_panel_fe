import { FormTypes } from "types/pre-dashboard/business/details"
import { request } from "http/"

export const businessDetails = (data: FormTypes) =>
	request.post("company/pre-dashboard", data)
