import React, { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { shallow } from "zustand/shallow"

import { setCompanyPhoto, uploadFile } from "services/dashboard/profile"
import { useUserStore } from "store/user"
import { getTokens } from "utils/getTokens"
import { useProfile } from "../../useProfile"

export const usePhoto = () => {
	const tokens = getTokens()
	const { refetch } = useProfile()
	const { user, setPictureUrl } = useUserStore(
		(state) => ({
			user: state.user,
			setPictureUrl: state.setPictureUrl
		}),
		shallow,
	)

	// console.log(user)

	const { isLoading: isLoadingSetPhoto, mutate: mutateSetPhoto } =
		useMutation(setCompanyPhoto, {
			onSuccess: () => {
				toast.success("Photo is set successfully")
				refetch()
			},
			onError: (error: any) => {
				toast.error("error")
			},
		})

	const { isLoading, mutate } = useMutation(uploadFile, {
		onSuccess: ({ data: { message: { file_url }, }, }) => {
			toast.success("File is uploaded successfully")
			mutateSetPhoto({ pictureUrl: file_url })
			setPictureUrl(file_url)
			tokens.pictureUrl = file_url
			localStorage.setItem("tokens", JSON.stringify(tokens))
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
		isLoadingSetPhoto,
	}
}
