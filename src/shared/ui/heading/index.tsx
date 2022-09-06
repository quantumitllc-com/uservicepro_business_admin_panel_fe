import { FC } from "react"
import { Heading, HeadingProps } from "evergreen-ui"

const MyHeading: FC<HeadingProps> = (props) => (
	<Heading
		color="var(--black)"
		fontFamily="var(--lexend)"
		fontWeight={500}
		{...props}
	/>
)

export default MyHeading
