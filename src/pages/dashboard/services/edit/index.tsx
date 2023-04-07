import { Dialog, EditIcon, Pane, Textarea } from "evergreen-ui"
import { useState } from "react"

import useBoolean from "hooks/useBoolean"
import MyText from "components/text"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { placeholder } from "utils/imagePlaceholder"
import { ReactComponent as ImgIcon } from "./image.svg"
import styles from "./styles.module.scss"
import { useEdit } from "./useEdit"

export const Edit = ({ data }: any) => {
	const { value, setValue } = useBoolean(false)
	const [description, setDescription] = useState(data.description)
	const { isLoading, selectPhoto, photoUrl } = useEdit()

	console.log(photoUrl)

	return (
		<Pane>
			<Dialog
				isShown={value}
				title="Edit service"
				onCloseComplete={() => setValue(false)}
				confirmLabel="Save"
				// hasFooter={false}
				// onConfirm={(close) => {
				// 	handleDelete(id)
				// 	close()
				// }}
			>
				<Pane>
					<Pane display="flex" gap={24} marginBottom={24}>
						<label htmlFor="service-image">
							<ImgIcon />
							<input
								accept="image/png, image/jpeg"
								onChange={selectPhoto}
								type="file"
								id="service-image"
								className={styles.hidden}
							/>
						</label>
						<LazyLoadImage
							width="171px"
							effect="blur"
							height="178px"
							alt="picture"
							placeholderSrc={placeholder}
							src={data.pictureUrl}
						/>
					</Pane>
					<Pane marginBottom={24}>
						<Pane>
							<MyText>Type:</MyText>
							<MyText color="var(--black)"> png, jpeg</MyText>
						</Pane>
						<Pane>
							<MyText>Max size:</MyText>
							<MyText color="var(--black)"> 3MB</MyText>
						</Pane>
					</Pane>
					<Pane>
						<MyText>Description</MyText>
						<Textarea value={description} />
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
