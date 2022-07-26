import { FC } from "react"
import { Label, LabelProps } from "evergreen-ui"

const MyLabel: FC<LabelProps> = (props) => {
    return (
        <Label
            fontFamily="var(--lexend)"
            fontSize={16}
            fontWeight={400}
            {...props}
        />
    )
}

export default MyLabel
