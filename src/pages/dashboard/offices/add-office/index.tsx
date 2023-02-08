import { Dialog, minorScale, Pane } from "evergreen-ui"

import { Input } from "components/input"
import MyButton from "components/button"
import { ReactComponent as Location } from "./location.svg"
import { useAddOffice } from "./useAddOffice"

interface AddLocationProps {
	value: boolean
	setFalse: () => void
}

const AddLocation = ({ value, setFalse }: AddLocationProps) => {
	const {
		form: { control, handleSubmit },
		onSubmit,
		isLoading,
	} = useAddOffice(setFalse)

	return (
		<Dialog
			width="50%"
			isShown={value}
			title="Adding office"
			onCloseComplete={() => setFalse()}
			hasFooter={false}
			confirmLabel="Done"
			footer={
				<MyButton
					small="true"
					appearance="primary"
					onClick={handleSubmit(onSubmit)}
					isLoading={isLoading}
				>
					Done
				</MyButton>
			}
		>
			<Pane display="flex" justifyContent="space-between">
				<Pane>
					<Input
						type="text"
						label="Address line 1"
						name="addressLine1"
						control={control}
						marginBottom={minorScale(4)}
						placeholder="Address line 1"
					/>
					<Input
						type="text"
						label="Address line 2"
						name="addressLine2"
						control={control}
						marginBottom={minorScale(4)}
						placeholder="Address line 2"
					/>
				</Pane>
				<Location />
			</Pane>
			<Pane display="flex" gap={16}>
				<Input
					type="text"
					label="State"
					name="state"
					control={control}
					placeholder="State"
				/>
				<Input
					type="text"
					label="City"
					name="city"
					control={control}
					placeholder="City"
				/>
				<Input
					type="number"
					label="Zip Code"
					name="zipCode"
					control={control}
					placeholder="Zip Code"
				/>
			</Pane>
			<Pane display="flex" gap={16}>
				<Input
					type="text"
					label="Office Name"
					name="officeName"
					control={control}
					placeholder="Office Name"
				/>
				<Input
					type="text"
					label="Phone"
					name="phone"
					control={control}
					placeholder="+998977784914"
				/>
			</Pane>
		</Dialog>
	)
}

export default AddLocation
