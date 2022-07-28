import { FC } from "react"
import { Text, TextProps } from "evergreen-ui"

const MyText: FC<TextProps> = (props) => (
	<Text {...props} fontFamily="var(--lexend)" />
)

export default MyText
