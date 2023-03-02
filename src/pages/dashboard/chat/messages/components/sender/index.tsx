import { majorScale, minorScale, Pane } from "evergreen-ui"

import MyText from "components/text"
import styles from "./styles.module.scss"
import { ReactComponent as Check } from "./check.svg"

type SenderProps = {
	text: string
}

const Sender = ({ text }: SenderProps) => (
	<Pane marginLeft="auto" flexDirection="column" display="flex">
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
				{text}
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
