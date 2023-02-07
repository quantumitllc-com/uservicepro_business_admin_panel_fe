import React, { ReactElement, useState } from "react"
import { Pane } from "evergreen-ui"

import { TabTitle } from "./components/tab-title"

type TabsProps = {
	children: ReactElement[]
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
	const [selectedTab, setSelectedTab] = useState(0)

	return (
		<Pane display="flex" flexDirection="column" gap={8}>
			<Pane gap={15} display="flex" alignItems="center">
				{children.map((item, index) => (
					<TabTitle
						index={index}
						setSelectedTab={setSelectedTab}
						selectedTab={selectedTab}
						title={item.props.title}
						key={item.props.title}
					/>
				))}
			</Pane>
			{children[selectedTab]}
		</Pane>
	)
}
