import { io } from "socket.io-client"

import { getTokens } from "./getTokens"

export const getSocket = () => {
	const tokens = getTokens()

	const socket = io("https://gateway.uservicepro.com", {
		extraHeaders: {
			Authorization: `Bearer ${tokens.accessToken}`,
		},
		transports: ["polling"], // Use HTTP long-polling instead of WebSocket
		autoConnect: false,

	})

	// if(!socket) {
	// 	throw new Error("Socket not initialized")
	// }

	return socket
}
