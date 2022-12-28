import { majorScale, Pane } from "evergreen-ui"

import MyHeading from "components/heading"
import { ReactComponent as Sofa } from "./sofa.svg"
import MyText from "../../../../components/text"
import MyButton from "../../../../components/button"

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
