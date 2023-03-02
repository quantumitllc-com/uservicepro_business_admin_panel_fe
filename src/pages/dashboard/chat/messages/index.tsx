import React, { useEffect, useRef } from "react"
import {
	Avatar,
	IconButton,
	majorScale,
	minorScale,
	Pane,
	SendMessageIcon
} from "evergreen-ui"

import MyHeading from "components/heading"
import { MyInput } from "components/input"
import { ReactComponent as Ellipse } from "pages/dashboard/chat/components/user/ellipse.svg"
import { getTokens } from "utils/getTokens"
import Receiver from "./components/receiver"
import Sender from "./components/sender"
import styles from "./styles.module.scss"
import { useMessages } from "./useMessages"
import SkeletonAvatar from "./components/skeleton-avatar"
import SkeletonMessages from "./components/skeleton-messages"

const Messages = () => {
	const tokens = getTokens()
	const {
		isLoading,
		message,
		setMessage,
		handleSendMessage,
		currentChat,
		messages,
	} = useMessages()
	const messagesEndRef = useRef<null | HTMLDivElement>(null)

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	return (
		<Pane
			maxHeight="calc(100vh - 139px)"
			backgroundColor="var(--white)"
			borderRadius="10px"
			border="1px solid var(--stroke-block)"
			display="flex"
			flexDirection="column"
		>
			<Pane
				borderBottom="1px solid var(--stroke-block)"
				paddingX={majorScale(8)}
				paddingY={minorScale(5)}
			>
				{isLoading ? <SkeletonAvatar /> : (
					<Pane display="flex" alignItems="center">
						<Pane position="relative">
							<Avatar
								marginRight={minorScale(2)}
								src={currentChat.imageUrl}
								size={50}
							/>
							<Ellipse className={styles.ellipse} />
						</Pane>
						<Pane marginRight={majorScale(5)}>
							<MyHeading fontSize={14}>{currentChat.userName || "Name"}</MyHeading>
							{/*<MyText fontSize={12}>Last seen 1 hour ago</MyText>*/}
						</Pane>
					</Pane>
				)}
			</Pane>
			<Pane
				display="flex"
				flexDirection="column"
				gap={minorScale(7)}
				paddingRight={majorScale(9)}
				paddingLeft={majorScale(5)}
				paddingY={majorScale(6)}
				position="sticky"
				overflowY="scroll"
				height="calc(100vh - 247px)"
				ref={messagesEndRef}
			>
				{isLoading ? <SkeletonMessages /> : (
					<>
						{messages.map((message) => {
							if(message.userId === tokens.id) {
								return <Sender key={message.createdAt} text={message.message} />
							}
							return <Receiver key={message.createdAt} text={message.message} />
						})}
					</>
				)}
			</Pane>
			<Pane
				justifyContent="space-between"
				display="flex"
				padding={minorScale(5)}
				borderTop="1px solid var(--stroke-block)"
			>
				<MyInput
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					marginRight={16}
					width="100%"
					placeholder="Write a message"
				/>
				<Pane paddingLeft={16} borderLeft="1px solid var(--stroke-block)">
					<IconButton
						disabled={message === ""}
						onClick={handleSendMessage}
						className={styles.send}
						size="large"
						border="none"
						borderRadius={50}
						backgroundColor="var(--dark-green)"
						padding={minorScale(5)}
						icon={<SendMessageIcon color="var(--white)" />}
					/>
				</Pane>
			</Pane>
		</Pane>
	)
}

export default Messages
