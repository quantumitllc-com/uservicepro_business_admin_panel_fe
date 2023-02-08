import { useEffect } from "react"
import {
	Pane,
	EditIcon,
	Combobox,
	Text,
	ErrorIcon,
	minorScale,
} from "evergreen-ui"
import MyButton from "components/button"
import { Controller } from "react-hook-form"
import { EditFormTypes } from "types/dashboard/employee"
import useBoolean from "hooks/useBoolean"
import { Input } from "components/input"
import MyLabel from "components/label"
import { useEdit } from "./useEdit"

export const Edit = (values: EditFormTypes) => {
	const { value, toggle } = useBoolean()
	const { form, onSubmit, isLoading, locationData, locationIsLoading } =
		useEdit()

	useEffect(() => {
		form.reset(values)
	}, [form, values])

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<Pane gap={14} display="grid" gridTemplateColumns="1fr 1fr">
				<Input
					name="ssn"
					width="100%"
					disabled={!value}
					control={form.control}
					label={<MyLabel>SSN</MyLabel>}
					placeholder="12345"
				/>
				<div>
					<MyLabel>Serving Location</MyLabel>
					<Controller
						name="officeId"
						control={form.control}
						render={({ field, formState: { errors } }) => (
							<>
								<Combobox
									openOnFocus
									height={40}
									width="100%"
									disabled={!value}
									name={field.name}
									selectedItem={locationData.content.find(
										(v: any) => v.id === field.value,
									)}
									marginTop={minorScale(2)}
									placeholder="None selected"
									isLoading={locationIsLoading}
									items={locationData.content}
									onChange={(selected) => {
										field.onChange(selected.id)
									}}
									inputProps={{
										isInvalid: !!errors[field.name],
									}}
									itemToString={(item) =>
										item ? item.state : ""
									}
								/>
								{errors[field.name] && (
									<Text
										color="D14343"
										display="flex"
										fontSize={12}
										alignItems="center"
										marginTop={5}
									>
										<ErrorIcon
											color="danger"
											marginRight={8}
										/>
										{errors[field.name]?.message as string}
									</Text>
								)}
							</>
						)}
					/>
				</div>
			</Pane>
			<Pane display="flex" justifyContent="end" gap={8}>
				{value ? (
					<>
						<MyButton small="true" onClick={toggle}>
							Cancel
						</MyButton>
						<MyButton
							small="true"
							onClick={toggle}
							disabled={isLoading}
						>
							Save
						</MyButton>
					</>
				) : (
					<MyButton
						small="true"
						type="button"
						onClick={toggle}
						iconBefore={EditIcon}
					>
						Edit
					</MyButton>
				)}
			</Pane>
		</form>
	)
}
