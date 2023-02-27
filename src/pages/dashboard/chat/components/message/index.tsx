import React from "react"
import {
	Avatar,
	IconButton,
	majorScale,
	minorScale,
	Pane,
	SendMessageIcon,
} from "evergreen-ui"

import MyHeading from "components/heading"
import MyText from "components/text"
import { MyInput } from "components/input"
import { ReactComponent as Ellipse } from "pages/dashboard/chat/components/user/ellipse.svg"
import Receiver from "../chat/receiver"
import Sender from "../chat/sender"
import styles from "./styles.module.scss"

const Message = () => (
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
			<Pane paddingLeft={16} borderLeft="1px solid var(--stroke-block)">
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
)

export default Message
