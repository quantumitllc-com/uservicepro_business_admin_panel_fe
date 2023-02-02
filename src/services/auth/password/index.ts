import { FormEmailTypes, FormResetTypes } from "types/auth/password"
import { request } from "http/"

export const passwordEmail = (data: FormEmailTypes) =>
	request.post("password/request", data)

export const passwordReset = ({ password }: FormResetTypes, token: string) =>
	request.post(`/password/reset/${token}`, { password })
