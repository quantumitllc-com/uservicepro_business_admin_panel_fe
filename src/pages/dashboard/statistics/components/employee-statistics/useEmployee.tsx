import { useQuery } from "@tanstack/react-query"
import MyText from "components/text"
import { Pane } from "evergreen-ui"
import { useDebounce } from "hooks/useDebounce"
import { useMemo, useState } from "react"
import { TableColumn } from "react-data-table-component"
import { useNavigate, useSearchParams } from "react-router-dom"
import { getEmployeeStatistics } from "services/dashboard/statistics"

interface IEmployeeStatistics {
	top: number
	officeId: null | string
}

export interface DataRow {
	id: string
	name: string
	numOfOrders: number
}

export const useEmployee = () => {
	const navigate = useNavigate()
	const [top, setTop] = useState(5)
	const [searchParams] = useSearchParams()
	const searchDebounce = useDebounce(top, 500)
	const officeId = searchParams.get("officeId")

	const { data = { data: [], activeUsers: 0 }, isLoading } = useQuery(
		["employee-statistics", top, officeId, searchDebounce],
		() =>
			getEmployeeStatistics<IEmployeeStatistics>({
				top,
				officeId,
			}),
		{
			select: ({ data, ...rest }) => ({ ...data, ...rest }),
			keepPreviousData: true,
		},
	)

	const columns: Array<TableColumn<DataRow>> = useMemo(
		() => [
			{
				selector: (row) => row.name,
				cell: (row) => (
					<Pane>
						<Pane>{row.name ?? "-"}</Pane>
					</Pane>
				),
			},
			{
				right: true,
				selector: (row) => row.numOfOrders,
				cell: (row) => (
					<Pane>
						<MyText
							fontSize="16px"
							fontWeight={500}
							color="#000000"
							lineHeight="20px"
							textAlign="center"
						>
							{row.numOfOrders}
						</MyText>{" "}
						<MyText
							fontSize="14px"
							fontWeight={400}
							color="#8F95B2"
							lineHeight="18px"
							textAlign="center"
						>
							{row.numOfOrders === 1 ? "order " : "orders "}
							done
						</MyText>
					</Pane>
				),
			},
		],
		[],
	)

	const handleDetail = (row: DataRow) => navigate(`/employee/${row.id}`)

	const handleChange = (e: any) => setTop(e.target.value)

	const handleNavigate = () => navigate("/employee")

	return {
		data,
		columns,
		isLoading,
		handleDetail,
		handleChange,
		handleNavigate,
	}
}
