import { minorScale, Pane, SearchInput } from "evergreen-ui"
import { Outlet } from "react-router-dom"
import React, { Suspense } from "react"
import { useParams } from "react-router"

import MyHeading from "components/heading"
import { Spinner } from "components/spinner"
import ChatList from "./components/chat-list"
import SkeletonChatList from "./components/skeleton-chat-list"
import { useChat } from "./useChat"
import ChooseChat from "./components/choose-chat"

const Chat = () => {
	const { isLoading } = useChat()
	const { chatId } = useParams()

	return (
		<Pane
			display="grid"
			gridAutoColumns="1fr"
			gridTemplateColumns="350px 1fr"
			gap="0px 30px"
			height="100%"
		>
			<Pane width="350px" paddingRight="30px" borderRight="1px solid var(--grey)">
				<MyHeading
					marginBottom={minorScale(5)}
					fontSize={24}
					fontWeight={600}
				>
					Messages
				</MyHeading>
				<SearchInput
					height={minorScale(10)}
					width="100%"
					placeholder="Search anything"
					marginBottom={minorScale(7)}
				/>
				{/*<Pane*/}
				{/*	// position="sticky"*/}
				{/*	// overflowY="scroll"*/}
				{/*	// overflowX="hidden"*/}
				{/*	// maxHeight="calc(100vh - 247px)"*/}
				{/*>*/}
					{isLoading ? <SkeletonChatList /> : <ChatList />}
				{/*</Pane>*/}
			</Pane>
			<Suspense fallback={<Spinner />}>
				{chatId ?
					<Outlet /> : <ChooseChat />
				}
			</Suspense>
		</Pane>
	)
}

export default Chat
