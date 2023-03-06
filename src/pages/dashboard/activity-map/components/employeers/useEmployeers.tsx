/* eslint-disable @typescript-eslint/no-shadow */
import { useMemo } from "react"
import { Avatar } from "evergreen-ui"
import { useNavigate } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { TableColumn } from "react-data-table-component"
import { getEmployeeList } from "services/dashboard/employee"
import { Status } from "../status"

export interface DataRow {
	id: string
	firstName: string
	lastName: string
	pictureUrl: string
	email: string
	phone: string
	status: string
}

export const useEmployeers = () => {
	const navigate = useNavigate()

	const {
		data = { content: [], totalElements: 0, totalPages: 0 },
		isLoading,
		isFetching,
	} = useQuery(["employee-list"], () => getEmployeeList({}), {
		select: ({ data, ...rest }) => ({ ...rest, ...data }),
		keepPreviousData: true,
	})

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
				selector: (row) => row.status,
				cell: (row) => <Status status={row.status} />,
			},
		],
		[],
	)

	const handleDetail = (row: DataRow) => {
		navigate(`/employee/${row.id}`)
	}

	const handleNavigate = () => navigate("/employee")

	return {
		data,
		columns,
		isLoading,
		isFetching,
		handleDetail,
		handleNavigate,
	}
}
