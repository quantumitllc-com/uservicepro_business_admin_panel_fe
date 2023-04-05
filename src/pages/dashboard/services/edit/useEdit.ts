import { useMutation } from "@tanstack/react-query"

import { uploadFile } from "services/dashboard/profile"
import { toast } from "react-toastify"
import React, { useState } from "react"

export const useEdit = () => {
	const [photoUrl, setPhotoUrl] = useState("")

	const { isLoading, mutate } = useMutation(uploadFile, {
		onSuccess: ({
			data: {
				message: { file_url },
			},
		}) => {
			toast.success("Photo is uploaded successfully")
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

	return {
		isLoading,
		selectPhoto,
		photoUrl,
	}
}