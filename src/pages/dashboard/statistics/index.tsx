import { Avatar, Pane, Select, Table } from "evergreen-ui"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	BarElement,
} from "chart.js"
import { Line, Bar } from "react-chartjs-2"
import faker from "faker"

import MyHeading from "shared/ui/heading"
import MyButton from "shared/ui/button"
import MyText from "shared/ui/text"
import MyBadge from "shared/ui/badge"
import MyTabs from "shared/ui/tabs"
import Employee from "entities/employee"
import { ReactComponent as Stars } from "./stars.svg"

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
)

const labels = ["January", "February", "March", "April", "May", "June", "July"]

export const data = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: labels.map(() =>
				faker.datatype.number({ min: -1000, max: 1000 }),
			),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Dataset 2",
			data: labels.map(() =>
				faker.datatype.number({ min: -1000, max: 1000 }),
			),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
}

export const data2 = {
	labels: labels.splice(0, 3),
	datasets: [
		{
			label: "Dataset 1",
			data: labels.map(() =>
				faker.datatype.number({ min: 0, max: 1000 }),
			),
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Dataset 2",
			data: labels.map(() =>
				faker.datatype.number({ min: 0, max: 1000 }),
			),
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
}

const profiles = [
	{
		id: "1",
		service: "House Cleaning",
		name: "Cheryl Carter",
		review: "Everything was cool thank you",
	},
	{
		id: "2",
		service: "House Cleaning",
		name: "Cheryl Carter",
		review: "Everything was cool thank you",
	},
	{
		id: "3",
		service: "House Cleaning",
		name: "Cheryl Carter",
		review: "Everything was cool thank you",
	},
	{
		id: "4",
		service: "House Cleaning",
		name: "Cheryl Carter",
		review: "Everything was cool thank you",
	},
	{
		id: "5",
		service: "House Cleaning",
		name: "Cheryl Carter",
		review: "Everything was cool thank you",
	},
	{
		id: "6",
		service: "House Cleaning",
		name: "Cheryl Carter",
		review: "Everything was cool thank you",
	},
	{
		id: "7",
		service: "House Cleaning",
		name: "Cheryl Carter",
		review: "Everything was cool thank you",
	},
]

const Statistics = () => (
	<Pane>
		<Pane
			marginX={-30}
			marginTop={-30}
			backgroundColor="var(--stroke-block)"
			display="flex"
			alignItems="center"
			gap={30}
			paddingY={40}
			paddingX={30}
			marginBottom={30}
		>
			<MyHeading fontWeight={600} fontSize={24}>
				Statistics
			</MyHeading>
			<Select height={40}>
				<option value="Arizona State">Arizona State</option>
			</Select>
			<Select height={40}>
				<option value="Arkansas">Arkansas</option>
			</Select>
			<MyButton appearance="primary" small="true">
				Select
			</MyButton>
		</Pane>
		<Pane
			display="grid"
			gridAutoColumns="1fr"
			gridTemplateColumns="3fr 1fr"
			gap="20px 30px"
		>
			<Pane
				padding={20}
				border="1px solid var(--stroke-block)"
				borderRadius={10}
				backgroundColor="var(--white)"
			>
				<MyTabs
					justifyContent="flex-end"
					tabs={[
						{ text: "Daily" },
						{ text: "Weekly", active: true },
						{ text: "Monthly" },
					]}
				/>
				<MyHeading>Sales</MyHeading>
				<Pane display="flex" gap="25%" marginBottom={30}>
					<MyText>121 Sales</MyText>
					<MyBadge backgroundColor="var(--black)">
						Arizona state
					</MyBadge>
				</Pane>
				<Pane
					alignItems="flex-end"
					justifyContent="space-between"
					display="flex"
					gap={25}
				>
					<Pane>
						<Pane marginBottom={30}>
							<MyHeading
								marginBottom={10}
								fontSize={36}
								color="var(--dark-green)"
							>
								$567.25
							</MyHeading>
							<MyText>Current week</MyText>
						</Pane>
						<Pane marginBottom={30}>
							<MyHeading
								marginBottom={10}
								fontSize={36}
								color="var(--dark-green)"
							>
								82
							</MyHeading>
							<MyText>Sales for this week</MyText>
						</Pane>
						<Pane>
							<MyText
								marginBottom={10}
								display="block"
								color="var(--black)"
							>
								For more details to see click button below
							</MyText>
							<MyButton small="true" appearance="primary">
								Last Month Summary
							</MyButton>
						</Pane>
					</Pane>
					<Pane width="100%">
						<Line
							height={275}
							options={{ maintainAspectRatio: false }}
							data={data}
						/>
					</Pane>
				</Pane>
			</Pane>
			<Pane
				padding={20}
				backgroundColor="var(--white)"
				border="1px solid var(--stroke-block)"
				borderRadius={10}
			>
				<Pane
					marginBottom={5}
					display="flex"
					justifyContent="space-between"
				>
					<MyHeading>Employees</MyHeading>
					<MyBadge backgroundColor="var(--black)">See more</MyBadge>
				</Pane>
				<MyText>21 active users</MyText>
				<Pane marginTop={10} display="flex" flexDirection="column">
					<Employee />
					<Employee />1
					<Employee />
					<Employee />
				</Pane>
			</Pane>
			<Pane
				padding={20}
				border="1px solid var(--stroke-block)"
				borderRadius={10}
				backgroundColor="var(--white)"
			>
				<MyTabs
					marginBottom={20}
					justifyContent="flex-start"
					tabs={[
						{ text: "Pending" },
						{ text: "In progress", active: true },
						{ text: "Rejected" },
					]}
				/>
				<Table>
					<Table.Head>
						<Table.TextHeaderCell
							flexBasis={300}
							flexShrink={0}
							flexGrow={0}
							textTransform="capitalize"
						>
							Review
						</Table.TextHeaderCell>
						<Table.TextHeaderCell textTransform="capitalize">
							Service
						</Table.TextHeaderCell>
						<Table.TextHeaderCell textTransform="capitalize">
							Rating
						</Table.TextHeaderCell>
					</Table.Head>
					<Table.Body height={240}>
						{profiles.map((profile) => (
							<Table.Row key={profile.id} isSelectable>
								<Table.TextCell
									flexBasis={300}
									flexShrink={0}
									flexGrow={0}
								>
									<Pane
										gap={20}
										alignItems="center"
										display="flex"
									>
										<Avatar
											src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
											size={40}
										/>
										<Pane>
											<MyHeading fontSize={14}>
												{profile.name}
											</MyHeading>
											<MyText fontSize={12}>
												{profile.review}
											</MyText>
										</Pane>
									</Pane>
								</Table.TextCell>
								<Table.TextCell>
									{profile.service}
								</Table.TextCell>
								<Table.TextCell>
									<Pane
										display="flex"
										gap={15}
										alignItems="center"
									>
										<MyHeading>4.7</MyHeading>
										<Stars />
									</Pane>
								</Table.TextCell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</Pane>
			<Pane
				padding={20}
				border="1px solid var(--stroke-block)"
				borderRadius={10}
				backgroundColor="var(--white)"
			>
				<MyHeading marginBottom={5}>Review</MyHeading>
				<MyText>4000 users feedback</MyText>
				<Pane marginTop={20}>
					<Bar
						width={200}
						height={300}
						options={{ maintainAspectRatio: false }}
						data={data2}
					/>
				</Pane>
			</Pane>
		</Pane>
	</Pane>
)

export default Statistics
