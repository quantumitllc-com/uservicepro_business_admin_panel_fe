/* eslint-disable react/button-has-type */
import { CrossIcon, Pane } from "evergreen-ui"
import styles from "./styles.module.scss"

interface IChip {
	title: string
	disabled?: boolean
	onClick: () => void
}

export const Chip = ({ title, onClick, disabled = false }: IChip) => (
	<Pane
		height="32px"
		display="flex"
		color="#FFFFFF"
		paddingX="15px"
		background="#A7B4D3"
		borderRadius="96px"
		width="fit-content"
		alignItems="center"
		whiteSpace="nowrap"
		className={styles.container}
	>
		{title}
		<button disabled={disabled} onClick={onClick}>
			<CrossIcon size={12} />
		</button>
	</Pane>
)
