import { Heading, minorScale, Pane } from "evergreen-ui"

import Logo from "components/logo"
import styles from "./styles.module.scss"

const ChooseChat = () => {
	return (
		<Pane className={styles.container}>
			<Logo marginBottom={minorScale(7)} />
			<Heading marginBottom={minorScale(7)} size={900}>
				Choose chat
			</Heading>
		</Pane>
	)
}

export default ChooseChat
