import React, { FC } from "react"
import { Button, ButtonProps, majorScale } from "evergreen-ui"

const MyButton: FC<ButtonProps> = props => {
	return (
		<Button
			fontSize="16px"
			fontFamily="var(--lexend)"
			size="large"
			width={majorScale(37)}
			{...props}
		/>
	)
}

export default MyButton