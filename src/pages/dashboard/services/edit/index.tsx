import { Dialog, EditIcon, Pane } from "evergreen-ui"
import { Controller } from "react-hook-form"

import MyText from "components/text"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { placeholder } from "utils/imagePlaceholder"
import MyButton from "components/button"
import { MyTextarea } from "components/textarea"
import { ReactComponent as ImgIcon } from "./image.svg"
import styles from "../styles.module.scss"
import { useEdit } from "./useEdit"

export const Edit = ({ data }: any) => {
	const {
		isLoading,
		selectPhoto,
		photoUrl,
		form,
		onSubmit,
		value,
		setValue,
	} = useEdit({ data })

	return (
		<Pane>
			<Dialog
				isShown={value}
				title="Edit service"
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
					<Pane display="flex" gap={24} marginBottom={24}>
						{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
						<label htmlFor="service-image">
							<ImgIcon />
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
						<LazyLoadImage
							width="171px"
							effect="blur"
							height="178px"
							alt="picture"
							placeholderSrc={placeholder}
							src={!photoUrl ? data.pictureUrl : photoUrl}
						/>
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
						<MyTextarea name="description" control={form.control} />
					</Pane>
				</Pane>
			</Dialog>
			<Pane
				onClick={() => setValue(true)}
				borderRadius={4}
				padding={8}
				backgroundColor="rgba(29, 185, 29, 0.1)"
			>
				<EditIcon color="var(--green)" size={25} />
			</Pane>
		</Pane>
	)
}
