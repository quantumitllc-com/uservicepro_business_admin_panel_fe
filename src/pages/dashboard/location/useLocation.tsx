import { useMutation, useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { yupResolver } from "@hookform/resolvers/yup"

import { createLocation, getLocations } from "services/dashboard/location"
import { FormTypes } from "types/dashboard/location"
import { schema } from "./add-location/form.schema"

const defaultValues = {
	officeName: "",
	state: "",
	city: "",
	zipCode: "",
	addressLine1: "",
	addressLine2: "",
	phone: "",
}

export const useLocation = () => {
	const { data: locations } = useQuery({
		queryKey: ["locations"],
		queryFn: getLocations,
	})

	const form = useForm<FormTypes>({
		resolver: yupResolver(schema),
		mode: "onSubmit",
		defaultValues,
	})

	const { mutate, isLoading } = useMutation(createLocation, {
		onSuccess: async () => {
			await toast.success("Location was created successfully")
			form.reset()
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})

	const onSubmit = (data: FormTypes) => {
		mutate(data)
	}

	return {
		locations,
		form,
		isLoading,
		onSubmit,
	}
}
