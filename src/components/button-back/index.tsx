import { Button, ButtonProps, ChevronLeftIcon } from "evergreen-ui"
import { useNavigate } from "react-router-dom"
import { FC } from "react"

import styles from "./styles.module.scss"

const ButtonBack: FC<ButtonProps> = (props) => {
	const navigate = useNavigate()

	return (
		<Button
			{...props}
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
