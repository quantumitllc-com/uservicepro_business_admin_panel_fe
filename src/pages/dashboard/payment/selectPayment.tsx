import { Pane, Switch, StatusIndicator } from "evergreen-ui"

import MyHeading from "shared/ui/heading"
import MyText from "shared/ui/text"
import { ReactComponent as Info } from "./icons/info.svg"

const SelectPayment = () => (
	<Pane padding={45} borderRadius={6} backgroundColor="var(--white)">
		<MyHeading marginBottom={30} fontSize={42}>
			Select Payment
		</MyHeading>
		<Pane marginBottom={30}>
			<Pane gap={10} display="flex">
				<Info />
				<Pane width={400}>
					<MyHeading>Instruction for credit card</MyHeading>
					<MyText>
						Lorem ipsum dolor sit amet. Nam excepturi galisum ut
						maiores aliquam eum consequuntur voluptatem in adipisci
						nisi sit doloribus odit.
					</MyText>
				</Pane>
			</Pane>
		</Pane>
		<Pane
			width={460}
			paddingX={30}
			paddingY={20}
			borderRadius={10}
			border="1px solid var(--stroke-block)"
			marginBottom={20}
		>
			<Pane
				marginBottom={10}
				justifyContent="space-between"
				alignItems="center"
				display="flex"
			>
				<MyHeading>Cash</MyHeading>
				<Switch checked />
			</Pane>
			<MyText>Payment method</MyText>
			<Pane marginTop={7}>
				<StatusIndicator dotSize={16} color="success">
					<MyHeading>active</MyHeading>
				</StatusIndicator>
			</Pane>
		</Pane>
		<Pane
			width={460}
			paddingX={30}
			paddingY={20}
			borderRadius={10}
			border="1px solid var(--stroke-block)"
		>
			<Pane
				marginBottom={10}
				justifyContent="space-between"
				alignItems="center"
				display="flex"
			>
				<MyHeading>Credit Card</MyHeading>
				<Switch checked />
			</Pane>
			<MyText>Payment method</MyText>
			<Pane marginTop={7}>
				<StatusIndicator dotSize={16} color="success">
					<MyHeading>active</MyHeading>
				</StatusIndicator>
			</Pane>
		</Pane>
	</Pane>
)

export default SelectPayment
