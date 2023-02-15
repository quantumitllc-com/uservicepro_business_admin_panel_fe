import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import { useMutation } from "@tanstack/react-query"

import { FormTypes } from "types/auth/sign-up"
import { signUp } from "services/auth/sign-up"
import { defaultValues, schema } from "./form.schema"

export const useRegister = () => {
	const navigate = useNavigate()

	const form = useForm<FormTypes>({
		resolver: yupResolver(schema),
		mode: "onChange",
		defaultValues,
	})

	const { mutate, isLoading } = useMutation(signUp, {
		onSuccess: async (data) => {
			const tokens = JSON.stringify(data.data)
			await navigate("/pre-dashboard/business")
			await localStorage.setItem("tokens", tokens)
			await toast.success("User was created successfully")
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})

	const onSubmit = (data: FormTypes) => {
		mutate(data)
	}

	return { form, isLoading, onSubmit }
}
