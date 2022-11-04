import { Pane } from "evergreen-ui"
import MyHeading from "shared/ui/heading"

import MyText from "shared/ui/text"
import { MyInputField } from "shared/ui/input"
import MyLabel from "shared/ui/label"
import MyButton from "shared/ui/button"
import { ReactComponent as Bank } from "./icons/bank.svg"

const PaymentBank = () => (
	<Pane>
		<Pane padding={45} borderRadius={6} backgroundColor="var(--white)">
			<MyHeading marginBottom={30} fontSize={42}>
				Bank Details
			</MyHeading>
			<Pane marginBottom={10} alignItems="center" display="flex" gap={20}>
				<Bank />
				<MyHeading fontSize={24}>
					Set up your company profile, add some details
				</MyHeading>
			</Pane>
			<MyText>
				Before work you have to fill up the account settings
			</MyText>
			<Pane marginTop={30}>
				<MyHeading marginBottom={30} fontSize={24}>
					Account settings
				</MyHeading>
				<MyInputField
					placeholder="First National Bank"
					label={<MyLabel>Bank name</MyLabel>}
				/>
				<MyInputField
					placeholder="1234 5678 9000 0000 1010"
					label={<MyLabel>Account number</MyLabel>}
				/>
				<MyInputField
					placeholder="1234 5678 9000 0000 1010"
					label={<MyLabel>Confirm account number</MyLabel>}
				/>
				<MyInputField
					placeholder="1234 5678 9000 0000 1010"
					label={<MyLabel>Rooting number</MyLabel>}
				/>
				<MyButton small="true" appearance="primary">
					Done
				</MyButton>
			</Pane>
		</Pane>
	</Pane>
)

export default PaymentBank
