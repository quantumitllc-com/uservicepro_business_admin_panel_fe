/* eslint-disable @typescript-eslint/no-shadow */
import { useMemo, useState } from "react"
import { Avatar } from "evergreen-ui"
import { useDebounce } from "hooks/useDebounce"
import { useQuery } from "@tanstack/react-query"
import { TableColumn } from "react-data-table-component"
import { getEmployeeList } from "services/dashboard/employee"

export interface DataRow {
	id: string
	firstName: string
	lastName: string
	pictureUrl: string
	email: string
	phone: string
	isActive: boolean
}

export const useEmployee = () => {
	const [page, setPage] = useState(1)
	const [size, setSize] = useState(1)
	const [keyword, setKeyword] = useState("")
	const searchDebounce = useDebounce(keyword, 500)

	const { data = { content: [], numberOfElements: 0 }, isLoading } = useQuery(
		["employee-list", size, page, searchDebounce],
		() => getEmployeeList({ size, keyword, page: page - 1 }),
		{ select: ({ data, ...rest }) => ({ ...rest, ...data }) },
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
				sortable: true,
				name: "Name",
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
				selector: (row) => row.phone,
			},
			{
				name: "Email",
				selector: (row) => row.email,
			},
			{
				name: "Status",
				selector: (row) => row.isActive.toString(),
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

	const handleChangePerPage = (perPage: number) => {
		setSize(perPage)
	}

	return {
		page,
		data,
		keyword,
		columns,
		isLoading,
		handleSearch,
		handleChangePage,
		handleChangePerPage,
	}
}
