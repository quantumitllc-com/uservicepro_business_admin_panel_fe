import { minorScale, Pane } from "evergreen-ui"
import MyText from "components/text"
import MyHeading from "components/heading"
import { constants } from "./constant"

const OneOffice = () => (
	<Pane
		backgroundColor="var(--white)"
		border="var(--stroke-block) 1px solid"
		borderRadius={6}
		width="100%"
	>
		<Pane
			width="100%"
			borderBottom="var(--stroke-block) 1px solid"
			paddingX={minorScale(7)}
			paddingY={minorScale(3)}
		>
			<MyText color="var(--grey)">Office details</MyText>
		</Pane>
		<Pane
			display="flex"
			columnGap="100px"
			rowGap="50px"
			flexWrap="wrap"
			padding={minorScale(7)}
		>
			{constants.map((block: any) => (
				<Pane
					key={block}
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
				>
					<MyHeading>{block.title}</MyHeading>
					<MyText marginLeft={minorScale(3)} color="var(--grey)">
						{block.text}
					</MyText>
				</Pane>
			))}
		</Pane>
	</Pane>
)

export default OneOffice
