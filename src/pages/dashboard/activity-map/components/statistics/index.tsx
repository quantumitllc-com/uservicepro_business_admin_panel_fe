import MyBadge from "components/badge"
import MyHeading from "components/heading"
import { Pane, Text } from "evergreen-ui"
import { useStatistics } from "./useStatistics"

export const Statistics = () => {
	const { data, handleNavigate } = useStatistics()
	return (
		<Pane>
			<MyHeading fontSize={24} fontWeight={500}>
				Statistics of sales
			</MyHeading>
			<MyBadge
				height={30}
				marginY="10px"
				display="flex"
				paddingLeft={15}
				cursor="pointer"
				paddingRight={15}
				borderRadius={20}
				alignItems="center"
				width="fit-content"
				justifyContent="center"
				onClick={handleNavigate}
				backgroundColor="var(--black)"
			>
				See more
			</MyBadge>
			<Pane display="flex" flexDirection="column">
				<Pane
					display="flex"
					gap="10px"
					fontWeight="700"
					alignItems="center"
				>
					Total Income:
					<Text
						fontSize="42px"
						color="#3D8798"
						fontWeight="500"
						lineHeight="52px"
					>
						${data.data.income}
					</Text>
				</Pane>
				<Pane
					display="flex"
					gap="10px"
					fontWeight="700"
					alignItems="center"
				>
					Total Sales:
					<Text
						fontSize="42px"
						color="#3D8798"
						fontWeight="500"
						lineHeight="52px"
					>
						{data.data.sales}
					</Text>
				</Pane>
			</Pane>
		</Pane>
	)
}
