import { io, Socket } from "socket.io-client"
import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import { isExpiredToken } from "../utils/isExpiredToken"
import { clearStorage } from "../utils/clearStorage"
import { refreshToken } from "../utils/refreshToken"

export const useSocket = () => {
	const tokens = isExpiredToken()
	const [socket, setSocket] = useState<Socket | null>(null)
	const navigate = useNavigate()

	useEffect(() => {
		if (!tokens.isExpiredAccess) {
			const newSocket = io("https://gateway.uservicepro.com", {
				extraHeaders: {
					Authorization: `Bearer ${tokens.accessToken}`,
				},
				path: "/chat/socket.io",
				transports: ["polling"], // Use HTTP long-polling instead of WebSocket
				autoConnect: false,
			})

			setSocket(newSocket)
		}

		if (tokens.isExpiredAccess) {
			;(async () => {
				await refreshToken()
			})()
		}

		if (tokens.isExpiredRefresh) {
			clearStorage()
			navigate("/sign-in")
		}

		return () => {
			socket?.close()
		}
	}, [
		setSocket,
		tokens.accessToken,
		tokens.isExpiredRefresh,
		tokens.isExpiredAccess,
	])

	return socket
}
