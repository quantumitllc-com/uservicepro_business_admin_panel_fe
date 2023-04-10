import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import React, { useState } from "react"

import { uploadFile } from "services/dashboard/profile"
import { editService } from "../../../../services/dashboard/services"
import { EditFormTypes } from "../../../../types/dashboard/services"
import useBoolean from "../../../../hooks/useBoolean"

export const useEdit = ({ data }: any) => {
	const { value, setValue, toggle } = useBoolean(false)
	const [photoUrl, setPhotoUrl] = useState("")
	const queryClient = useQueryClient()

	const form = useForm<EditFormTypes>({
		mode: "onSubmit",
		defaultValues: {
			description: data.description,
			pictureUrl: data.pictureUrl
		}
	})

	const { isLoading, mutate } = useMutation(uploadFile, {
		onSuccess: ({ data: { message: { file_url }, },
		}) => {
			toast.success("Photo is uploaded successfully")
			form.setValue("pictureUrl", file_url)
			setPhotoUrl(file_url)
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
		(newService: EditFormTypes) => editService(newService, data.id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["services"])
				toast.success("Service was edited successfully!")
				setValue(false)
			},
			onError: (error: any) => {
				toast.error(error.response.data.message)
			},
		}
	)

	const onSubmit = (newService: EditFormTypes) => {
		mutateService(newService)
	}

	return {
		isLoading,
		selectPhoto,
		photoUrl,
		form,
		onSubmit,
		value,
		setValue,
		toggle
	}
}
