import { Button, majorScale, Pane } from "evergreen-ui"
import { Link } from "react-router-dom"

import Logo from "components/logo"
import MyText from "components/text"

export const Header = () => (
	<Pane
		display="flex"
		background="white"
		alignItems="center"
		paddingLeft={majorScale(3)}
		paddingRight={majorScale(5)}
		style={{
			filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))",
		}}
	>
		<Pane flex={1} height={80} alignItems="center" display="flex">
			<Logo />
		</Pane>
		<Pane>
			<MyText color="muted" marginRight={majorScale(3)}>
				Already have an account ?
			</MyText>
			<Link to="/sign-in">
				<Button
					height={42}
					border="none"
					minWidth="150px"
					background="#E2EDF0"
					color="var(--dark-green)"
				>
					Sign in
				</Button>
			</Link>
		</Pane>
	</Pane>
)
