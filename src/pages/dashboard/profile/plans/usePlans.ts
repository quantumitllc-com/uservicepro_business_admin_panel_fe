import { useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { getPlans } from "services/dashboard/profile"

export const usePlans = () => {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [tabs] = useState(["Monthly", "Yearly"])

	const { data = { data: [] }, isLoading } = useQuery(
		["plans"],
		getPlans,
		{
			select: ({ data, ...rest }) => {
				const changedData = data.map((v: any) => ({
					...v,
					offices: v.offices === -1 ? "no limit for" : v.offices,
					services: v.services === -1 ? "no limit for" : v.services,
					employees: v.employees === -1 ? "no limit for" : v.employees,
					categories: v.categories === -1 ? "no limit for" : v.categories
				}))
				return { ...rest, data: changedData }
			},
			keepPreviousData: true
		}
	)

	return { data, selectedIndex, setSelectedIndex, tabs, isLoading }
}