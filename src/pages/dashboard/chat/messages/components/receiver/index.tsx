import { Pane, minorScale } from "evergreen-ui"

import MyText from "components/text"
import styles from "./styles.module.scss"

type ReceiverProps = {
	text: string
}

const Receiver = ({ text }: ReceiverProps) => (
		<Pane marginRight="auto">
			<Pane
				className={styles.receiver}
				paddingLeft={minorScale(5)}
				paddingBottom={minorScale(8)}
				paddingRight={minorScale(8)}
				paddingTop={minorScale(3)}
				border="1px solid var(--stroke-block)"
			>
				<MyText color="var(--black)">
					{text}
				</MyText>
			</Pane>
			<MyText color="var(--grey)" fontSize={12} fontWeight={500}>
				14:02
			</MyText>
		</Pane>
)

export default Receiver
