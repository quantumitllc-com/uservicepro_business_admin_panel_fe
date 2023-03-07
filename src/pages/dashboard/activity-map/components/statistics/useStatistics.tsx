import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { getStatistics } from "services/dashboard/map"

export const useStatistics = () => {
	const navigate = useNavigate()

	const {
		data = { data: { income: 0, sales: 0 } },
		isLoading,
		isFetching,
	} = useQuery(["activity-statistics-map"], getStatistics, {
		select: (res) => ({
			...res,
			data: {
				income: res.data[0].totalIncome,
				sales: res.data[0].totalSales,
			},
		}),
		keepPreviousData: true,
	})
	console.log(data)
	const handleNavigate = () => navigate("/order")

	return { data, handleNavigate }
}
