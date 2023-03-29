import {
	IconButton,
	minorScale,
	Pane,
	SendMessageIcon,
	PaperclipIcon,
} from "evergreen-ui"

import { MyInput } from "components/input"
import { Spinner } from "components/spinner"
import styles from "./styles.module.scss"
import { useFooter } from "./useFooter"

const FooterChat = () => {
	const {
		handleSendMessage,
		message,
		setMessage,
		file,
		selectFile,
		isLoading,
	} = useFooter()

	return (
		<Pane
			alignItems="center"
			justifyContent="space-between"
			display="flex"
			padding={minorScale(5)}
			borderTop="1px solid var(--stroke-block)"
			gap={20}
		>
			<label htmlFor="file" className={styles.label}>
				<PaperclipIcon
					className={styles.clip}
					size={30}
					color="var(--grey)"
				/>
				<input
					onChange={selectFile}
					accept="image/png, image/jpeg, image/jpg, image/webp, .doc, .docx, .pdf"
					type="file"
					id="file"
					className={styles.hidden}
				/>
			</label>
			<MyInput
				disabled={!!file || isLoading}
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				width="100%"
				placeholder="Write a message"
			/>
			<Pane>
				{isLoading ? (
					<Spinner />
				) : (
					<IconButton
						disabled={!message || isLoading}
						onClick={handleSendMessage}
						className={styles.send}
						size="large"
						border="none"
						borderRadius={50}
						backgroundColor="var(--dark-green)"
						icon={<SendMessageIcon color="var(--white)" />}
					/>
				)}
			</Pane>
		</Pane>
	)
}

export default FooterChat
