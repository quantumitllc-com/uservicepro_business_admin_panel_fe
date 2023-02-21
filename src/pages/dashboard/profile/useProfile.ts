import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { getProfile } from "services/dashboard/profile"

export const useProfile = () => {
	const {
		data = {
			companyName: "",
			companyTin: "",
			email: "",
			isEmailVerified: false,
			isMainPhoneNumberVerified: false,
			mainPhone: "",
			paymentOptions: [],
			pictureUrl: "",
			rating: null,
		},
		isLoading,
	} = useQuery(["profile"], getProfile, {
		onError: (error: any) => {
			toast.error(error.message)
		},
		select: ({ data, ...rest }) => ({ ...rest, ...data }),
	})

	return {
		data,
		isLoading,
	}
}