import React from "react"
import { Avatar, majorScale, minorScale, Pane } from "evergreen-ui"

import MyHeading from "components/heading"
import { ReactComponent as Ellipse } from "pages/dashboard/chat/components/user/ellipse.svg"
import SkeletonAvatar from "../skeleton-avatar"
import styles from "../middle-chat/styles.module.scss"
import { useMessages } from "../../useMessages"

const HeaderChat = () => {
	const {
		isLoading,
		currentChat,
	} = useMessages()

	return (
		<Pane
			borderBottom="1px solid var(--stroke-block)"
			paddingX={majorScale(8)}
			paddingY={minorScale(5)}
		>
			{isLoading ? (
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