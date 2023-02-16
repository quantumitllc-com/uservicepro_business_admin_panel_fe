import { majorScale, minorScale, Pane } from "evergreen-ui"

import MyText from "../../../../../../components/text"
import styles from "./styles.module.scss"
import { ReactComponent as Check } from "./check.svg"

const Sender = () => (
	<Pane marginLeft={majorScale(6)} flexDirection="column" display="flex">
		<Pane
			backgroundColor="var(--dark-green)"
			className={styles.sender}
			paddingLeft={minorScale(5)}
			paddingBottom={minorScale(8)}
			paddingRight={minorScale(8)}
			paddingTop={minorScale(3)}
			border="1px solid var(--stroke-block)"
		>
			<MyText color="var(--white)">
				Do greatest at in learning steepest. Breakfast extremity
				suffering one who all otherwise suspected. He at no nothing
				forbade up moments. Wholly uneasy at missed be of pretty whence.
				John way sir high than law who week. Surrounded prosperous
				introduced it if is up dispatched. Improved so strictly produced
				answered elegance is.
			</MyText>
		</Pane>
		<Pane display="flex" justifyContent="space-between">
			<Check />
			<MyText
				marginRight={majorScale(6)}
				color="var(--grey)"
				fontSize={12}
				fontWeight={500}
			>
				14:02
			</MyText>
		</Pane>
	</Pane>
)

export default Sender
