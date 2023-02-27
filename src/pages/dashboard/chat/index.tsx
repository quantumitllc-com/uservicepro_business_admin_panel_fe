import { minorScale, Pane, SearchInput } from "evergreen-ui"
import { Outlet } from "react-router-dom"
import React, { Suspense } from "react"

import MyHeading from "components/heading"
import { Spinner } from "components/spinner"
import ChatList from "./components/chat-list"
import Skeleton from "./components/skeleton"
import { useChat } from "./useChat"

const Chat = () => {
	const { isLoading } = useChat()

	console.log(isLoading)

	return (
		<Pane
			display="grid"
			gridAutoColumns="1fr"
			gridTemplateColumns="1fr 2fr"
			gap="0px 30px"
			height="100%"
		>
			<Pane paddingRight="30px" borderRight="1px solid var(--grey)">
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
				<Pane
					position="sticky"
					overflowY="scroll"
					maxHeight="calc(100vh - 247px)"
					width="330px"
				>
					{isLoading ? <Skeleton /> : <ChatList />}
				</Pane>
			</Pane>
			<Suspense fallback={<Spinner />}>
				<Outlet />
			</Suspense>
		</Pane>
	)
}

export default Chat
