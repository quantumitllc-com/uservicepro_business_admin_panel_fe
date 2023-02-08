import { request } from "http/"
import { FormTypes } from "types/dashboard/location"

export const getLocations = () => request.get("company/offices")

export const createLocation = (data: FormTypes) =>
	request.post("company/offices", data)
