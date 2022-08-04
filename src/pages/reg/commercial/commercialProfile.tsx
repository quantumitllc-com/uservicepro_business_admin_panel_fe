import { Heading, minorScale, Pane } from "evergreen-ui"

import { ReactComponent as BriefcaseSelected } from "entities/accordion/icons/briefcase-selected.svg"
import MyText from "shared/ui/text"
import MyButton from "shared/ui/button"
import { MyInputField } from "shared/ui/input"
import MyLabel from "shared/ui/label"
import MyCheckbox from "shared/ui/checkbox"

const CommercialProfile = () => (
	<Pane padding="20px">
		<Pane alignItems="center" display="flex" marginBottom={minorScale(2)}>
			<BriefcaseSelected />
			<Heading
				fontFamily="var(--lexend)"
				fontSize={21}
				fontWeight={500}
				marginLeft={minorScale(5)}
			>
				Set up your Commercial profile, add some details
			</Heading>
		</Pane>
		<MyText color="var(--grey)" fontSize="16px">
			Before work you have to fill up the profile section
		</MyText>
		<Pane marginBottom={minorScale(8)} marginTop={minorScale(4)}>
			<MyButton
				marginRight={minorScale(2)}
				small="true"
				appearance="outlined"
			>
				Finish
			</MyButton>
		</Pane>
		<MyInputField
			marginBottom={minorScale(4)}
			label={<MyLabel>Company name</MyLabel>}
		/>
		<Pane display="flex" gap={minorScale(4)}>
			<MyInputField
				placeholder="XX-YYYYYYY"
				label={<MyLabel>TIN</MyLabel>}
			/>
			<MyInputField label={<MyLabel>Phone number</MyLabel>} />
		</Pane>
		<Pane display="flex" gap={minorScale(4)}>
			<MyInputField
				label={<MyLabel>Country</MyLabel>}
				disabled
				value="United States of America"
			/>
			<MyInputField label={<MyLabel>State</MyLabel>} />
			<MyInputField label={<MyLabel>ZIP CODE</MyLabel>} />
		</Pane>
		<Pane display="flex" gap={minorScale(4)}>
			<MyInputField label={<MyLabel>City</MyLabel>} />
			<MyInputField label={<MyLabel>District</MyLabel>} />
			<MyInputField label={<MyLabel>Street name</MyLabel>} />
		</Pane>
		<Pane gap={minorScale(3)} display="flex" alignItems="center">
			<MyCheckbox />
			<MyText>
				By clicking on the button, I consent to the processing Personal
				data
			</MyText>
		</Pane>
	</Pane>
)

export default CommercialProfile
