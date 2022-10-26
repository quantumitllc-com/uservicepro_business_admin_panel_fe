import { FC } from "react"
import { Button, ButtonProps, majorScale } from "evergreen-ui"

import styles from "./styles.module.scss"

interface MyButtonProps extends ButtonProps {
	small?: string
	appearance?: string
}

const MyButton: FC<MyButtonProps> = (props) => {
	const { small, appearance } = props

	return (
		<Button
			className={appearance === "danger" ? styles.danger : ""}
			fontSize="16px"
			fontFamily="var(--lexend)"
			size="large"
			paddingX={small ? majorScale(4) : majorScale(15)}
			{...props}
		/>
	)
}

export default MyButton
