import { Pane } from "evergreen-ui"
import dayjs from "dayjs"

import MyText from "components/text"
import { ReactComponent as Check } from "./check.svg"
import { getMessageType } from "../getMessageType"

type SenderProps = {
	text: string
	time: string
}

const Sender = ({ text, time }: SenderProps) => {
	return (
		<Pane marginLeft="auto">
			{getMessageType(text, "sender")}
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
}

export default Sender
