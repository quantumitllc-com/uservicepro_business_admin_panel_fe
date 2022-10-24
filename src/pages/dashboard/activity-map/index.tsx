import {
	ArrowDownIcon,
	ArrowUpIcon,
	Avatar,
	ChevronRightIcon,
	Pane,
	Select,
	Table,
} from "evergreen-ui"
import { useState } from "react"
// @ts-ignore
// TODO: type for library
import USAMap from "react-usa-map"

import MyHeading from "shared/ui/heading"
import MyText from "shared/ui/text"
import MyButton from "shared/ui/button"
import "./styles.module.scss"
import MyLabel from "shared/ui/label"
import { MyInputField } from "shared/ui/input"
import { ReactComponent as Chart } from "./chart.svg"
import { ReactComponent as TableChart } from "./table.svg"

export const services = [
	{
		id: 1,
		name: "House Cleaning",
		rate: 4.7,
		review: 3200,
		customers: 2300,
		area: "10 - 100",
	},
	{
		id: 2,
		name: "House Cleaning",
		rate: 4.7,
		review: 3200,
		customers: 2300,
		area: "10 - 100",
	},
	{
		id: 3,
		name: "House Cleaning",
		rate: 4.7,
		review: 3200,
		customers: 2300,
		area: "10 - 100",
	},
]

export const stats = [
	{
		id: 1,
		name: "Text 1",
		number: 100,
		trend: <ArrowUpIcon color="var(--green)" />,
		percent: "15%",
	},
	{
		id: 3,
		name: "Text 1",
		number: 100,
		trend: <ArrowUpIcon color="var(--red)" />,
		percent: "15%",
	},
	{
		id: 4,
		name: "Text 1",
		number: 100,
		trend: <ArrowUpIcon color="var(--green)" />,
		percent: "15%",
	},
	{
		id: 5,
		name: "Text 1",
		number: 100,
		trend: <ArrowDownIcon color="var(--green)" />,
		percent: "15%",
	},
]

