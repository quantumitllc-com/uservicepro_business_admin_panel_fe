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
	SelectMenu,
} from "evergreen-ui"
import { Controller } from "react-hook-form"
import { useEffect } from "react"

import MyButton from "components/button"
import MyLabel from "components/label"
import { Input } from "components/input"
import { useAdd } from "./useAdd"

export const AddEmpolyee = () => {
	const {
		form,
		services,
		onSubmit,
		isLoading,
		isOfficeId,
		isShownAdd,
		locationData,
		setIsShownAdd,
		mutateServices,
		handleChangeFile,
		locationIsLoading,
		isLoadingServices,
	} = useAdd()

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
											name={field.name}
											marginTop={minorScale(2)}
											placeholder="None selected"
											isLoading={locationIsLoading}
											items={locationData.content}
											onChange={(selected) => {
												field.onChange(selected.id)
												mutateServices(selected.id)
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
						{isOfficeId.length > 0 ? (
							<Pane gap={8} display="flex" flexDirection="column">
								<MyLabel>Services</MyLabel>
								<Controller
									name="officeServiceIds"
									control={form.control}
									render={({
										field,
										formState: { errors },
									}) => (
										<>
											<SelectMenu
												isMultiSelect
												options={services}
												selected={field.value}
												onSelect={(item) => {
													const services = [
														...form.getValues(
															"officeServiceIds",
														),
														item.value as string,
													]

													form.setValue(
														"officeServiceIds",
														services,
													)
												}}
												onDeselect={(item) => {
													const filtered = form
														.getValues(
															"officeServiceIds",
														)
														.filter(
															(v) =>
																v !==
																item.value,
														)
													form.setValue(
														"officeServiceIds",
														filtered,
													)
												}}
												title="Select multiple services"
											>
												<Button
													width="100%"
													type="button"
													height="40px"
													disabled={isLoadingServices}
												>
													{field.value?.length === 0
														? "Select services"
														: `selected ${field.value?.length} services `}
												</Button>
											</SelectMenu>
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
							</Pane>
						) : (
							<Pane />
						)}
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
