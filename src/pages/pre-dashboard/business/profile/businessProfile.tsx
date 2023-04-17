import { minorScale, Pane } from "evergreen-ui"

import { ReactComponent as BriefcaseSelected } from "pages/pre-dashboard/components/accordion/icons/briefcase-selected.svg"
import MyText from "components/text"
import MyButton from "components/button"
import { Input } from "components/input"
import MyCheckbox from "components/checkbox"
import MyHeading from "components/heading"
import { Select } from "components/select"
import { states } from "constants/offices"
import { useBusinessProfile } from "./useBusinessProfile"

const BusinessProfile = () => {
	const {
		form: { control, handleSubmit },
		isLoading,
		onSubmit,
	} = useBusinessProfile()

	return (
		<Pane padding="20px">
			<Pane
				alignItems="center"
				display="flex"
				marginBottom={minorScale(2)}
			>
				<BriefcaseSelected />
				<MyHeading fontSize={21} marginLeft={minorScale(5)}>
					Set up your Commercial profile, add some details
				</MyHeading>
			</Pane>
			<Pane marginBottom={minorScale(8)}>
				<MyText color="var(--grey)" fontSize="16px">
					Before work you have to fill up the profile section
				</MyText>
			</Pane>
			<Pane marginTop={minorScale(4)} display="flex" gap={minorScale(4)}>
				<Input
					label="Company name"
					type="text"
					name="companyName"
					control={control}
					placeholder="Company name"
				/>
				<Input
					label="Business TIN"
					type="text"
					name="companyTin"
					control={control}
					placeholder="XX-YYYYYYY"
				/>
				<Input
					label="Office name"
					type="text"
					name="officeName"
					control={control}
					placeholder="Office name"
				/>
			</Pane>
			<Pane display="flex" gap={minorScale(4)}>
				<Select
					name="state"
					control={control}
					label="State"
					options={states}
				/>
				{/*<SelectField label="State">*/}

				{/*</SelectField>*/}
				{/*<Pane>*/}
				{/*	<MyLabel>State</MyLabel>*/}
				{/*	<Select height={40} onChange={event => alert(event.target.value)}>*/}
				{/*		<option value="foo" selected>*/}
				{/*			Foo*/}
				{/*		</option>*/}
				{/*		<option value="bar">Bar</option>*/}
				{/*	</Select>*/}
				{/*</Pane>*/}

				{/*<Input*/}
				{/*	label="State"*/}
				{/*	type="text"*/}
				{/*	name="state"*/}
				{/*	control={control}*/}
				{/*	placeholder="State"*/}
				{/*/>*/}
				<Input
					label="City"
					type="text"
					name="city"
					control={control}
					placeholder="City"
				/>
				<Input
					label="Zip Code"
					type="number"
					name="zipCode"
					control={control}
					placeholder="Zip Code"
				/>
			</Pane>
			<Pane display="flex" gap={minorScale(4)}>
				<Input
					label="Address Line 1"
					type="text"
					name="addressLine1"
					control={control}
					placeholder="Address Line 1"
				/>
				<Input
					label="Address Line 2 (optional)"
					type="text"
					name="addressLine2"
					control={control}
					placeholder="Address Line 2"
				/>
			</Pane>
			<Pane display="flex" gap={minorScale(4)}>
				<Input
					label="Phone number"
					type="text"
					name="phone"
					control={control}
					placeholder="(555) 555-1234"
				/>
			</Pane>
			<Pane
				display="flex"
				alignItems="center"
				justifyContent="space-between"
			>
				<Pane gap={minorScale(3)} display="flex" alignItems="center">
					<MyCheckbox checked />
					<MyText>
						By clicking on the button, I consent to the processing
						Personal data
					</MyText>
				</Pane>
				<MyButton
					disabled={isLoading}
					isLoading={isLoading}
					onClick={handleSubmit(onSubmit)}
					appearance="primary"
					small="true"
				>
					Submit application
				</MyButton>
			</Pane>
		</Pane>
	)
}

export default BusinessProfile
