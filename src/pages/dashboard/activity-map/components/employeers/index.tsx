import MyBadge from "components/badge"
import MyHeading from "components/heading"
import { Table } from "components/table"
import { Pane } from "evergreen-ui"
import { useEmployeers } from "./useEmployeers"

export const Employeers = () => {
	const {
		data,
		columns,
		isLoading,
		isFetching,
		handleDetail,
		handleNavigate,
	} = useEmployeers()

	return (
		<Pane>
			<Pane
				display="flex"
				marginBottom="10px"
				alignItems="center"
				justifyContent="space-between"
			>
				<MyHeading fontSize={24} fontWeight={500}>
					Number of Employeers
				</MyHeading>
				<MyBadge
					height={30}
					marginY="10px"
					display="flex"
					paddingLeft={15}
					cursor="pointer"
					paddingRight={15}
					borderRadius={20}
					width="fit-content"
					alignItems="center"
					justifyContent="center"
					onClick={handleNavigate}
					backgroundColor="var(--black)"
				>
					See more
				</MyBadge>
			</Pane>
			<Table
				columns={columns}
				data={data.content}
				isLoading={isLoading}
				isFetching={isFetching}
				onRowClicked={handleDetail}
			/>
		</Pane>
	)
}
