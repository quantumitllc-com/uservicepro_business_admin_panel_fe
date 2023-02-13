import { EditIcon, minorScale, Pane, Switch } from "evergreen-ui"
import { useEffect } from "react"

import MyText from "components/text"
import { Input } from "components/input"
import { getBooleanSign } from "utils/getBooleanSign"
import MyLabel from "components/label"
import MyButton from "components/button"
import { FormTypes } from "types/dashboard/offices/detail"
import { labels } from "../constatns"
import { useEdit } from "./useEdit"

export interface EditProps {
	toggleDetail: () => void
	values: FormTypes
}

const Edit = ({ toggleDetail, values }: EditProps) => {
	const {
		form,
		onSubmit,
		isLoading,
		value,
		toggle,
		handleChangeMainOffice,
		checked,
	} = useEdit({ toggleDetail })

	useEffect(() => {
		form.reset(values)
	}, [form, values])

	return (
		<>
			<Pane
				display={value ? "flex" : "none"}
				rowGap="32px"
				flexWrap="wrap"
			>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 30%"
				>
					<Input
						name="name"
						control={form.control}
						label={<MyLabel>{labels.name}</MyLabel>}
					/>
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 30%"
				>
					<Input
						name="state"
						control={form.control}
						label={<MyLabel>{labels.state}</MyLabel>}
					/>
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 30%"
				>
					<Input
						name="city"
						control={form.control}
						label={<MyLabel>{labels.city}</MyLabel>}
					/>
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 30%"
				>
					<Input
						type="number"
						name="zipCode"
						control={form.control}
						label={<MyLabel>{labels.zipCode}</MyLabel>}
					/>
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 30%"
				>
					<Input
						name="addressLine1"
						control={form.control}
						label={<MyLabel>{labels.addressLine1}</MyLabel>}
					/>
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 30%"
				>
					<Input
						name="addressLine2"
						control={form.control}
						label={<MyLabel>{labels.addressLine2}</MyLabel>}
					/>
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 30%"
				>
					<Input
						name="phone"
						control={form.control}
						label={<MyLabel>{labels.phone}</MyLabel>}
					/>
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 30%"
				>
					<MyLabel>{labels.rating}</MyLabel>
					<MyText marginLeft={minorScale(3)} color="var(--grey)">
						{values.rating}
					</MyText>
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 30%"
				>
					<MyLabel>{labels.isMain}</MyLabel>
					{!values.isMain ? (
						<Switch
							checked={checked}
							onChange={handleChangeMainOffice}
						/>
					) : (
						<MyText marginLeft={minorScale(3)} color="var(--grey)">
							{getBooleanSign(values.isMain)}
						</MyText>
					)}
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 30%"
				>
					<MyLabel>{labels.isPhoneVerified}</MyLabel>
					<MyText marginLeft={minorScale(3)} color="var(--grey)">
						{getBooleanSign(values.isPhoneVerified)}
					</MyText>
				</Pane>
			</Pane>
			{value ? (
				<Pane display="flex" gap={8} marginTop={minorScale(7)}>
					<MyButton
						small="true"
						appearance="outlined"
						onClick={() => {
							toggle()
							toggleDetail()
						}}
					>
						Cancel
					</MyButton>
					<MyButton
						onClick={
							form.formState.isDirty
								? form.handleSubmit(onSubmit)
								: () => {
										toggle()
										toggleDetail()
								  }
						}
						small="true"
						appearance="outlined"
						isLoading={isLoading}
					>
						Save
					</MyButton>
				</Pane>
			) : (
				<MyButton
					marginTop={minorScale(7)}
					iconBefore={EditIcon}
					small="true"
					appearance="primary"
					backgroundColor="var(--green)"
					onClick={() => {
						toggle()
						toggleDetail()
					}}
				>
					Edit
				</MyButton>
			)}
		</>
	)
}

export default Edit
