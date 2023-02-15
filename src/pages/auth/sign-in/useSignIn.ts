import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup/dist/yup"
import { toast } from "react-toastify"
import { useMutation } from "@tanstack/react-query"

import { FormTypes } from "types/auth/sign-in"
import { signIn } from "services/auth/sign-in"
import { schema, defaultValues } from "./form.schema"

export const useSignIn = () => {
	const navigate = useNavigate()

	const form = useForm<FormTypes>({
		resolver: yupResolver(schema),
		mode: "onSubmit",
		defaultValues,
	})

	const { mutate, isLoading } = useMutation(signIn, {
		onSuccess: async (data) => {
			const tokens = JSON.stringify(data.data)
			await localStorage.setItem("tokens", tokens)
			if (data.data.preDashboardInfo.isFinished) {
				await navigate("/")
			} else {
				await navigate("/pre-dashboard/business")
			}
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
