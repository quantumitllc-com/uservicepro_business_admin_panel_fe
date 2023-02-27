import io from "socket.io-client"
import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { getTokens } from "utils/getTokens"
import { useChatStore } from "store/chat"
import { IChatType } from "../../../types/dashboard/chat"

export const useChat = () => {
	const tokens = getTokens()
	const { socket, setSocket, chats, setChats } = useChatStore(
		state => ({
			socket: state.socket,
			setSocket: state.setSocket,
			chats: state.chats,
			setChats: state.setChats
		})
	)

	const socketBaseURL = useQuery(["socket"],
		() => {
			return io("https://gateway.uservicepro.com", {
				extraHeaders: {
					Authorization: `Bearer ${tokens.accessToken}`
				},
				transports: ["polling"] // Use HTTP long-polling instead of WebSocket
			})
		},
		{
			onError: (error: any) => {
				toast.error(error)
			},
			onSuccess: data => {
				setSocket(data)
			}
		})


	const { isLoading } = useQuery(["chats"], () => {
		return socket.on("chats", (chats: IChatType[]) => {
			setChats(chats)
		})
	}, {
		enabled: !!socket,
		onError: (error: any) => {
			toast.error(error)
		},
	})

	return {
		isLoading,
		chats,
		socket
	}
}