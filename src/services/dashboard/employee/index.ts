import { FormTypes } from "types/dashboard/employee"
import { request } from "http/"
import axios from "axios"
import { getTokens } from "utils/getTokens"

export const addEmployee = (data: FormTypes) =>
	request.post("company/employees/register", data)

export const getEmployeeList = <T>(params: T) =>
	request("company/employees", {
		params,
	})

export const getLocationList = () => request("company/offices")

export const sendFile = (file: any) =>
	request("files", {
		method: "POST",
		data: file,
	})
