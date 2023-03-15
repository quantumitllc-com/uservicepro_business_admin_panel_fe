import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {
	editEmployee,
	getLocationList,
	sendFile,
} from "services/dashboard/employee"
import useBoolean from "hooks/useBoolean"
import { useParams } from "react-router"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { EditFormTypes } from "types/dashboard/employee"
import { schema, defaultValues } from "./form.schema"

export const useEdit = () => {
	const { employeeId } = useParams()
	const queryClient = useQueryClient()
	const { value, toggle } = useBoolean()

	const form = useForm<EditFormTypes>({
		resolver: yupResolver(schema),
		mode: "onChange",
		defaultValues,
	})

	const { mutate, isLoading } = useMutation(
		(data: EditFormTypes) => editEmployee(data, employeeId),
		{
			onSuccess: () => {
				toggle()
				queryClient.invalidateQueries(["employee-user"])
				toast.success("Sent successfully!")
				form.reset(defaultValues)
			},
			onError: (error: any) => {
				toast.error(error.response.data.message)
			},
		},
	)

	const onSubmit = (data: EditFormTypes) => {
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
		value,
		toggle,
		onSubmit,
		isLoading,
		locationData,
		handleChangeFile,
		locationIsLoading,
	}
}
