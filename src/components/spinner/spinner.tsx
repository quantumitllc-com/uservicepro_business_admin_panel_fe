import { Pane, Spinner as SpinnerUI } from "evergreen-ui"

export const Spinner = () => (
	<Pane
		display="flex"
		width="100%"
		height="100%"
		alignItems="center"
		justifyContent="center"
	>
		<SpinnerUI />
	</Pane>
)
