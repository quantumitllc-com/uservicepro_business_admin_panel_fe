import { Pane, TextInput } from "evergreen-ui"
import Chart from "react-apexcharts"
import MyHeading from "components/heading"
import MyText from "components/text"
import { Spinner } from "components/spinner"
import { Tabs } from "../tabs"
import { useChart } from "./useChart"
import { ReactComponent as ChartBar } from "./ChartBar.svg"

export const StatisticsChart = () => {
	const { type, from, data, isLoading, handleChangeType, handleChangeDate } =
		useChart()

	return (
		<Pane
			width="100%"
			padding={10}
			borderRadius={10}
			background="white"
			display="flex"
			border="1px solid #E9ECF1"
		>
			<Pane width="30%" paddingLeft={20}>
				<Pane display="flex" alignItems="center">
					<ChartBar />
					<MyHeading fontSize="20px">Chart</MyHeading>
				</Pane>
				<Pane marginTop={30}>
					<MyHeading
						fontSize={36}
						lineHeight="45px"
						fontWeight={500}
						color="#2D9F69"
					>
						${data.totalIncome}
					</MyHeading>
					<MyText
						marginTop={5}
						fontSize={16}
						fontWeight={400}
						lineHeight="20px"
						color="#8F95B2"
					>
						Total Income
					</MyText>
				</Pane>
				<Pane marginTop={30}>
					<MyHeading
						fontSize={36}
						lineHeight="45px"
						fontWeight={500}
						color="#2D9F69"
					>
						${data.tottalSales}
					</MyHeading>
					<MyText
						marginTop={5}
						fontSize={16}
						fontWeight={400}
						lineHeight="20px"
						color="#8F95B2"
					>
						Total Sales
					</MyText>
				</Pane>
			</Pane>
			<Pane width="70%">
				<Pane gap={10} display="flex" alignItems="center">
					<TextInput
						type="date"
						value={from}
						onChange={handleChangeDate}
					/>
					<Tabs value={type} onChange={handleChangeType} />
				</Pane>
				{isLoading ? (
					<Spinner />
				) : (
					<Pane>
						<Chart
							type="bar"
							series={data.series}
							options={{
								chart: {
									toolbar: {
										show: false,
									},
								},
								legend: {
									position: "bottom",
								},
								xaxis: {
									type: "category",
									tickPlacement: "on",
									categories: data.categories,
									labels: {
										rotate: 45,
									},
								},
								dataLabels: {
									enabled: true,
									offsetY: -20,
									style: {
										fontSize: "12px",
										colors: ["#000000"],
									},
									formatter: (val: string) =>
										Number(val) === 0 ? "" : val,
								},
								grid: {
									xaxis: {
										lines: {
											show: false,
										},
									},
								},
								plotOptions: {
									bar: {
										columnWidth: "50px",
										dataLabels: {
											position: "top",
										},
									},
								},
							}}
						/>
					</Pane>
				)}
			</Pane>
		</Pane>
	)
}
