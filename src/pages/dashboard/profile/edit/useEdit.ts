import useBoolean from "hooks/useBoolean"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup/dist/yup"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { EditFormTypes } from "types/dashboard/profile/edit"
import { changeCompanyInfo } from "services/dashboard/profile"
import { defaultValues, schema } from "./form.schema"
import { queryClient } from "../../../../config/react-query"

export const useEdit = () => {
	const { value, toggle } = useBoolean(false)

	const form = useForm<EditFormTypes>({
		resolver: yupResolver(schema),
		mode: "onSubmit",
		defaultValues,
	})

	const { mutate, isLoading } = useMutation(
		(data: EditFormTypes) => changeCompanyInfo(data),
		{
			onSuccess: (data) => {
				queryClient.setQueryData(["user"], data)
				toast.success("Company details was edited successfully!")
				toggle()
			},
			onError: (error: any) => {
				toast.error(error.response.data.message)
			},
		},
	)

	const onSubmit = (data: EditFormTypes) => {
		mutate(data)
	}

	return {
		isLoading,
		value,
		toggle,
		form,
		onSubmit,
	}
}
