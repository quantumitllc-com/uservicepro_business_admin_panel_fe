/* eslint-disable @typescript-eslint/no-shadow */
import { useParams } from "react-router"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
	deleteEmployeeService,
	getEmployeeDetail,
} from "services/dashboard/employee"
import { toast } from "react-toastify"

export const usePage = () => {
	const { employeeId } = useParams()
	const queryClient = useQueryClient()
	const {
		isLoading,
		data = {
			attachedFileUrl: "",
			categoryId: "",
			companyId: "",
			dateOfBirth: "",
			email: "",
			firstName: "",
			id: "",
			isActive: false,
			isEmailVerified: false,
			isPhoneVerified: false,
			lastName: "",
			officeId: "",
			phone: "",
			pictureUrl: "",
			rating: 0,
			ssn: "",
			startedDate: "",
			services: [],
		},
	} = useQuery(
		["employee-user", employeeId],
		() => getEmployeeDetail(employeeId),
		{
			select: ({ data, ...rest }) => ({ ...rest, ...data }),
		},
	)

	const { mutate, isLoading: isLoadingServices } = useMutation(
		(id: any) => deleteEmployeeService(id, employeeId),
		{
			onSuccess: () => {
				toast.success("Deleted successfully!")
				queryClient.invalidateQueries(["employee-user"])
			},
			onError: (error: any) => {
				toast.error(error.response.data.message)
			},
		},
	)

	const handleDelete = (id: string) => {
		mutate(id)
	}

	return { data, isLoading, employeeId, handleDelete, isLoadingServices }
}
