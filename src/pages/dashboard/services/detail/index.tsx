import { Dialog, Pane } from "evergreen-ui"

import MyText from "components/text"
import styles from "../edit/styles.module.scss"

export const Detail = ({ data, value, setValue }: any) => {
	// console.log(value)

	return (
		<Pane>
			<Dialog
				isShown={value}
				title="Edit service"
				onCloseComplete={() => setValue(false)}
				confirmLabel="Save"
				// onConfirm={(close) => {
				// 	handleDelete(id)
				// 	close()
				// }}
			>
				<Pane>
					<Pane marginBottom={24}>
						<label htmlFor="service-image">
							{/*<ImgIcon />*/}
							<input
								accept="image/png, image/jpeg"
								// onChange={selectPhoto}
								type="file"
								id="service-image"
								className={styles.hidden}
							/>
						</label>
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
						{/*<Textarea value={data.description} />*/}
					</Pane>
				</Pane>
			</Dialog>
		</Pane>
	)
}
