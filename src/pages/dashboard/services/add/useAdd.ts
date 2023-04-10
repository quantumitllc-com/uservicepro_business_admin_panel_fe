import { TableColumn } from "react-data-table-component"
import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { getCategories } from "services/dashboard/services"
import { useDebounce } from "hooks/useDebounce"

export interface DataRow {
	id: string
	pictureUrl: string
	num: number
	name: string
}

export const useAdd = () => {
	const [keyword, setKeyword] = useState("")
	const searchDebounce = useDebounce(keyword, 500)

	const {
		data = [],
		isFetching,
		isLoading,
	} = useQuery(["categories"], getCategories, {
		onError: (error: any) => {
			toast.error(error.message)
		},
		select: ({ data }) =>
			data.filter((item: any) =>
				item.name.toLowerCase().includes(searchDebounce.toLowerCase()),
			),
	})

	const columns: Array<TableColumn<DataRow>> = useMemo(
		() => [
			{
				name: "Category name",
				sortable: true,
				selector: (row) => row.name,
			},
		],
		[],
	)

	const handleSearch = (e: any) => {
		setKeyword(e.target.value)
	}

	return {
		data,
		columns,
		isFetching,
		isLoading,
		handleSearch,
	}
}
