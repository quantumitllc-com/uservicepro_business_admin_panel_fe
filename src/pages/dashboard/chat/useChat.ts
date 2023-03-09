import { useEffect, useState } from "react"
import { shallow } from "zustand/shallow"

import { useChatStore } from "store/chat"
import { IChatType } from "types/dashboard/chat"
import { getSocket } from "utils/getSocket"

export const useChat = () => {
	const socket = getSocket()
	const [isLoading, setIsLoading] = useState(true)
	const { chats, setChats } = useChatStore(
		(state) => ({
			chats: state.chats,
			setChats: state.setChats,
		}),
		shallow,
	)

	useEffect(() => {
		socket.on("chats", (chats: IChatType[]) => {
			if (Array.isArray(chats)) {
				setChats(chats)
			}
			setIsLoading(false)
		})

		return () => {
			socket.off("chats")
			// socket.close()
		}
	}, [])

	return {
		chats,
		isLoading,
	}
}
