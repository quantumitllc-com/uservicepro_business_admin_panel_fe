import { Gallery, Item } from "react-photoswipe-gallery"
import { minorScale, Pane, SavedIcon } from "evergreen-ui"

import { getFormatOfMessage } from "utils/getFormatOfMessage"
import MyText from "components/text"
import { Image } from "./image"
import styles from "./styles.module.scss"

export const getMessageType = (text: string, userType: string) => {
	switch (getFormatOfMessage(text)) {
		case "png":
		case "jpeg":
		case "jpg":
		case "webp":
			return (
				<Gallery withDownloadButton>
					<Item
						original={text}
						thumbnail={text}
						width="800"
						height="600"
					>
						{({ ref, open }) => (
							<Image ref={ref} src={text} open={open} />
						)}
					</Item>
				</Gallery>
			)
		case "pdf":
		case "doc":
		case "docx":
			return (
				<a rel="noreferrer" target="_blank" href={text}>
					<SavedIcon
						size={100}
						color={
							userType === "sender"
								? "var(--dark-green)"
								: "var(--black)"
						}
					/>
				</a>
			)
		default:
			return (
				<Pane
					backgroundColor={
						userType === "sender"
							? "var(--dark-green)"
							: "var(--white)"
					}
					className={
						userType === "sender" ? styles.sender : styles.receiver
					}
					padding={minorScale(3)}
					border="1px solid var(--stroke-block)"
				>
					<MyText
						color={
							userType === "sender"
								? "var(--white)"
								: "var(--black)"
						}
					>
						{text}
					</MyText>
				</Pane>
			)
	}
}
