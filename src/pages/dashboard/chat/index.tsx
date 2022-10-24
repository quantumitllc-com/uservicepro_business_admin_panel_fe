import {
	Avatar,
	majorScale,
	SendMessageIcon,
	minorScale,
	Pane,
	SearchInput,
	IconButton,
} from "evergreen-ui"

import ChatList from "shared/ui/chat/chat-list"
import MyHeading from "shared/ui/heading"
import { ReactComponent as Ellipse } from "shared/ui/chat/chat-list/ellipse.svg"
import MyText from "shared/ui/text"
import Receiver from "shared/ui/chat/receiver"
import Sender from "shared/ui/chat/sender"
import { MyInput } from "shared/ui/input"
import styles from "./styles.module.scss"

const Chat = () => (
	<Pane
		display="grid"
		gridAutoColumns="1fr"
		gridTemplateColumns="1fr 2fr"
		gap="0px 0px"
	>
		<Pane paddingRight="30px">
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
			>
				<ChatList active />
				<ChatList />
				<ChatList />
				<ChatList />
				<ChatList />
				<ChatList />
				<ChatList />
				<ChatList />
				<ChatList />
			</Pane>
		</Pane>
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
				<Pane display="flex">
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
						<MyText fontSize={12}>Last seen 1 hour ago</MyText>
					</Pane>
				</Pane>
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
				maxHeight="calc(100vh - 247px)"
			>
				<Receiver />
				<Sender />
				<Receiver />
				<Sender />
			</Pane>
			<Pane
				justifyContent="space-between"
				display="flex"
				padding={minorScale(5)}
				borderTop="1px solid var(--stroke-block)"
			>
				<MyInput
					marginRight={16}
					width="100%"
					placeholder="Write a message"
				/>
				<Pane
					paddingLeft={16}
					borderLeft="1px solid var(--stroke-block)"
				>
					<IconButton
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
	</Pane>
)

export default Chat
