import { toast } from "react-toastify"
import { FormEmailTypes } from "types/auth/password"
import { passwordEmail } from "services/auth/password"

import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { schema } from "./form.schema"

const defaultValues = {
	email: "",
}

export const useEmail = () => {
	const form = useForm<FormEmailTypes>({
		resolver: yupResolver(schema),
		mode: "onChange",
		defaultValues,
	})

	const { mutate, isLoading } = useMutation(passwordEmail, {
		onSuccess: () => {
			toast.success("Sent successfully!")
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})

	const onSubmit = (data: FormEmailTypes) => {
		mutate(data)
	}

	return { form, onSubmit, isLoading }
}
