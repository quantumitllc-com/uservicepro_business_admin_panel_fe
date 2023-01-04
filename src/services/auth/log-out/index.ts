import { request } from "http/"

export const logOut = () => request.post("logout")
