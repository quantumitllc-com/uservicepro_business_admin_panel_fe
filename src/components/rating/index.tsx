import { FC } from "react"
import { CrossIcon, Pane, PaneProps } from "evergreen-ui"

import MyHeading from "../heading"
import MyText from "../text"
import { ReactComponent as Like } from "./like.svg"

export interface RatingProps extends PaneProps {
	value: string | number | null
}

const Rating: FC<RatingProps> = ({ value }) => (
	<Pane display="flex" alignItems="center" gap={10}>
		<Like />
		<Pane display="flex" flexDirection="column">
			<MyHeading>Rating</MyHeading>
			<MyText>{value || <CrossIcon color="var(--red)" />}</MyText>
		</Pane>
	</Pane>
)

export default Rating
