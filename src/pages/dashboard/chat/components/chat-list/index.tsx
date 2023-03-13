import { Pane } from "evergreen-ui"
import { useParams } from "react-router"
import { shallow } from "zustand/shallow"

import { useChatStore } from "store/chat"
import User from "../user"

const ChatList = () => {
	const { chatId } = useParams()
	const { chats } = useChatStore(
		(state) => ({
			chats: state.chats,
		}),
		shallow,
	)

	return (
		<Pane>
			{chats.map((chat) => (
				<User
					key={chat.chatId}
					active={chatId === chat.chatId ? true : undefined}
					chat={chat}
				/>
			))}
		</Pane>
	)
}

export default ChatList
