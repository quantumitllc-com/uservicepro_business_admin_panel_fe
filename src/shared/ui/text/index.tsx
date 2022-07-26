import { FC } from "react"
import { Text, TextProps } from "evergreen-ui"

const MyText: FC<TextProps> = (props) => {
    return <Text {...props} fontFamily="var(--lexend)" />
}

export default MyText
