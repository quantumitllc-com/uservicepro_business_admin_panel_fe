import React from "react"
import { Pane } from "evergreen-ui"

import HeaderChat from "./components/header-chat"
import MiddleChat from "./components/middle-chat"
import FooterChat from "./components/footer-chat"

const Messages = () => {
	return (
		<Pane
			maxHeight="calc(100vh - 139px)"
			backgroundColor="var(--white)"
			borderRadius="10px"
			border="1px solid var(--stroke-block)"
			display="flex"
			flexDirection="column"
		>
			<HeaderChat />
			<MiddleChat />
			<FooterChat />
		</Pane>
	)
}

export default Messages
