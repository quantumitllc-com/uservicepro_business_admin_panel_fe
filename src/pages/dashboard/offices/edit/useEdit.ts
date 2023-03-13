import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import { useParams } from "react-router"
import { useState } from "react"

import { FormTypes } from "types/dashboard/offices/edit"
import {
	changeOfficeToMain,
	editOfficeDetail,
} from "services/dashboard/offices"
import useBoolean from "hooks/useBoolean"
import { defaultValues, schema } from "./form.schema"

export const useEdit = () => {
	const queryClient = useQueryClient()
	const { id } = useParams()
	const { value, toggle } = useBoolean(false)
	const [checked, setChecked] = useState(false)

	const form = useForm<FormTypes>({
		resolver: yupResolver(schema),
		mode: "onSubmit",
		defaultValues,
	})

	const { mutate, isLoading } = useMutation(
		(newOffice: FormTypes) => editOfficeDetail(id, newOffice),
		{
			onSuccess: (data) => {
				queryClient.setQueryData(["office-profile", id], data)
				toast.success("Office profile was edited successfully!")
				toggle()
			},
			onError: (error: any) => {
				toast.error(error.response.data.message)
			},
		},
	)

	const { mutate: mutateMainOffice } = useMutation(
		() => changeOfficeToMain(id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["office-profile"])
				toast.success("Office changed to main successfully!")
			},
			onError: (error: any) => {
				toast.error(error.response.data.message)
			},
		},
	)

	const onSubmit = (data: FormTypes) => {
		// @ts-ignore
		data.state = data.state.value
		console.log(data)
		mutate(data)
	}

	const handleChangeMainOffice = () => {
		setChecked(true)
		mutateMainOffice()
	}

	return {
		value,
		toggle,
		form,
		onSubmit,
		isLoading,
		checked,
		setChecked,
		handleChangeMainOffice,
	}
}
