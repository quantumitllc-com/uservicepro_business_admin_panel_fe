import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import { useParams } from "react-router"
import { getOrderDetail } from "services/dashboard/order"

export const useDetail = () => {
	const { orderId } = useParams()
	const {
		data = {
			data: {
				endDateTime: "",
				officeId: "",
				officeName: "",
				orderId: "",
				orderTime: "",
				orderType: "",
				paymentMethod: "",
				startDateTime: "",
				totalPrice: 0,
				contactNumber: "",
				customerName: "",
				employeeInfos: [],
				answers: [],
			},
		},
		isLoading,
	} = useQuery(["order-detail", orderId], () => getOrderDetail(orderId), {
		select: ({ data, ...res }) => {
			const startDateTime = dayjs(data.startDateTime).format(
				"mm:hh A; D MMM, YYYY",
			)
			const endDateTime = dayjs(data.endDateTime).format(
				"mm:hh A; D MMM, YYYY",
			)
			const newData = {
				...data,
				startDateTime,
				endDateTime,
			}

			return { ...res, data: newData }
		},
	})
	console.log(data)

	return { data, orderId, isLoading }
}
