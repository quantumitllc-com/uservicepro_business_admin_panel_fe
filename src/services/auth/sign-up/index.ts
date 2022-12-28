import { FormTypes } from "types/auth/sign-up"
import { request } from "http/"

export const signUp = (data: FormTypes) => request.post("register", data)
