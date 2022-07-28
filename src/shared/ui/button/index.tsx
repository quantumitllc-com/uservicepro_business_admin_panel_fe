import React, { FC } from "react"
import { Button, ButtonProps, majorScale } from "evergreen-ui"

interface MyButtonProps extends ButtonProps {
	small?: string
}

const MyButton: FC<MyButtonProps> = ({ small }, props) => (
	<Button
		fontSize="16px"
		fontFamily="var(--lexend)"
		size="large"
		width={small ? majorScale(21) : majorScale(37)}
		{...props}
	/>
)

export default MyButton
