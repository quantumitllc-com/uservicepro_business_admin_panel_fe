import MyHeading from "components/heading"
import { Pane } from "evergreen-ui"
import { Bar } from "react-chartjs-2"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js"
import { useReviews } from "./useReviews"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
	indexAxis: "y" as const,
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: true,
			text: "Chart.js Bar Chart",
		},
	},
}

export const Reviews = () => {
	const { data, isLoading } = useReviews()

	return (
		<Pane
			width="50%"
			padding={10}
			borderRadius={10}
			background="white"
			border="1px solid #E9ECF1"
		>
			<MyHeading>Review</MyHeading>
			{isLoading ? null : <Bar options={options} data={data.chartList} />}
		</Pane>
	)
}
