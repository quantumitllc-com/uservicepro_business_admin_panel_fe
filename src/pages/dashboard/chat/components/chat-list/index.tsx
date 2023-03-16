import { Pane } from "evergreen-ui"
import { shallow } from "zustand/shallow"
import { NavLink } from "react-router-dom"
import { useEffect } from "react"

import { useChatStore } from "store/chat"
import { getSocket } from "utils/getSocket"
import User from "../user"

const ChatList = () => {
	const socket = getSocket()
	const { chats, chatId, setChatId, resetMessages } = useChatStore(
		(state) => ({
			chatId: state.chatId,
			resetMessages: state.resetMessages,
			setChatId: state.setChatId,
			chats: state.chats,
		}),
		shallow,
	)

	useEffect(() => {
		if (chatId) {
			setChatId(chatId)
		}
	}, [chatId])

	const handleOpenChat = (id: string) => {
		setChatId(id)
		resetMessages()
		socket.emit("left", { chatId })
	}

	return (
		<Pane>
			{chats.map((chat) => (
				<NavLink
					key={chat.chatId}
					to={chat.chatId}
					onClick={() => handleOpenChat(chat.chatId)}
				>
					{({ isActive }) => <User isActive={isActive} chat={chat} />}
				</NavLink>
			))}
		</Pane>
	)
}

export default ChatList
