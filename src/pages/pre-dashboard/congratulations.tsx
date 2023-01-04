import { majorScale, Pane } from "evergreen-ui"
import { Link } from "react-router-dom"

import MyHeading from "components/heading"
import MyText from "components/text"
import MyButton from "components/button"
import { ReactComponent as Sofa } from "./layout/icons/sofa.svg"

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
		<Link to="/">
			<MyButton small="true" appearance="primary">
				Finish
			</MyButton>
		</Link>
	</Pane>
)

export default Congratulations
