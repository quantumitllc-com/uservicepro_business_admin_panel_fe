import { Pane } from "evergreen-ui"
import { useParams } from "react-router"

import User from "../user"
import { useChat } from "../../useChat"

const ChatList = () => {
	const { chats } = useChat()
	const { chatId } = useParams()

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
