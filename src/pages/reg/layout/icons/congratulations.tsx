import { majorScale, Pane } from "evergreen-ui"

import MyHeading from "shared/ui/heading"
import { ReactComponent as Sofa } from "./sofa.svg"
import MyText from "../../../../shared/ui/text"
import MyButton from "../../../../shared/ui/button"

const Congratulations = () => (
	<Pane flexDirection="column" display="flex" alignItems="center">
		<Pane marginBottom={majorScale(13)}>
			<Sofa />
		</Pane>
		<MyHeading
			marginBottom={majorScale(2)}
			fontSize="36px"
			color="var(--dark-green)"
		>
			Congratulations
		</MyHeading>
		<MyText marginBottom={majorScale(10)}>
			Your account has been created and verified!
		</MyText>
		<MyButton small="true" appearance="primary">
			Finish
		</MyButton>
	</Pane>
)

export default Congratulations
