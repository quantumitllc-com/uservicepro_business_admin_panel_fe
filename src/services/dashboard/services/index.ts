import { request } from "http/"

export const getServices = () => request("core/company/company-services")

export const deleteService = (companyServiceId: string) =>
	request.delete(`core/company/company-service/${companyServiceId}`)
