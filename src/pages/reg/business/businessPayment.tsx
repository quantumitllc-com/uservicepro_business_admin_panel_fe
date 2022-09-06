import { minorScale, Pane, LockIcon, SelectField } from "evergreen-ui"

import { ReactComponent as CardSelected } from "entities/accordion/icons/card-selected.svg"
import MyText from "shared/ui/text"
import MyButton from "shared/ui/button"
import MyHeading from "shared/ui/heading"
import MyLabel from "shared/ui/label"

const BusinessPayment = () => (
	<Pane padding="20px">
		<Pane alignItems="center" display="flex" marginBottom={minorScale(2)}>
			<CardSelected />
			<MyHeading fontSize={21} marginLeft={minorScale(5)}>
				Add payment method
			</MyHeading>
		</Pane>
		<MyText color="var(--grey)" fontSize="16px">
			Before work in platform you have to add payment options.
		</MyText>
		<Pane marginBottom={minorScale(8)} marginTop={minorScale(4)}>
			<MyButton appearance="black" iconAfter={LockIcon} small="true">
				Finish
			</MyButton>
		</Pane>
		<SelectField width={240} label={<MyLabel>Payment method</MyLabel>}>
			<option value="cash">Cash only</option>
			<option value="credit">Credit Card</option>
			<option value="transfer">Money Transfer</option>
			<option value="all">All types</option>
		</SelectField>
	</Pane>
)

export default BusinessPayment
