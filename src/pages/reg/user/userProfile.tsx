import { Heading, LockIcon, minorScale, Pane } from "evergreen-ui"

import { ReactComponent as BriefcaseSelected } from "entities/accordion/icons/briefcase-selected.svg"
import MyText from "components/text"
import MyButton from "components/button"
import { MyInputField } from "components/input"
import MyLabel from "components/label"
import MyCheckbox from "components/checkbox"

const UserProfile = () => (
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
			<MyButton appearance="black" iconAfter={LockIcon} small="true">
				Finish
			</MyButton>
		</Pane>
		<Pane display="flex" gap={minorScale(4)}>
			<MyInputField label={<MyLabel>Given name</MyLabel>} />
			<MyInputField label={<MyLabel>Middle name</MyLabel>} />
		</Pane>
		<Pane display="flex" gap={minorScale(4)}>
			<MyInputField
				type="email"
				label={<MyLabel>Date of birth</MyLabel>}
			/>
			<MyInputField
				type="number"
				label={<MyLabel>Phone number</MyLabel>}
			/>
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

export default UserProfile
