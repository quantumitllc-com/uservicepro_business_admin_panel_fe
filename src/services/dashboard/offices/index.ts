import { request } from "http/"
import { FormTypes } from "types/dashboard/offices"

export const getOffices = <T>(params: T) =>
	request.get("company/offices", { params })

export const addOffice = (data: FormTypes) =>
	request.post("company/offices", data)
