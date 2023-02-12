import { minorScale, Pane } from "evergreen-ui"

import MyText from "components/text"
import { Spinner } from "components/spinner"
import { useDetail } from "./useDetail"
import Card from "./components/card"
import Edit from "../edit"

const OfficeDetail = () => {
	const { data, isLoading, value, toggle } = useDetail()

	return (
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
			<Pane padding={minorScale(7)}>
				<Pane display="flex" rowGap="32px" flexWrap="wrap">
					{isLoading ? (
						<Spinner />
					) : (
						<Card isShown={value} data={data} />
					)}
				</Pane>
				<Edit values={data} toggleDetail={toggle} />
			</Pane>
		</Pane>
	)
}

export default OfficeDetail
