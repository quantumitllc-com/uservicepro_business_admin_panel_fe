import { Pane, minorScale } from "evergreen-ui"
import dayjs from "dayjs"

import MyText from "components/text"
import styles from "./styles.module.scss"

type ReceiverProps = {
	text: string
	time: string
}

const Receiver = ({ text, time }: ReceiverProps) => (
	<Pane marginRight="auto">
		<Pane
			className={styles.receiver}
			padding={minorScale(3)}
			border="1px solid var(--stroke-block)"
		>
			<MyText color="var(--black)">{text}</MyText>
		</Pane>
		<MyText color="var(--grey)" fontSize={12} fontWeight={500}>
			{dayjs(time).format("H:m DD/MM/YY")}
		</MyText>
	</Pane>
)

export default Receiver
