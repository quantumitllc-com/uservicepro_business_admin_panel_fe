import { toast } from "react-toastify"
import { FormResetTypes } from "types/auth/password"
import { passwordReset } from "services/auth/password"
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"

import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { schema } from "./form.schema"

const defaultValues = {
	password: "",
	confirmPassword: "",
}

export const useReset = () => {
	const navigate = useNavigate()
	const { resetToken } = useParams()

	const form = useForm<FormResetTypes>({
		resolver: yupResolver(schema),
		mode: "onChange",
		defaultValues,
	})

	const { mutate, isLoading } = useMutation(
		(data: FormResetTypes) => passwordReset(data, resetToken as string),
		{
			onSuccess: () => {
				navigate("/sign-in")
			},
			onError: (error: any) => {
				toast.error(error.response.data.message)
			},
		},
	)

	const onSubmit = (data: FormResetTypes) => {
		mutate(data)
	}

	return { form, onSubmit, isLoading }
}
