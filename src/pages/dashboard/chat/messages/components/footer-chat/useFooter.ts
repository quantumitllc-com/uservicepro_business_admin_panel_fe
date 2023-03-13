import { useState } from "react"
import { shallow } from "zustand/shallow"

import { getSocket } from "utils/getSocket"
import { useChatStore } from "store/chat"
import { getMessages } from "services/dashboard/chat"

export const useFooter = () => {
	const [message, setMessage] = useState("")
	const socket = getSocket()
	const {
		chatId,
		currentChat,
		setLastUnreadMessage,
		setNewMessage
	} = useChatStore(
		(state) => ({
			chatId: state.chatId,
			currentChat: state.currentChat,
			setLastUnreadMessage: state.setLastUnreadMessage,
			setNewMessage: state.setNewMessage
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
			await setMessage("")
			setTimeout(async () => {
				const { data: { data } } = await getMessages({ size: 1, page: 1, chatId })
				await setLastUnreadMessage(message, currentChat.chatId)
				await setNewMessage(data)
			}, 1000)

		}
	}


	return {
		handleSendMessage,
		message,
		setMessage,
	}
}