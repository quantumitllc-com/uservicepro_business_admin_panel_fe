import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { useState } from "react"

import { getOffices } from "services/dashboard/offices"

interface GetOffices {
	page: number
	size: number
}

export const useOffices = () => {
	const [page, setPage] = useState(0)
	const [size, setSize] = useState(5)
	const { data, isError, isLoading } = useQuery(
		["offices", page, size],
		() => {
			const params = `page=${page}&size=${size}`
			return getOffices<GetOffices>({
				page,
				size,
			})
		},
		{
			onError: (error: any) => {
				toast.error(error.message)
			},
			keepPreviousData: true,
		},
	)

	const nextPage = () => {
		setPage((prev) => prev + 1)
	}

	const prevPage = () => {
		setPage((prev) => prev - 1)
	}

	const handleChangePage = (newPage: number) => {
		setPage(newPage - 1)
	}

	return {
		data,
		isError,
		isLoading,
		page,
		nextPage,
		prevPage,
		handleChangePage,
	}
}
