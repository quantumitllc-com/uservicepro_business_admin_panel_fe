import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"

import { verifyByEmail } from "services/pre-dashboard/business/verify"

export const useEmail = () => {
	const [counter, setCounter] = useState(60)

	useEffect(() => {
		const timer =
			counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
		// @ts-ignore
		return () => clearInterval(timer)
	}, [counter])

	const { mutate, isLoading } = useMutation(verifyByEmail, {
		onSuccess: async () => {
			await toast.success("Verification emails was sent successfully")
			await setCounter(60)
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})

	const onSubmit = () => {
		mutate()
	}

	return { counter, setCounter, isLoading, onSubmit }
}
