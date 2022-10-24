import { Pane, PaneProps } from "evergreen-ui"
import { FC } from "react"

import MyText from "../text"

interface Tab {
	text: string
	active?: boolean
}

interface MyTabsProps extends PaneProps {
	tabs: Array<Tab>
}

const MyTabs: FC<MyTabsProps> = (props) => {
	const { tabs } = props
	return (
		<Pane {...props} gap={15} display="flex" alignItems="center">
			{tabs.map((tab: Tab, index: number) => (
				<MyText
					key={tab.text}
					borderRight={
						!tab.active && index !== tabs.length - 1
							? "1px solid var(--grey)"
							: "none"
					}
					borderLeft={
						index === tabs.length - 1
							? "1px solid var(--grey)"
							: "none"
					}
					paddingX={15}
					paddingY={5}
					backgroundColor={tab.active && "var(--black)"}
					color={tab.active && "var(--white)"}
					borderRadius={tab.active && 4}
				>
					{tab.text}
				</MyText>
			))}
		</Pane>
	)
}

export default MyTabs
