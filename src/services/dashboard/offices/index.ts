import { request } from "http/"
import { FormTypes } from "types/dashboard/offices"
import { FormTypes as EditFormTypes } from "types/dashboard/offices/edit"

export const getOffices = <T>(params: T) =>
	request.get("company/offices", { params })

export const addOffice = (data: FormTypes) =>
	request.post("company/offices", data)

export const getOfficeDetail = (id?: string) =>
	request.get(`company/offices/${id}`)

export const editOfficeDetail = (id?: string, data?: EditFormTypes) =>
	request.put(`company/office/${id}`, data)

export const changeOfficeToMain = (id?: string) =>
	request.patch(`company/office/${id}`)

export const addServiceToOffice = (officeId: string, serviceId: string) =>
	request.post(`core/company/office/${officeId}/company-service/${serviceId}`)