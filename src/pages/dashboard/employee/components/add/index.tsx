import {
	AddIcon,
	Pane,
	Dialog,
	FilePicker,
	Combobox,
	minorScale,
	Button,
	majorScale,
	Text,
	ErrorIcon,
} from "evergreen-ui"
import { Controller } from "react-hook-form"
import { useEffect } from "react"

import MyButton from "components/button"
import MyLabel from "components/label"
import { Input } from "components/input"
import { useAdd } from "./useAdd"

export interface AddEmployeeProps {
	officeId?: string
}

export const AddEmpolyee = ({ officeId }: AddEmployeeProps) => {
	const {
		form,
		onSubmit,
		isLoading,
		isShownAdd,
		locationData,
		setIsShownAdd,
		handleChangeFile,
		locationIsLoading,
	} = useAdd()

	useEffect(() => {
		if (officeId) {
			form.setValue("officeId", officeId)
		}
	}, [form, officeId])

	return (
		<>
			<MyButton
				iconBefore={AddIcon}
				small="true"
				appearance="primary"
				backgroundColor="var(--green)"
				onClick={() => setIsShownAdd(true)}
			>
				Add employee
			</MyButton>
			<Dialog
				width={700}
				hasFooter={false}
				isShown={isShownAdd}
				title="Employee info"
				onCloseComplete={() => setIsShownAdd(false)}
				confirmLabel="Add employee"
			>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<Pane gap={14} display="grid" gridTemplateColumns="1fr 1fr">
						<Input
							name="email"
							width="100%"
							control={form.control}
							label={<MyLabel>Employee email</MyLabel>}
							placeholder="email@gmail.com"
						/>
						<Input
							name="ssn"
							width="100%"
							control={form.control}
							label={<MyLabel>SSN</MyLabel>}
							placeholder="12345"
						/>
						<Input
							width="100%"
							name="phone"
							control={form.control}
							placeholder="+1 234 56 78"
							label={<MyLabel>Phone number</MyLabel>}
						/>
						{!officeId && (
							<div>
								<MyLabel>Serving Location</MyLabel>
								<Controller
									name="officeId"
									control={form.control}
									render={({
										field,
										formState: { errors },
									}) => (
										<>
											<Combobox
												openOnFocus
												height={40}
												width="100%"
												name={field.name}
												marginTop={minorScale(2)}
												placeholder="None selected"
												isLoading={locationIsLoading}
												items={locationData.content}
												onChange={(selected) => {
													field.onChange(selected.id)
												}}
												inputProps={{
													isInvalid:
														!!errors[field.name],
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
													{
														errors[field.name]
															?.message as string
													}
												</Text>
											)}
										</>
									)}
								/>
							</div>
						)}
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
												{
													errors[field.name]
														?.message as string
												}
											</Text>
										)}
									</>
								)}
							/>
						</Pane>
						<Pane />
						<Pane
							gap={8}
							display="flex"
							marginTop={majorScale(2)}
							marginBottom={majorScale(4)}
						>
							<Button
								height={40}
								type="submit"
								disabled={isLoading}
								appearance="primary"
							>
								Add employee
							</Button>
							<Button
								height={40}
								appearance="minimal"
								onClick={() => setIsShownAdd(false)}
							>
								Close
							</Button>
						</Pane>
					</Pane>
				</form>
			</Dialog>
		</>
	)
}
