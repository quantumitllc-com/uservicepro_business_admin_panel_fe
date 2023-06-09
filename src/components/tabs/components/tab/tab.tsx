import React from "react"
import { Pane } from "evergreen-ui"

type TabProps = {
	children?: any
	title: string
}

export const Tab: React.FC<TabProps> = ({ children }) => <Pane>{children}</Pane>
