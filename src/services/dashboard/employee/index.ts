import { FormTypes } from "types/dashboard/employee"
import { request } from "http/"

export const addEmployee = (data: FormTypes) =>
	request.post("company/employees/register", data)

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

export const editEmployee = (data: FormTypes) =>
	request.put("company/employees/register", data)
