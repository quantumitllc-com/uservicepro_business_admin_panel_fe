import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteService } from "services/dashboard/services"
import { toast } from "react-toastify"

export const useDelete = () => {
	const queryClient = useQueryClient()
	const { mutate } = useMutation((id: string) => deleteService(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["services"])
			toast.success("The category service is deleted successfully!")
		},
		onError: (error: any) => {
			toast.error(error.message)
		},
	})

	const handleDelete = (id: string) => mutate(id)

	return {
		handleDelete,
	}
}
