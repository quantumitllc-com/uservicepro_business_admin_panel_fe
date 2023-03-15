import React from "react"
import { Avatar, majorScale, minorScale, Pane } from "evergreen-ui"
import { shallow } from "zustand/shallow"

import MyHeading from "components/heading"
import { ReactComponent as Ellipse } from "pages/dashboard/chat/components/user/ellipse.svg"
import { useChatStore } from "store/chat"
import SkeletonAvatar from "../skeleton-avatar"
import styles from "../middle-chat/styles.module.scss"

const HeaderChat = () => {
	const { currentChat } = useChatStore(
		(state) => ({
			currentChat: state.currentChat,
		}),
		shallow,
	)

	return (
		<Pane
			borderBottom="1px solid var(--stroke-block)"
			paddingX={majorScale(8)}
			paddingY={minorScale(5)}
		>
			{!currentChat.chatId ? (
				<SkeletonAvatar />
			) : (
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
						<MyHeading fontSize={14}>
							{currentChat.userName || "Name"}
						</MyHeading>
					</Pane>
				</Pane>
			)}
		</Pane>
	)
}

export default HeaderChat
