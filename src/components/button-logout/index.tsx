import { Button, ButtonProps } from "evergreen-ui"
import { FC } from "react"

import styles from "./styles.module.scss"
import { ReactComponent as Logout } from "./logout.svg"

const ButtonLogout: FC<ButtonProps> = (props) => (
	<Button
		border="none"
		fontFamily="var(--lexend)"
		backgroundColor="transparent"
		className={styles.button}
		iconBefore={<Logout />}
		color="var(--grey)"
		{...props}
	>
		Logout
	</Button>
)

export default ButtonLogout
