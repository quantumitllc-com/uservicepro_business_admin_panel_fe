import { FormTypes } from "types/auth/sign-in"
import { request } from "http/"

export const signIn = (data: FormTypes) => request.post("login", data)
