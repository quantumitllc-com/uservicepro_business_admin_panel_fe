import { useQuery } from "@tanstack/react-query"
import { ORDER_STATUS_COLORS } from "constants/order"
import { Pane } from "evergreen-ui"
import { useDebounce } from "hooks/useDebounce"
import { useMemo, useState } from "react"
import { TableColumn } from "react-data-table-component"
import { useNavigate } from "react-router"
import { getOrders } from "services/dashboard/order"
import { OrderTypeOfStatus } from "types/dashboard/order"

export interface DataRow {
	employeeIds: string[]
	subCategoryId: string
	status: OrderTypeOfStatus
	id: string
	customerId: string
	officeId: string
}

export const usePage = () => {
	const navigate = useNavigate()
	const [page, setPage] = useState(1)
	const [size, setSize] = useState(10)
	const [keyword, setKeyword] = useState("")
	const searchDebounce = useDebounce(keyword, 500)

	const {
		data = { content: [], totalElements: 0, totalPages: 0 },
		isLoading,
		isFetching,
	} = useQuery(
		["order-list", size, page, searchDebounce],
		() => getOrders({ size, keyword, page: page - 1 }),
		{
			select: ({ data, ...rest }) => ({ ...rest, ...data }),
			keepPreviousData: true,
		},
	)

	const columns: Array<TableColumn<DataRow>> = useMemo(
		() => [
			{
				name: "Id",
				selector: (row) => row.id,
			},
			{
				name: "Office Name",
				selector: (row) => row.officeId,
			},
			{
				name: "Employee",
				selector: (row) => row.employeeIds?.length,
			},
			{
				name: "Service",
				selector: (row) => row.subCategoryId,
			},
			{
				name: "Customer",
				selector: (row) => row.customerId,
			},
			{
				name: "Status",
				selector: (row) => row.status,
				center: true,
				cell: (row) => (
					<Pane
						paddingX="10px"
						paddingY="7px"
						color="white"
						borderRadius="10px"
						textTransform="capitalize"
						background={ORDER_STATUS_COLORS[row.status]}
					>
						{row.status}
					</Pane>
				),
			},
		],
		[],
	)

	const handleSearch = (e: any) => {
		setKeyword(e.target.value)
	}

	const handleChangePage = (page: number) => {
		setPage(page)
	}

	const handleChangeNextPage = () => {
		setPage(page + 1)
	}

	const handleChangePrevPage = () => {
		setPage(page - 1)
	}

	const handleChangePerPage = (perPage: number) => {
		setSize(perPage)
	}

	const handleDetail = (row: any) => {
		navigate(`/order/${row.id}`)
	}

	return {
		page,
		data,
		size,
		columns,
		keyword,
		isLoading,
		isFetching,
		handleDetail,
		handleSearch,
		handleChangePage,
		handleChangePerPage,
		handleChangeNextPage,
		handleChangePrevPage,
	}
}
