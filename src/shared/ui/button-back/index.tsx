import React from "react"
import { Button, ChevronLeftIcon } from "evergreen-ui"
import { useNavigate } from "react-router-dom"

import styles from "./styles.module.scss"

const ButtonBack = () => {
	const navigate = useNavigate()

	return (
		<Button
			iconBefore={<ChevronLeftIcon size={15} color="var(--grey)" />}
			color="var(--grey)"
			className={styles.button}
			onClick={() => navigate(-1)}
		>
			Back
		</Button>
	)
}

export default ButtonBack