import useBoolean from "hooks/useBoolean"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import React from "react"

import { useMutation } from "@tanstack/react-query"
import { uploadFile } from "services/dashboard/profile"
import { useForm } from "react-hook-form"
import { AddFormTypes } from "types/dashboard/services"
import { addServiceToCompany } from "services/dashboard/services"

export const defaultValues = {
	description: "",
	pictureUrl: "",
}

export const useAddService = ({ data }: any) => {
	const { value, setValue, toggle } = useBoolean(false)
	const navigate = useNavigate()

	const form = useForm<AddFormTypes>({
		mode: "onSubmit",
		defaultValues,
	})

	const { isLoading, mutate } = useMutation(uploadFile, {
		onSuccess: ({
			data: {
				message: { file_url },
			},
		}) => {
			toast.success("Photo is uploaded successfully")
			form.setValue("pictureUrl", file_url)
		},
		onError: (error: any) => {
			toast.error(error.response.statusText)
		},
	})

	const selectPhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const file = event.target.files[0]
			const formData = new FormData()
			formData.append("file_url", file)
			await mutate(formData)
		}
	}

	const { mutate: mutateService } = useMutation(
		(newService: AddFormTypes) => addServiceToCompany(newService, data.id),
		{
			onSuccess: () => {
				toast.success("Service was added successfully!")
				setValue(false)
				navigate("/services")
			},
			onError: (error: any) => {
				toast.error(error.response.data.message)
			},
		},
	)

	const onSubmit = (newService: AddFormTypes) => {
		mutateService(newService)
	}

	return {
		isLoading,
		selectPhoto,
		value,
		setValue,
		toggle,
		form,
		onSubmit,
	}
}
