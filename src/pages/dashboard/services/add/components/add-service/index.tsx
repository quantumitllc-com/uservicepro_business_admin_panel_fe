import { Dialog, Pane } from "evergreen-ui"
import { Controller } from "react-hook-form"

import MyButton from "components/button"
import MyText from "components/text"
import { MyTextarea } from "components/textarea"
import { ReactComponent as ChooseIcon } from "./icons/chooseImage.svg"
import { ReactComponent as TemplateIcon } from "./icons/template.svg"
import { useAddService } from "./useAddService"
import styles from "../../../styles.module.scss"

export const AddService = ({ data }: any) => {
	const {
		value,
		setValue,
		form,
		selectPhoto,
		isLoading,
		onSubmit
	} = useAddService({ data })

	return (
		<Pane>
			<Dialog
				isShown={value}
				title="Add service"
				onCloseComplete={() => setValue(false)}
				confirmLabel="Save"
				footer={
					<MyButton
						small="true"
						appearance="primary"
						isLoading={isLoading}
						onClick={form.handleSubmit(onSubmit)}
					>
						Save
					</MyButton>
				}
			>
				<Pane>
					<Pane display="flex" alignItems="center" gap={24} marginBottom={24}>
						<Pane display="flex" flexDirection="column">
							<MyText marginBottom={4}>Upload photo</MyText>
							{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
							<label htmlFor="service-image">
								<ChooseIcon />
								<Controller
									control={form.control}
									name="pictureUrl"
									render={() => (
										<input
											accept="image/png, image/jpeg"
											onChange={selectPhoto}
											type="file"
											id="service-image"
											className={styles.hidden}
										/>
									)}
								/>
							</label>
						</Pane>
						{/*<MyText>OR</MyText>*/}
						{/*<Pane display="flex" flexDirection="column">*/}
						{/*	<MyText marginBottom={4}>Use template</MyText>*/}
						{/*	<Pane>*/}
						{/*		<TemplateIcon />*/}
						{/*	</Pane>*/}
						{/*</Pane>*/}
					</Pane>
					<Pane marginBottom={24}>
						<Pane>
							<MyText>Type:</MyText>
							<MyText color="var(--black)"> png, jpeg</MyText>
						</Pane>
						<Pane>
							<MyText>Max size:</MyText>
							<MyText color="var(--black)"> 2MB</MyText>
						</Pane>
					</Pane>
					<Pane>
						<MyText>Description</MyText>
						<MyTextarea
							name="description"
							control={form.control}
						/>
					</Pane>
				</Pane>
			</Dialog>
			<MyButton
				small="true"
				appearance="primary"
				onClick={() => setValue(true)}
			>
				Add
			</MyButton>
		</Pane>
	)
}