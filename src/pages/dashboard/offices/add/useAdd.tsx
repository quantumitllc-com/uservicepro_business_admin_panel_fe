import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { FormTypes } from "types/dashboard/offices"
import { addOffice } from "services/dashboard/offices"
import useBoolean from "hooks/useBoolean"
import { defaultValues, schema } from "./form.schema"

export const useAdd = () => {
	const { value, setFalse, setTrue } = useBoolean(false)
	const queryClient = useQueryClient()

	const form = useForm<FormTypes>({
		resolver: yupResolver(schema),
		mode: "onSubmit",
		defaultValues,
	})

	const { mutate, isLoading, isSuccess, isError } = useMutation(addOffice, {
		onSuccess: () => {
			queryClient.invalidateQueries(["offices"])
			toast.success("Location was created successfully")
			form.reset()
			setFalse()
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})

	const onSubmit = (data: FormTypes) => {
		mutate(data)
	}

	return {
		form,
		isLoading,
		isSuccess,
		isError,
		onSubmit,
		value,
		setFalse,
		setTrue,
	}
}
