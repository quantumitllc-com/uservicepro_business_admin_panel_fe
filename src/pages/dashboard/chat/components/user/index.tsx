import { Avatar, majorScale, minorScale, Pane, PaneProps } from "evergreen-ui"
import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { shallow } from "zustand/shallow"
import dayjs from "dayjs"

import MyHeading from "components/heading"
import MyText from "components/text"
// import MyBadge from "components/badge"
import { IChatType } from "types/dashboard/chat"
import { useChatStore } from "store/chat"
import { ReactComponent as Ellipse } from "./ellipse.svg"
import styles from "./styles.module.scss"

interface ChatListProps extends PaneProps {
	active?: boolean
	chat: IChatType
}

const User: FC<ChatListProps> = ({ active, chat }) => {
	const navigate = useNavigate()
	const { chatId, setChatId } = useChatStore(
		(state) => ({
			chatId: state.chatId,
			setChatId: state.setChatId,
		}),
		shallow,
	)

	useEffect(() => {
		if (chatId) {
			setChatId(chatId)
		}
	}, [chatId])

	const handleOpenChat = (id: string) => {
		setChatId(id)
		navigate(id)
	}

	return (
		<Pane
			overflowX="hidden"
			onClick={() => handleOpenChat(chat.chatId)}
			className={active ? "" : styles.chat}
			width="auto"
			justifyContent="space-between"
			alignItems="center"
			backgroundColor={active && "var(--chat-active)"}
			display="flex"
			padding={minorScale(4)}
			borderBottom={!active && "1px solid var(--stroke-block)"}
		>
			<Pane display="flex" alignItems="center">
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
