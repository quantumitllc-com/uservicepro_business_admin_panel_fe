import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router"
import { toast } from "react-toastify"
import { deleteOrder } from "services/dashboard/order"

export const useAssigned = () => {
	const { orderId } = useParams()
	const queryClient = useQueryClient()

	const { mutate, isLoading: isLoadingDelete } = useMutation(
		(id: any) => deleteOrder(orderId, id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["order-detail"])
				toast.success("The employee is unassigned successfully!")
			},
		},
	)

	const handleDelete = (id: string) => mutate(id)

	return { handleDelete, isLoadingDelete }
}
