import { FormTypes, EditFormTypes } from "types/dashboard/employee"
import { request } from "http/"

export const addEmployee = (data: FormTypes) =>
	request.post("company/employees/register", data)

export const getServicesById = (id?: string) =>
	request(`core/company/office/${id}/services`)

export const getEmployeeList = <T>(params: T) =>
	request("company/employees", {
		params,
	})

export const getEmployeeDetail = (id?: string) =>
	request(`company/employees/${id}`)

export const getLocationList = () => request("company/offices")

export const sendFile = (file: any) =>
	request("files", {
		method: "POST",
		data: file,
	})

export const editEmployee = (data: EditFormTypes, id?: string) =>
	request.put(`company/employees/${id}`, data)

export const editEmployeeStatus = <T>(data: T, id?: string) =>
	request.patch(`company/employees/${id}`, data)
