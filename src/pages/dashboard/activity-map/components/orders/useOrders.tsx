import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import { Pane, Text } from "evergreen-ui"
import { useMemo } from "react"
import { TableColumn } from "react-data-table-component"
import { useNavigate } from "react-router"
import { getOrders } from "services/dashboard/map"

export interface DataRow {
	addressLine1: string
	created_at: string
	orderId: string
}

export const useOrders = () => {
	const navigate = useNavigate()

	const {
		data = { data: [] },
		isLoading,
		isFetching,
	} = useQuery(["activity-order-map"], getOrders, {
		keepPreviousData: true,
	})

	const columns: Array<TableColumn<DataRow>> = useMemo(
		() => [
			{
				selector: (row) => row.orderId,
				cell: (row) => (
					<Pane
						display="flex"
						whiteSpace="nowrap"
						flexDirection="column"
					>
						<Text
							color="black"
							fontSize="14px"
							fontWeight="500"
							lineHeight="18px"
						>
							{row.orderId}
						</Text>
						<Text
							color="#8F95B2"
							fontSize="14px"
							fontWeight="400"
							lineHeight="18px"
						>
							{row.addressLine1}
						</Text>
					</Pane>
				),
			},
			{
				center: true,
				sortable: true,
				selector: (row) => dayjs(row.created_at).format("YYYY-MM-DD"),
			},
		],
		[],
	)

	const handleDetail = (row: DataRow) => {
		navigate(`/order/${row.orderId}`)
	}

	const handleNavigate = () => navigate("/order")

	return {
		data,
		columns,
		isLoading,
		isFetching,
		handleDetail,
		handleNavigate,
	}
}