const ActivityMap = () => {
	const [state, setState] = useState<undefined | string>(undefined)

	/* optional customization of filling per state and calling custom callbacks per state */
	const statesCustomConfig = (chosen = "") => ({
		[chosen]: {
			fill: "#CC0000",
		},
	})

	/* mandatory */
	const mapHandler = (event: { target: { dataset: { name: string } } }) => {
		setState(event.target.dataset.name)
	}

	return (
		<Pane
			display="grid"
			gridAutoColumns="1fr"
			gridTemplateColumns="3fr 1fr"
			gap="0px 0px"
		>
			<Pane>
				<MyHeading marginBottom={8} fontWeight={600} fontSize={24}>
					Activity map
				</MyHeading>
				<Pane marginBottom={28} display="flex" alignItems="center">
					<MyText color="var(--dark-green)">Details</MyText>
					<ChevronRightIcon color="var(--dark-green)" />
				</Pane>
				<Pane
					padding={24}
					borderRadius={4}
					backgroundColor="var(--white)"
					marginRight={30}
					marginBottom={20}
				>
					<Pane
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<USAMap
							width={500}
							height={300}
							defaultFill="var(--map)"
							onClick={mapHandler}
							customize={statesCustomConfig(state)}
						/>
					</Pane>
					<Pane
						padding={8}
						boxShadow="0px 2px 9px rgba(0, 0, 0, 0.1)"
						borderRadius={10}
						justifyContent="space-between"
						display="flex"
					>
						<Pane gap={20} alignItems="center" display="flex">
							<MyHeading>Category</MyHeading>
							<Select>
								<option value="foo">Foo</option>
								<option value="bar">Bar</option>
							</Select>
						</Pane>
						<Pane gap={20} alignItems="center" display="flex">
							<MyHeading>Sub-category</MyHeading>
							<Select>
								<option value="foo">Foo</option>
								<option value="bar">Bar</option>
							</Select>
						</Pane>
						<MyButton small="true" appearance="primary">
							Search
						</MyButton>
					</Pane>
				</Pane>
				<Pane
					justifyContent="space-between"
					display="flex"
					marginRight={30}
				>
					<Pane
						paddingY={20}
						paddingX={30}
						borderRadius={4}
						backgroundColor="var(--white)"
					>
						<MyHeading marginBottom={4} fontSize={24}>
							List of Services
						</MyHeading>
						<Pane
							marginBottom={20}
							display="flex"
							flexDirection="column"
						>
							<MyText>14 services</MyText>
							<MyText color="var(--dark-green)">See more</MyText>
						</Pane>
						<Table border="none">
							<Table.Body>
								{services.map((service) => (
									<Table.Row width={400} key={service.id}>
										<Table.TextCell
											flexBasis={175}
											flexShrink={0}
											flexGrow={0}
										>
											<Pane
												alignItems="center"
												gap={8}
												display="flex"
											>
												<Avatar
													name="Jeroen Ransijn"
													size={40}
												/>
												<Pane>
													<MyHeading
														fontSize={12}
														fontWeight={400}
													>
														{service.name}
													</MyHeading>
													{service.rate} by{" "}
													{service.review}
												</Pane>
											</Pane>
										</Table.TextCell>
										<Table.TextCell>
											<MyHeading
												fontWeight={400}
												fontSize={12}
											>
												# Customers
											</MyHeading>
											{service.customers}
										</Table.TextCell>
										<Table.TextCell>
											<MyHeading
												fontWeight={400}
												fontSize={12}
											>
												Coverage area
											</MyHeading>
											{service.area}
										</Table.TextCell>
									</Table.Row>
								))}
							</Table.Body>
						</Table>
					</Pane>
					<Pane
						paddingY={20}
						paddingX={30}
						borderRadius={4}
						backgroundColor="var(--white)"
					>
						<Pane marginBottom={20}>
							<MyText>Service list statistics</MyText>
						</Pane>
						<Table border="none">
							<Table.Body>
								{stats.map((stat) => (
									<Table.Row width={200} key={stat.id}>
										<Table.TextCell>
											<MyText>{stat.name}</MyText>
										</Table.TextCell>
										<Table.TextCell>
											<Pane gap={8} display="flex">
												{stat.number}
												{stat.trend}
												{stat.percent}
											</Pane>
										</Table.TextCell>
									</Table.Row>
								))}
							</Table.Body>
						</Table>
					</Pane>
				</Pane>
			</Pane>
			<Pane
				paddingLeft={30}
				borderLeft="1px solid var(--dark-grey)"
				marginTop={76}
			>
				<Pane
					paddingY={28}
					paddingX={40}
					borderRadius={10}
					backgroundColor="var(--dark-green)"
					marginBottom={20}
				>
					<MyHeading fontSize={24} color="var(--white)">
						{state ? `${state} State` : "USA"}
					</MyHeading>
				</Pane>
				<Pane
					padding={16}
					borderRadius={6}
					backgroundColor="var(--white)"
					marginBottom={20}
				>
					<Pane
						borderRadius={6}
						padding={8}
						backgroundColor="var(--grey-background)"
						marginBottom={20}
					>
						<MyText>Average Rating</MyText>
						<Pane
							gap={10}
							alignItems="flex-end"
							display="flex"
							marginTop={8}
						>
							<Pane
								padding={16}
								borderRadius={10}
								backgroundColor="#DAFEE2"
							>
								<MyText
									fontWeight={700}
									fontSize={24}
									color="#62A290"
								>
									4.7
								</MyText>
							</Pane>
							<MyText fontSize={12} color="var(--black)">
								by 343 reviews
							</MyText>
						</Pane>
					</Pane>
					<MyInputField
						disabled
						width="100%"
						placeholder={state}
						marginBottom={20}
						label={<MyLabel>State</MyLabel>}
					/>
					<MyLabel marginBottom={8}>City</MyLabel>
					<Select marginTop={8} height={40} width="100%">
						<option value="foo">Foo</option>
						<option value="bar">Bar</option>
					</Select>
				</Pane>
				<Pane
					padding={16}
					borderRadius={6}
					backgroundColor="var(--white)"
				>
					<MyText>Sales trend</MyText>
					<MyHeading
						marginTop={20}
						fontSize={48}
						fontWeight={700}
						color="var(--dark-green)"
						marginBottom={8}
					>
						64.3%
					</MyHeading>
					<MyText
						opacity={0.6}
						fontSize={12}
						color="var(--dark-green)"
					>
						Compared to $21,504 last year
					</MyText>
					<Pane marginY={24}>
						<Chart />
					</Pane>
					<Pane marginLeft={-15}>
						<TableChart />
					</Pane>
				</Pane>
			</Pane>
		</Pane>
	)
}

export default ActivityMap
