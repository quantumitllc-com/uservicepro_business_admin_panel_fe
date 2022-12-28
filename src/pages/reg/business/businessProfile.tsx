import { LockIcon, minorScale, Pane } from "evergreen-ui"

import { ReactComponent as BriefcaseSelected } from "entities/accordion/icons/briefcase-selected.svg"
import MyText from "components/text"
import MyButton from "components/button"
import { MyInputField } from "components/input"
import MyLabel from "components/label"
import MyCheckbox from "components/checkbox"
import MyHeading from "components/heading"

const BusinessProfile = () => (
	<Pane padding="20px">
		<Pane alignItems="center" display="flex" marginBottom={minorScale(2)}>
			<BriefcaseSelected />
			<MyHeading fontSize={21} marginLeft={minorScale(5)}>
				Set up your Commercial profile, add some details
			</MyHeading>
		</Pane>
		<MyText color="var(--grey)" fontSize="16px">
			Before work you have to fill up the profile section
		</MyText>
		<Pane marginBottom={minorScale(8)} marginTop={minorScale(4)}>
			<MyButton appearance="black" iconAfter={LockIcon} small="true">
				Finish
			</MyButton>
		</Pane>
		<Pane display="flex" gap={minorScale(4)}>
			<MyInputField label={<MyLabel>Company name</MyLabel>} />
			<MyInputField label={<MyLabel>Business TIN</MyLabel>} />
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
		<MyInputField
			marginBottom={minorScale(4)}
			label={<MyLabel>Company name</MyLabel>}
		/>
		<MyInputField
			marginBottom={minorScale(4)}
			label={<MyLabel>Phone number</MyLabel>}
		/>
		<Pane gap={minorScale(3)} display="flex" alignItems="center">
			<MyCheckbox />
			<MyText>
				By clicking on the button, I consent to the processing Personal
				data
			</MyText>
		</Pane>
	</Pane>
)

export default BusinessProfile
