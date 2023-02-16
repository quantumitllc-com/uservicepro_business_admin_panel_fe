import { Avatar, majorScale, minorScale, Pane, PaneProps } from "evergreen-ui"
import { FC } from "react"

import MyHeading from "../../../../../../components/heading"
import MyText from "../../../../../../components/text"
import MyBadge from "../../../../../../components/badge"
import { ReactComponent as Ellipse } from "./ellipse.svg"
import styles from "./styles.module.scss"

interface ChatListProps extends PaneProps {
	active?: boolean
}

const ChatList: FC<ChatListProps> = ({ active }) => (
	<Pane
		className={active ? "" : styles.chat}
		width="330px"
		justifyContent="space-between"
		alignItems="center"
		backgroundColor={active && "var(--chat-active)"}
		display="flex"
		padding={minorScale(4)}
		borderBottom={!active && "1px solid var(--stroke-block)"}
	>
		<Pane position="relative">
			<Avatar
				marginRight={minorScale(2)}
				src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
				size={50}
			/>
			<Ellipse className={styles.ellipse} />
		</Pane>
		<Pane marginRight={majorScale(5)}>
			<MyHeading fontSize={14}>Alex Mendes</MyHeading>
			<MyText fontSize={12}>Hello Nelson, how are you?</MyText>
		</Pane>
		<Pane display="flex" flexDirection="column">
			<MyText fontSize={12} color="var(--black)">
				Jun 10
			</MyText>
			<MyBadge backgroundColor="var(--dark-green)">2</MyBadge>
		</Pane>
	</Pane>
)

export default ChatList
