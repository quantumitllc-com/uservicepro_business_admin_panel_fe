import { FC } from "react"
import { minorScale, Pane, PaneProps, Text } from "evergreen-ui"
import { ReactComponent as MySvg } from "./logo.svg"

const Logo: FC<PaneProps> = (props) => (
	<Pane display="flex" alignItems="center" {...props}>
		<MySvg />
		<Text
			marginLeft={minorScale(1)}
			color="var(--dark-green)"
			fontWeight="500"
		>
			Service App
		</Text>
	</Pane>
)

export default Logo
