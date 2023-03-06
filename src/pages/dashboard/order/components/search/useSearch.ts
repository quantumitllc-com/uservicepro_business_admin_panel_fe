import { useQuery, useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useParams } from "react-router"
import { toast } from "react-toastify"
import {
	assignedEmployess,
	getAssignedEmployess,
} from "services/dashboard/order"

export const useSearch = () => {
	const { orderId } = useParams()
	const [search, setSearch] = useState("")
	const [ids, setIds] = useState<string[]>([])
	const { data, isLoading } = useQuery(
		["assigned-employees"],
		getAssignedEmployess,
	)
	const handleSearch = (e: any) => setSearch(e.target.value)

	const { mutate, isLoading: assignIsLoading } = useMutation(
		() => assignedEmployess(orderId, ids),
		{
			onSuccess: () => {
				toast.success("Assigned successfully!")
			},
			onError: (error: any) => {
				toast.error(error.response.data.message)
			},
		},
	)

	return {
		ids,
		data,
		search,
		setIds,
		mutate,
		isLoading,
		handleSearch,
		assignIsLoading,
	}
}
