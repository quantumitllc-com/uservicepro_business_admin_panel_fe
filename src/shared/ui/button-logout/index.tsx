import { Button } from "evergreen-ui"
import { useNavigate } from "react-router-dom"

import styles from "./styles.module.scss"
import { ReactComponent as Logout } from "./logout.svg"

const ButtonLogout = () => {
	const navigate = useNavigate()

	return (
		<Button
			border="none"
			fontFamily="var(--lexend)"
			backgroundColor="transparent"
			className={styles.button}
			iconBefore={<Logout />}
			color="var(--grey)"
			onClick={() => navigate("/sign-in", { replace: true })}
		>
			Logout
		</Button>
	)
}

export default ButtonLogout