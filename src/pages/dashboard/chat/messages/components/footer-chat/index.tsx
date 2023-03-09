import { IconButton, minorScale, Pane, SendMessageIcon } from "evergreen-ui"
import React from "react"

import { MyInput } from "components/input"
import styles from "../middle-chat/styles.module.scss"
import { useMessages } from "../../useMessages"

const FooterChat = () => {
	const {
		message,
		setMessage,
		handleSendMessage,
	} = useMessages()

	return (
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
			<Pane
				paddingLeft={16}
				borderLeft="1px solid var(--stroke-block)"
			>
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
	)
}

export default FooterChat