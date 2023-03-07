import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { getOfficeDetail } from "services/dashboard/offices"
import useBoolean from "hooks/useBoolean"

export const useDetail = () => {
	const { value, toggle } = useBoolean(false)
	const { id } = useParams()

	const {
		data = {
			id: "",
			companyId: "",
			name: "",
			state: "",
			city: "",
			zipCode: 0,
			addressLine1: "",
			addressLine2: "",
			phone: "",
			rating: 0,
			isMain: false,
			isPhoneVerified: false,
		},
		isLoading,
		isSuccess,
	} = useQuery(["office-profile", id], () => getOfficeDetail(id), {
		select: ({ data, ...rest }) => ({ ...rest, ...data }),
		onError: (error: any) => {
			toast(error.message)
		},
	})

	return { value, toggle, data, isLoading, isSuccess }
}
