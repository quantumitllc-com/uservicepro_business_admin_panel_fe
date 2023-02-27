import { Pane } from "evergreen-ui"

import User from "../user"
import { useChat } from "../../useChat"

const ChatList = () => {
	const { chats } = useChat()

	return (
		<Pane>
			{chats.map(chat => (
				<User key={chat.chatId} chat={chat} />
			))}
		</Pane>
	)
}

export default ChatList