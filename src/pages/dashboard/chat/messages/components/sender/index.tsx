import { minorScale, Pane } from "evergreen-ui"
import dayjs from "dayjs"

import MyText from "components/text"
import styles from "./styles.module.scss"
import { ReactComponent as Check } from "./check.svg"

type SenderProps = {
	text: string
	time: string
}

const Sender = ({ text, time }: SenderProps) => (
	<Pane marginLeft="auto">
		<Pane
			backgroundColor="var(--dark-green)"
			className={styles.sender}
			padding={minorScale(3)}
			border="1px solid var(--stroke-block)"
		>
			<MyText color="var(--white)">{text}</MyText>
		</Pane>
		<Pane display="flex" justifyContent="space-between">
			<Check />
			<MyText
				marginRight="auto"
				color="var(--grey)"
				fontSize={12}
				fontWeight={500}
			>
				{dayjs(time).format("H:mm DD/MM/YY")}
			</MyText>
		</Pane>
	</Pane>
)

export default Sender
