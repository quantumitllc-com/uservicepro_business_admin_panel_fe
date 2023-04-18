import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { Avatar, Pane } from "evergreen-ui"

import { TableColumn } from "react-data-table-component"
import React, { useMemo, useState } from "react"
import { getServices } from "services/dashboard/services"
import { useDebounce } from "hooks/useDebounce"
import { Delete } from "./delete"
import { Edit } from "./edit"

export interface DataRow {
	id: string
	serviceId: string
	serviceName: string
	pictureUrl: string
	description: string
	num: number
}

export const useServices = () => {
	const [keyword, setKeyword] = useState("")
	const searchDebounce = useDebounce(keyword, 500)

	const {
		data = [],
		isFetching,
		isLoading,
	} = useQuery(["services"], () => getServices(), {
		onError: (error: any) => {
			toast.error(error.message)
		},
		select: ({ data }) =>
			data.filter((item: any) =>
				item.serviceName
					.toLowerCase()
					.includes(searchDebounce.toLowerCase()),
			),
	})

	const handleSearch = (e: any) => {
		setKeyword(e.target.value)
	}

	const columns: Array<TableColumn<DataRow>> = useMemo(
		() => [
			{
				name: "Service name",
				sortable: true,
				selector: (row) => row.serviceName,
				cell: (row) => (
					<Pane display="flex" gap={12} alignItems="center">
						<Avatar
							src={row.pictureUrl}
							name="img categories"
							size={40}
						/>
						{row.serviceName}
					</Pane>
				),
			},
			{
				name: "Service ID",
				sortable: true,
				selector: (row) => row.serviceId,
			},
			{
				name: "Applicable office",
				sortable: true,
				selector: (row) => row.num,
			},
			{
				ignoreRowClick: true,
				button: true,
				cell: (row) => (
					<Pane gap={12} display="flex">
						<Edit data={row} />
						<Delete id={row.id} />
					</Pane>
				),
			},
		],
		[],
	)

	return {
		data,
		columns,
		isFetching,
		isLoading,
		handleSearch,
	}
}
