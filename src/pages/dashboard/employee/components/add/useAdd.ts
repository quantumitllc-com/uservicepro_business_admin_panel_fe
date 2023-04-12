import { useState } from "react"
import { useForm } from "react-hook-form"
import {
	addEmployee,
	getLocationList,
	getServicesById,
	sendFile,
} from "services/dashboard/employee"
import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { FormTypes } from "types/dashboard/employee"
import { schema, defaultValues } from "./form.schema"

interface IService {
	label: string
	value: string
}

export const useAdd = () => {
	const queryClient = useQueryClient()
	const [isShownAdd, setIsShownAdd] = useState(false)
	const [services, setService] = useState<IService[]>([])

	const form = useForm<FormTypes>({
		resolver: yupResolver(schema),
		mode: "onChange",
		defaultValues,
	})

	const { mutate, isLoading } = useMutation(addEmployee, {
		onSuccess: () => {
			queryClient.invalidateQueries(["employee-list"])

			toast.success("Sent successfully!")
			setIsShownAdd(false)
			form.reset(defaultValues)
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})

	const { mutate: mutateServices, isLoading: isLoadingServices } =
		useMutation(getServicesById, {
			onSuccess: (data) => {
				const newData = data.data.map(
					(service: { id: string; name: string }) => ({
						value: service.id,
						label: service.name,
					}),
				)
				setService(newData)
			},
			onError: (error: any) => {
				toast.error(error.response.data.message)
			},
		})

	const onSubmit = (data: FormTypes) => {
		mutate(data)
	}

	const {
		data: locationData = { content: [] },
		isLoading: locationIsLoading,
	} = useQuery(["service-locations"], getLocationList, {
		select: ({ data, ...rest }) => ({ ...rest, ...data }),
	})

	const { mutate: mutateFile } = useMutation(sendFile, {
		onSuccess: (data) => {
			form.setValue("attachedFileUrl", data.data.message.file_url)
		},
	})

	const handleChangeFile = (files: FileList) => {
		const formdata = new FormData()
		formdata.append("file_url", files[0], files[0].name)
		mutateFile(formdata)
	}

	return {
		form,
		services,
		onSubmit,
		isLoading,
		isShownAdd,
		locationData,
		setIsShownAdd,
		mutateServices,
		handleChangeFile,
		locationIsLoading,
	}
}
