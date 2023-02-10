import { useState } from "react"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {
	editEmployee,
	getLocationList,
	sendFile,
} from "services/dashboard/employee"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { FormTypes } from "types/dashboard/employee"
import { schema, defaultValues } from "./form.schema"

export const useEdit = () => {
	const queryClient = useQueryClient()

	const form = useForm<FormTypes>({
		resolver: yupResolver(schema),
		mode: "onChange",
		defaultValues,
	})

	const { mutate, isLoading } = useMutation(editEmployee, {
		onSuccess: () => {
			queryClient.invalidateQueries(["employee-list"])
			toast.success("Sent successfully!")
			form.reset(defaultValues)
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})

	const onSubmit = (data: FormTypes) => {
		mutate(data)
	}

	const {
		data: locationData = { content: [] },
		isLoading: locationIsLoading,
	} = useQuery(["service-locations"], getLocationList, {
		select: ({ data, ...rest }) => ({ ...rest, ...data }),
	})

	const { mutate: mutateFile } = useMutation(sendFile, {
		onSuccess: (data) => {
			form.setValue("attachedFileUrl", data.data.message.file_url)
		},
	})

	const handleChangeFile = (files: FileList) => {
		const formdata = new FormData()
		formdata.append("file_url", files[0], files[0].name)
		mutateFile(formdata)
	}

	return {
		form,
		onSubmit,
		isLoading,
		locationData,
		handleChangeFile,
		locationIsLoading,
	}
}
