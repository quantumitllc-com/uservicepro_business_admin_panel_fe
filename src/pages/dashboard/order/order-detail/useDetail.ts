import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { getOrderDetail } from "services/dashboard/order"

export const useDetail = () => {
	const { orderId } = useParams()
	const {
		data = {
			companyId: "",
			contactNumber: "",
			employeeIds: [],
			finishedAt: "",
			id: "",
			itemOrder: "",
			place: "",
			paymentMethod: "",
			rating: "",
			serviceFee: "",
			startedAt: "",
			tax: "",
			tip: "",
		},
		isLoading,
	} = useQuery(["order-detail", orderId], () => getOrderDetail(orderId), {
		select: ({ data, ...rest }) => {
			const place = `${data.location?.addressLine1} ,${data.location?.addressLine2} ,${data.location?.state} ,${data.location?.city} ,${data.location?.zipCode}`
			return { ...data, ...rest, place }
		},
	})

	return { data, orderId, isLoading }
}
