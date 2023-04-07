import React, { useEffect } from "react"
import { Pane } from "evergreen-ui"
import { shallow } from "zustand/shallow"

import { useChatStore } from "store/chat"
import HeaderChat from "./components/header-chat"
import MiddleChat from "./components/middle-chat"
import FooterChat from "./components/footer-chat"

const Messages = () => {
	const { chatId, setChatId, currentChat } = useChatStore(
		(state) => ({
			chatId: state.chatId,
			setChatId: state.setChatId,
			currentChat: state.currentChat,
		}),
		shallow,
	)

	// useEffect(() => {
	// 	if (chatId !== undefined) {
	// 		setChatId(chatId)
	// 	}
	// }, [])

	// console.log(chatId)
	// console.log(currentChat)

	return (
		<Pane
			maxHeight="calc(100vh - 139px)"
			backgroundColor="var(--white)"
			borderRadius="10px"
			border="1px solid var(--stroke-block)"
			display="flex"
			flexDirection="column"
		>
			<HeaderChat />
			<MiddleChat />
			<FooterChat />
		</Pane>
	)
}

export default Messages
