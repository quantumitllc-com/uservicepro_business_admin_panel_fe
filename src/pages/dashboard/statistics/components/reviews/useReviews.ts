import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"
import { getReviews } from "services/dashboard/statistics"

interface IReviews {
	officeId: null | string
}

const labels = [5, 4, 3, 2, 1]

export const useReviews = () => {
	const [searchParams] = useSearchParams()
	const officeId = searchParams.get("officeId")

	const { data = { totalReviews: 0 }, isLoading } = useQuery(
		["review-statistics", officeId],
		() =>
			getReviews<IReviews>({
				officeId,
			}),
		{
			select: ({ data, ...rest }) => {
				const chartList = {
					labels: labels.map((num) =>
						num === 1 ? `${num} star` : `${num} stars`,
					),
					datasets: labels.map((num, i) => {
						const value = data[num] ? data[num] : 0

						const newdata = Array.from({ length: 5 }, () => 0)

						newdata.splice(i, 1, value)

						return {
							label: String(num),
							data: newdata,
							borderColor: "rgb(255, 99, 132)",
							backgroundColor: "#3D8798",
						}
					}),
				}
				console.log(chartList)
				return { ...data, ...rest, chartList }
			},
		},
	)
	console.log(data)
	return { data, isLoading }
}
