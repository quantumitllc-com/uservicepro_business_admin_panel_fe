import { Avatar, minorScale, Pane, PaneProps } from "evergreen-ui"

import { Spinner } from "components/spinner"
import { getTokens } from "utils/getTokens"
import MyHeading from "components/heading"
import { useDetail } from "pages/dashboard/offices/detail/useDetail"
import { ReactComponent as Main } from "./main-office.svg"
import SwitchOffice from "../switch-office"

const Title = (props: PaneProps) => {
	const { data, isLoading } = useDetail()
	const tokens = getTokens()

	return (
		<Pane
			{...props}
			padding={minorScale(7)}
			backgroundColor="var(--white)"
			border="var(--stroke-block) 1px solid"
			borderRadius={6}
		>
			{isLoading ? (
				<Spinner />
			) : (
				<Pane>
					<Pane display="flex" justifyContent="space-between">
						<Pane gap={12} display="flex" alignItems="center">
							<Avatar size={75} srs={tokens.pictureUrl} />
							<MyHeading fontSize={24}>{data.name}</MyHeading>
						</Pane>
						{data.isMain ? <Main /> : <SwitchOffice />}
					</Pane>
				</Pane>
			)}
		</Pane>
	)
}

export default Title
