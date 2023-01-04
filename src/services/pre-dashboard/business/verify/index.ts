import { request } from "http/"

export const verifyByEmail = () => request.post("verify/email")
