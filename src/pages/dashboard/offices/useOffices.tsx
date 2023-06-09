import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"
import React, { useMemo, useState } from "react"
import { Avatar } from "evergreen-ui"
import { useNavigate } from "react-router"
import { TableColumn } from "react-data-table-component"

import { getOffices } from "services/dashboard/offices"
import { useDebounce } from "hooks/useDebounce"
import AddService from "./components/add-service"

export interface DataRow {
	id: string
	name: string
	state: string
	city: string
	zipCode: number
	rating: number
	isMain: boolean
	numberOfServices?: any
}

export const useOffices = () => {
	const navigate = useNavigate()
	const [page, setPage] = useState(1)
	const [size, setSize] = useState(10)
	const [keyword, setKeyword] = useState("")
	const searchDebounce = useDebounce(keyword, 500)

	const {
		data = { content: [], totalElements: 0, totalPages: 0 },
		isFetching,
		isLoading,
	} = useQuery(
		["offices", page, size, searchDebounce],
		() => getOffices({ page: page - 1, size, officeName: keyword }),
		{
			onError: (error: any) => {
				toast.error(error.message)
			},
			select: ({ data, ...rest }) => ({ ...rest, ...data }),
			keepPreviousData: true,
		},
	)

	const columns: Array<TableColumn<DataRow>> = useMemo(
		() => [
			{
				name: "Country",
				selector: (row) => row.id,
				cell: () => (
					<Avatar
						src="https://img.freepik.com/premium-vector/flag-usa-united-states-america-background_53500-169.jpg"
						name="USA flag"
						size={40}
					/>
				),
			},
			{
				name: "Name",
				sortable: true,
				selector: (row) => row.name,
			},
			{
				name: "State",
				sortable: true,
				selector: (row) => row.state,
			},
			{
				name: "City",
				sortable: true,
				selector: (row) => row.city,
			},
			{
				name: "Zip code",
				sortable: true,
				selector: (row) => row.zipCode,
			},
			{
				name: "Service",
				cell: (row) => <AddService office={row} />,
			},
		],
		[],
	)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.target.value)
	}

	const handleChangeNextPage = () => {
		setPage((prev) => prev + 1)
	}

	const handleChangePrevPage = () => {
		setPage((prev) => prev - 1)
	}

	const handleChangePage = (newPage: number) => {
		setPage(newPage)
	}

	const handleChangePerPage = (perPage: number) => {
		setSize(perPage)
	}

	const handleDetail = (row: DataRow) => navigate(`${row.id}`)

	return {
		data,
		page,
		size,
		columns,
		isLoading,
		isFetching,
		keyword,
		handleDetail,
		handleSearch,
		handleChangePage,
		handleChangePerPage,
		handleChangeNextPage,
		handleChangePrevPage,
	}
}
