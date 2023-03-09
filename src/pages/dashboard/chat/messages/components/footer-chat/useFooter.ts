import { useState } from "react"
import { shallow } from "zustand/shallow"

import { getSocket } from "utils/getSocket"
import { useChatStore } from "store/chat"

export const useFooter = () => {
	const [message, setMessage] = useState("")
	const socket = getSocket()
	const {
		chatId,
		currentChat,
		setLastUnreadMessage,
	} = useChatStore(
		(state) => ({
			chatId: state.chatId,
			currentChat: state.currentChat,
			setLastUnreadMessage: state.setLastUnreadMessage,
		}),
		shallow,
	)

	const handleSendMessage = async () => {
		if (message !== "") {
			const messageContent = {
				message,
				chatId,
			}
			await socket.emit("send_message", messageContent)
			setLastUnreadMessage(message, currentChat.chatId)
			setMessage("")
		}
	}


	return {
		handleSendMessage,
		message,
		setMessage,
	}
}