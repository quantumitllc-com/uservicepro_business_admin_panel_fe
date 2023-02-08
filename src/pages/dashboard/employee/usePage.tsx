/* eslint-disable @typescript-eslint/no-shadow */
import { useMemo, useState } from "react"
import { Avatar } from "evergreen-ui"
import { useNavigate } from "react-router"
import { useDebounce } from "hooks/useDebounce"
import { useQuery } from "@tanstack/react-query"
import { TableColumn } from "react-data-table-component"
import { getEmployeeList } from "services/dashboard/employee"
import { Status } from "./components/status"

export interface DataRow {
	id: string
	firstName: string
	lastName: string
	pictureUrl: string
	email: string
	phone: string
	isActive: boolean
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
		["employee-list", size, page, searchDebounce],
		() => getEmployeeList({ size, keyword, page: page - 1 }),
		{
			select: ({ data, ...rest }) => ({ ...rest, ...data }),
			keepPreviousData: true,
		},
	)

	const columns: Array<TableColumn<DataRow>> = useMemo(
		() => [
			{
				name: "Photo",
				width: "80px",
				center: true,
				selector: (row) => row.pictureUrl,
				cell: (row) => (
					<Avatar
						size={40}
						src={row.pictureUrl}
						name={row.firstName + row.lastName}
					/>
				),
			},
			{
				name: "Name",
				sortable: true,
				selector: (row) =>
					row.firstName + row.lastName
						? row.firstName + row.lastName
						: "",
			},
			{
				name: "Employee ID",
				selector: (row) => row.id,
			},
			{
				name: "Phone",
				sortable: true,
				selector: (row) => row.phone,
			},
			{
				name: "Email",
				sortable: true,
				selector: (row) => row.email,
			},
			{
				name: "Status",
				selector: (row) => row.isActive,
				cell: (row) => <Status status={row.isActive} />,
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

	const handleDetail = (row: DataRow) => navigate(`${row.id}`)

	return {
		page,
		data,
		size,
		keyword,
		columns,
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
