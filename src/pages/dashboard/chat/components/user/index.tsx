import { Avatar, majorScale, minorScale, Pane, PaneProps } from "evergreen-ui"
import { FC } from "react"
import dayjs from "dayjs"

import MyHeading from "components/heading"
import MyText from "components/text"
// import MyBadge from "components/badge"
import { IChatType } from "types/dashboard/chat"
import { ReactComponent as Ellipse } from "./ellipse.svg"
import styles from "./styles.module.scss"

interface ChatListProps extends PaneProps {
	isActive: boolean
	chat: IChatType
}

const User: FC<ChatListProps> = ({ isActive, chat }) => {
	return (
		<Pane
			className={isActive ? styles.activeChat : ""}
			justifyContent="space-between"
			alignItems="center"
			display="flex"
			padding={minorScale(4)}
			borderBottom={!isActive && "1px solid var(--stroke-block)"}
		>
			<Pane width="75%" display="flex" alignItems="center">
				<Pane position="relative">
					<Avatar
						marginRight={minorScale(2)}
						src={chat.imageUrl}
						size={50}
					/>
					<Ellipse className={styles.ellipse} />
				</Pane>
				<Pane whiteSpace="nowrap" marginRight={majorScale(5)}>
					<MyHeading fontSize={14}>
						{chat.userName || "name"}
					</MyHeading>
					<MyText fontSize={12}>{chat.lastUnreadMessage}</MyText>
				</Pane>
			</Pane>
			<Pane display="flex" flexDirection="column">
				<MyText fontSize={12} color="var(--black)">
					{dayjs(chat.createdAt).format("DD/MM/YY")}
				</MyText>
				{/*<MyBadge backgroundColor="var(--dark-green)">2</MyBadge>*/}
			</Pane>
		</Pane>
	)
}

export default User
