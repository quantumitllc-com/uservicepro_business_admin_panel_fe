import { Button, ChevronLeftIcon } from "evergreen-ui"
import { useNavigate } from "react-router-dom"

import styles from "./styles.module.scss"

function ButtonBack() {
	const navigate = useNavigate()

	return (
		<Button
			position="absolute"
			top="28px"
			left="28px"
			border="none"
			fontFamily="var(--lexend)"
			backgroundColor="transparent"
			className={styles.button}
			iconBefore={<ChevronLeftIcon size={15} color="var(--grey)" />}
			color="var(--grey)"
			onClick={() => navigate(-1)}
		>
			Back
		</Button>
	)
}

export default ButtonBack
