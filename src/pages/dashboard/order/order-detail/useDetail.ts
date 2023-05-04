import { useMutation, useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import { FormTypes } from "types/dashboard/order"
import { useForm, useWatch } from "react-hook-form"
import { useParams } from "react-router"
import { toast } from "react-toastify"
import { getOrderDetail, orderTotal } from "services/dashboard/order"
import { yupResolver } from "@hookform/resolvers/yup"
import useBoolean from "hooks/useBoolean"
import { schema, defaultValues } from "./form.schema"

export const useDetail = () => {
	const { orderId } = useParams()
	const form = useForm<FormTypes>({
		resolver: yupResolver(schema),
		mode: "onChange",
		defaultValues,
	})
	const { value, setFalse, setTrue } = useBoolean()
	const totalPrice = useWatch({ control: form.control, name: "totalPrice" })

	const {
		data = {
			data: {
				isPaid: false,
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
				paymentCredentials: {},
			},
		},
		isLoading,
	} = useQuery(["order-detail", orderId], () => getOrderDetail(orderId), {
		select: ({ data, ...res }) => {
			const startDateTime = data.startDateTime
				? dayjs(data.startDateTime).format("mm:hh A; D MMM, YYYY")
				: "-"
			const endDateTime = data.endDateTime
				? dayjs(data.endDateTime).format("mm:hh A; D MMM, YYYY")
				: "-"

			const orderTime = data.orderTime
				? dayjs(data.orderTime).format("mm:hh A; D MMM, YYYY")
				: "-"

			const newData = {
				...data,
				orderTime,
				startDateTime,
				endDateTime,
			}

			return { ...res, data: newData }
		},
		onSuccess: (data) => {
			form.setValue("totalPrice", data.data?.totalPrice)
		},
	})

	const { mutate } = useMutation(
		(data: FormTypes) => orderTotal<FormTypes>(data, orderId),
		{
			onSuccess: () => {
				setFalse()
				toast.success("Sent successfully!")
			},
			onError: (error: any) => {
				toast.error(error.response.data.message)
			},
		},
	)

	const onSubmit = (data: FormTypes) => {
		mutate(data)
	}

	return {
		data,
		form,
		value,
		orderId,
		setTrue,
		onSubmit,
		setFalse,
		isLoading,
		totalPrice,
	}
}
