/* eslint-disable @typescript-eslint/no-shadow */
import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { getEmployeeDetail } from "services/dashboard/employee"

export const usePage = () => {
	const { employeeId } = useParams()
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
		},
	} = useQuery(
		["employee-user", employeeId],
		() => getEmployeeDetail(employeeId),
		{
			select: ({ data, ...rest }) => ({ ...rest, ...data }),
		},
	)

	return { data, isLoading, employeeId }
}
