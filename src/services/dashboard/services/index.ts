import { request } from "http/"
import { AddFormTypes, EditFormTypes } from "types/dashboard/services"

export const getServices = () => request("core/company/company-services")

export const deleteService = (companyServiceId: string) =>
	request.delete(`core/company/company-service/${companyServiceId}`)

export const editService = (data: EditFormTypes, id: string) =>
	request.put(`core/company/company-service/${id}`, data)

export const getCategories = () => request("core/company/categories")

export const getCategoryToService = (id: string) =>
	request(`core/company/category/${id}/services`)

export const addServiceToCompany = (data: AddFormTypes, id: string) =>
	request.post(`core/company/service/${id}`, data)

export const getOfficeService = (officeId?: string) =>
	request(`core/company/office/${officeId}/services`)
