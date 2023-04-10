import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { Pane } from "evergreen-ui"

import { getCategoryToService } from "services/dashboard/services"
import { TableColumn } from "react-data-table-component"
import { useMemo } from "react"
import { AddService } from "../add-service"
import button from "../../../../../../components/button"

export interface DataRow {
	id: string
	num: number
	name: string,
}

export const useCategoryService = ({ data }: any) => {
	const {
		isFetching,
		isLoading,
		data: services = []
	} = useQuery(["category-service"],
		() => getCategoryToService(data.id),
		{
			onError: (error: any) => {
				toast.error(error.message)
			},
			select: ({ data }) => ([ ...data ])
		})

	const columns: Array<TableColumn<DataRow>> = useMemo(
		() => [
			{
				name: "Service name",
				sortable: true,
				selector: (row) => row.name
			},
			{
				name: "Service id",
				sortable: true,
				selector: (row) => row.id
			},
			{
				ignoreRowClick: true,
				button: true,
				cell: (row) => (
					<AddService data={row} />
				)
			}
		], []
	)

	return {
		columns,
		services,
		isFetching,
		isLoading,
	}
}