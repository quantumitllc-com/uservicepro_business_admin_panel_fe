import MyBadge from "components/badge"
import MyHeading from "components/heading"
import { Table } from "components/table"
import { Pane } from "evergreen-ui"
import { useOrders } from "./useOrders"

export const Orders = () => {
	const {
		data,
		columns,
		isLoading,
		isFetching,
		handleDetail,
		handleNavigate,
	} = useOrders()

	return (
		<Pane>
			<Pane
				display="flex"
				alignItems="center"
				marginBottom="10px"
				justifyContent="space-between"
			>
				<MyHeading fontSize={24} fontWeight={500}>
					Orders
				</MyHeading>
				<MyBadge
					height={30}
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
			<Pane>
				<Table
					noTableHead
					columns={columns}
					data={[...data.data, ...data.data]}
					isLoading={isLoading}
					isFetching={isFetching}
					onRowClicked={handleDetail}
				/>
			</Pane>
		</Pane>
	)
}
