import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { useParams } from "react-router"
import { toast } from "react-toastify"
import {
	addEmployeeToService,
	getServicesById,
} from "services/dashboard/employee"

export const useAdd = (id?: string) => {
	const { employeeId } = useParams()
	const queryClient = useQueryClient()
	const [selected, setSelected] = useState<any[]>([])

	const { data = { data: [] }, isLoading } = useQuery(
		["services-by-officeid"],
		() => getServicesById(id),
		{
			select: (res) => {
				const data = res.data.map((service: any) => ({
					...service,
					value: service.id,
					label: service.serviceName,
				}))
				return { ...res, data }
			},
		},
	)

	const { mutate, isLoading: isLoadingServices } = useMutation(
		(data: any) => addEmployeeToService(data, employeeId),
		{
			onSuccess: () => {
				setSelected([])
				queryClient.invalidateQueries(["employee-user"])
				toast.success("Added successfully!")
			},
			onError: (error: any) => {
				toast.error(error.response.data.message)
			},
		},
	)

	return { data, mutate, selected, isLoading, setSelected, isLoadingServices }
}
