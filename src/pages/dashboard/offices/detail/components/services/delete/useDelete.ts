import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteServiceFromOffice } from "services/dashboard/services"
import { toast } from "react-toastify"

export const useDelete = () => {
	const queryClient = useQueryClient()
	const { mutate } = useMutation((id: string) => deleteServiceFromOffice(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["office-services"])
			toast.success("The service is deleted successfully!")
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
