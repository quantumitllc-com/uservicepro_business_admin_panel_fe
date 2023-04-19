import { ICardPlan } from "types/dashboard/profile/card"
import { useMutation } from "@tanstack/react-query"

import { subscribe } from "services/dashboard/profile"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const useCard = (props: ICardPlan) => {
	const navigate = useNavigate()

	const { isLoading, mutate } = useMutation(subscribe, {
		onSuccess: () => {
			toast.success("Plan was changed successfully")
			navigate("/profile")
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})

	const onSubmit = () => {
		mutate({
			planId: props.id,
			isMonths: props.type === "Month",
		})
	}

	return {
		isLoading,
		onSubmit,
	}
}
