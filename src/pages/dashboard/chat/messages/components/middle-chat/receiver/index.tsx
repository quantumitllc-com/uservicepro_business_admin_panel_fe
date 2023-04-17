import { Pane } from "evergreen-ui"
import dayjs from "dayjs"

import MyText from "components/text"
import { getMessageType } from "../getMessageType"

type ReceiverProps = {
	text: string
	time: string
}

const Receiver = ({ text, time }: ReceiverProps) => (
	<Pane marginRight="auto">
		{getMessageType(text, "receiver")}
		<Pane>
			<MyText color="var(--grey)" fontSize={12} fontWeight={500}>
				{dayjs(time).format("H:mm DD/MM/YY")}
			</MyText>
		</Pane>
	</Pane>
)

export default Receiver
