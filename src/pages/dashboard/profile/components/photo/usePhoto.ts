import React, { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { setCompanyPhoto, uploadFile } from "services/dashboard/profile"

export const usePhoto = () => {
	const [url, setUrl] = useState("")

	const { isLoading, mutate } = useMutation(uploadFile, {
		onSuccess: ({ data: { message: { file_url } } }) => {
			toast.success("File is uploaded successfully")
			setUrl(file_url)
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		}
	})

	const { isLoading: isLoadingSetPhoto, mutate: mutateSetPhoto } = useMutation(setCompanyPhoto, {
		onSuccess: () => {},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		}
	})

	const selectPhoto = async(event: React.ChangeEvent<HTMLInputElement>) => {
		if(event.target.files) {
			const file = event.target.files[0]
			const formData = new FormData()
			formData.append("file_url", file)
			await mutate(formData)
			await mutateSetPhoto({ pictureUrl: url })
		}
	}

	return {
		isLoading,
		selectPhoto,
		isLoadingSetPhoto
	}
}