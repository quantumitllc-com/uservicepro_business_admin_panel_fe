import React, { FC } from "react"
import { Button, ButtonProps, majorScale } from "evergreen-ui"

interface MyButtonProps extends ButtonProps {
    small?: string
}

const MyButton: FC<MyButtonProps> = (props) => {
    return (
        <Button
            fontSize="16px"
            fontFamily="var(--lexend)"
            size="large"
            width={props.small ? majorScale(21) : majorScale(37)}
            {...props}
        />
    )
}

export default MyButton
