import { minorScale, Pane } from "evergreen-ui"

import MyText from "components/text"
import { FormTypes } from "types/dashboard/offices/detail"
import { getBooleanSign } from "utils/getBooleanSign"
import MyLabel from "components/label"
import { labels } from "../../../constatns"

interface CardProps {
	data: FormTypes
	isShown: boolean
}

const Card = ({ data, isShown }: CardProps) => (
	<>
		{Object.keys(labels).map((key) => (
			<Pane
				key={key}
				gap={minorScale(3)}
				display={isShown ? "flex" : "none"}
				flexDirection="column"
				flex="1 1 30%"
			>
				<MyLabel>{labels[key as keyof typeof labels]}</MyLabel>
				<MyText marginLeft={minorScale(3)} color="var(--grey)">
					{getBooleanSign(data[key as keyof typeof labels])}
				</MyText>
			</Pane>
		))}
	</>
)

export default Card
