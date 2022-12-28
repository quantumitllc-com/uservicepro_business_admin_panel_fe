import { LockIcon, minorScale, Pane } from "evergreen-ui"

import { ReactComponent as DetailsSelected } from "entities/accordion/icons/details-selected.svg"
import MyText from "components/text"
import MyButton from "components/button"
import { MyInputField } from "components/input"
import MyLabel from "components/label"
import MyCheckbox from "components/checkbox"
import MyHeading from "components/heading"
import BriefcaseBig from "../layout/icons/briefcase-big.png"

const CommercialBusiness = () => (
	<Pane padding="20px" position="relative">
		<Pane alignItems="center" display="flex" marginBottom={minorScale(2)}>
			<DetailsSelected />
			<MyHeading fontSize={21} marginLeft={minorScale(5)}>
				Before work you have to fill up the company details
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
			<MyInputField label={<MyLabel>Representative name</MyLabel>} />
		</Pane>
		<Pane display="flex" gap={minorScale(4)}>
			<MyInputField label={<MyLabel>Type of Business</MyLabel>} />
		</Pane>
		<Pane gap={minorScale(3)} display="flex" alignItems="center">
			<MyCheckbox />
			<MyText>
				By clicking on the button, I consent to the processing Personal
				data
			</MyText>
		</Pane>
		<Pane position="absolute" right="50px" top="200px">
			<img src={BriefcaseBig} alt="EnvelopeBig" />
		</Pane>
	</Pane>
)

export default CommercialBusiness
