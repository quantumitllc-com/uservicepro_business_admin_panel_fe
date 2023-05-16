import { request } from "http/"

export const getMessages = <T>(params: T) =>
	request.get("chat/api/messages", { params })
