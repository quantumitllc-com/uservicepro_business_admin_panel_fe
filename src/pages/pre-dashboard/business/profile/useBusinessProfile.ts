import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { FormTypes } from "types/pre-dashboard/business/details"
import { businessDetails } from "services/pre-dashboard/business/detail"
import { getTokens } from "utils/getTokens"
import { schema } from "./form.schema"

export const defaultValues = {
	companyName: "",
	companyTin: "",
	officeName: "",
	state: "",
	city: "",
	zipCode: "",
	addressLine1: "",
	addressLine2: "",
	phone: "",
}

export const useBusinessProfile = () => {
	const navigate = useNavigate()
	let tokens = getTokens()

	const form = useForm<FormTypes>({
		resolver: yupResolver(schema),
		mode: "onSubmit",
		defaultValues,
	})

	const { mutate, isLoading } = useMutation(businessDetails, {
		onSuccess: async () => {
			await navigate("/pre-dashboard/business")
			await toast.success("Company detail was filled successfully")
			tokens.preDashboardInfo.isProfileFilled = true
			tokens = JSON.stringify(tokens)
			await localStorage.setItem("tokens", tokens)
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})

	const onSubmit = (data: FormTypes) => {
		// @ts-ignore
		data.state = data.state.value
		console.log(data)
		mutate(data)
	}

	return { form, isLoading, onSubmit }
}
