import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import { useMutation } from "@tanstack/react-query"

import { FormTypes } from "types/auth/sign-up"
import { signUp } from "services/auth/sign-up"
import { schema } from "./form.schema"

const getUserTypeUsingUrl = (userType: string) => {
	switch (userType) {
		case "commercial":
			return "COMMERCIAL"
		case "user":
			return "SIMPLE"
		case "business":
			return "COMPANY"
		default:
			return ""
	}
}

export const useSignUp = (userType: string | undefined) => {
	const navigate = useNavigate()

	const defaultValues = {
		userType: userType && getUserTypeUsingUrl(userType),
		email: "",
		password: "",
		confirmPassword: "",
	}

	const form = useForm<FormTypes>({
		resolver: yupResolver(schema),
		mode: "onChange",
		defaultValues,
	})

	const { mutate, isLoading } = useMutation(signUp, {
		onSuccess: async (data) => {
			const tokens = JSON.stringify(data.data)
			if (userType === "business") {
				await navigate(`/pre-dashboard/${userType}`)
				await localStorage.setItem("tokens", tokens)
			} else {
				form.reset()
			}
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
