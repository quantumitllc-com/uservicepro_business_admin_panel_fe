import { useEffect } from "react"
import { shallow } from "zustand/shallow"
import { toast } from "react-toastify"
import { Pane } from "evergreen-ui"
import { useNavigate } from "react-router-dom"

import { IChatType } from "types/dashboard/chat"
import { useSocket } from "hooks/useSocket"
import { useChatStore } from "store/chat"
import { getTokens } from "utils/getTokens"

export const useHeader = () => {
	const navigate = useNavigate()
	const tokens = getTokens()
	const socket = useSocket()
	const { setChats, totalCount, chatId, setChatId, resetMessages } =
		useChatStore(
			(state) => ({
				chatId: state.chatId,
				setChats: state.setChats,
				totalCount: state.totalCount,
				setChatId: state.setChatId,
				resetMessages: state.resetMessages
			}),
			shallow
		)

	useEffect(() => {
		socket?.connect()
		socket?.on("chats", (chats: IChatType[]) => {
			console.log(chats)
			// console.log(chats)
			if(Array.isArray(chats)) {
				setChats(chats)
			}
		})

		socket?.on("msg", (msg) => {
			console.log(msg)
			console.log(chatId)
			if(msg.userId !== tokens.id && msg.chatId !== chatId) {
				toast(() => (
					<Pane
						onClick={() => {
							setChatId(msg.chatId)
							resetMessages()
							navigate(`/chat/${msg.chatId}`)
						}}
					>
						User: {msg.userName} sent a message: {msg.message}
					</Pane>
				))
			}
		})

		return () => {
			socket?.off("chats")
			socket?.off("msg")
			socket?.disconnect()
		}
	}, [chatId, socket])

	return { totalCount }
}
