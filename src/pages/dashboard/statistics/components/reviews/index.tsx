import MyHeading from "components/heading"
import { Pane } from "evergreen-ui"
import MyText from "components/text"
import Chart from "react-apexcharts"
import { useReviews } from "./useReviews"
import { categories } from "./constants"

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
			<MyText
				fontWeight={400}
				fontSize={16}
				lineHeight="20px"
				color=" #5F7096"
			>
				{data.totalReviews} users feedback
			</MyText>
			{isLoading ? null : (
				<Chart
					type="bar"
					options={{
						chart: {
							toolbar: {
								show: false,
							},
						},
						plotOptions: {
							bar: {
								horizontal: true,
								barHeight: "30px",
								dataLabels: {
									position: "top",
								},
							},
						},
						colors: ["#3D8798"],
						dataLabels: {
							enabled: true,
							offsetX: -10,
							style: {
								fontSize: "12px",
								colors: ["#fff"],
							},
						},
						grid: {
							yaxis: {
								lines: {
									show: false,
								},
							},
						},
						xaxis: {
							categories,
						},
					}}
					series={data.series}
				/>
			)}
		</Pane>
	)
}
