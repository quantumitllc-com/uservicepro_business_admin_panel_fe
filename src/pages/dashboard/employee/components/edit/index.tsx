/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/destructuring-assignment */
import { useEffect } from "react"
import {
	Pane,
	EditIcon,
	Combobox,
	Text,
	ErrorIcon,
	minorScale,
	FilePicker,
	DownloadIcon,
} from "evergreen-ui"
import MyButton from "components/button"
import { Controller } from "react-hook-form"
import { EditFormTypes } from "types/dashboard/employee"
import { Input } from "components/input"
import MyLabel from "components/label"
import { useEdit } from "./useEdit"

export const Edit = (values: EditFormTypes) => {
	const {
		form,
		value,
		toggle,
		onSubmit,
		isLoading,
		locationData,
		handleChangeFile,
		locationIsLoading,
	} = useEdit()

	useEffect(() => {
		form.reset(values)
	}, [form, values])

	return (
		<>
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
										(v: any) => v?.id === field?.value,
									)}
									marginTop={minorScale(2)}
									placeholder="None selected"
									isLoading={locationIsLoading}
									items={locationData.content}
									onChange={(selected) => {
										field.onChange(selected?.id)
									}}
									inputProps={{
										isInvalid: !!errors[field.name],
									}}
									itemToString={(item) =>
										item ? item?.name : ""
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
			{value ? (
				<Pane gap={8} display="flex" flexDirection="column">
					<MyLabel>Attachment File</MyLabel>
					<Controller
						name="attachedFileUrl"
						control={form.control}
						render={({ field, formState: { errors } }) => (
							<>
								<FilePicker
									{...field}
									height={40}
									width={310}
									onChange={handleChangeFile}
									placeholder="Select the file here!"
								/>
								{errors[field.name] && (
									<Text
										color="D14343"
										display="flex"
										fontSize={12}
										alignItems="center"
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
				</Pane>
			) : (
				<MyButton
					iconBefore={DownloadIcon}
					small="true"
					appearance="outlined"
				>
					<a href={values.attachedFileUrl} target="_blank">
						Download PDF file
					</a>
				</MyButton>
			)}
			<Pane display="flex" justifyContent="end" gap={8} marginTop="10px">
				{value ? (
					<>
						<MyButton small="true" onClick={toggle}>
							Cancel
						</MyButton>
						<MyButton
							type="submit"
							small="true"
							disabled={isLoading}
							onClick={form.handleSubmit(onSubmit)}
						>
							Save
						</MyButton>
					</>
				) : (
					<MyButton
						small="true"
						onClick={toggle}
						iconBefore={EditIcon}
					>
						Edit
					</MyButton>
				)}
			</Pane>
		</>
	)
}
