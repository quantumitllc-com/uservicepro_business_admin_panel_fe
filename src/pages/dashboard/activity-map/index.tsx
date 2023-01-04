import {
	ArrowDownIcon,
	ArrowUpIcon,
	Avatar,
	ChevronRightIcon,
	Pane,
	Select,
	Table,
	Tablist,
	Tab,
	minorScale,
	SearchInput,
	Button,
	ChevronUpIcon,
	ChevronDownIcon,
	EditIcon,
	Pagination,
} from "evergreen-ui"
import { useState } from "react"
// @ts-ignore
// TODO: type for library
import USAMap from "react-usa-map"

import MyHeading from "components/heading"
import MyText from "components/text"
import MyButton from "components/button"
import "./styles.module.scss"
import MyLabel from "components/label"
import { MyInputField } from "components/input"
import { ReactComponent as Chart } from "./chart.svg"
import { ReactComponent as TableChart } from "./table.svg"
import MyBadge from "../../../components/badge"
import { subCategories } from "../services"
import { useOpenKey } from "../../../components/accordion/hooks/useOpenKey"

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

export const views = [
	{
		state: "Minnesota",
		city: "Minneapolis",
		services: 12,
		sales: "$ 510",
		employee: 12,
		id: "CC012336",
	},
	{
		state: "Minnesota",
		city: "Minneapolis",
		services: 12,
		sales: "$ 510",
		employee: 12,
		id: "CC012330",
	},
	{
		state: "Minnesota",
		city: "Minneapolis",
		services: 12,
		sales: "$ 510",
		employee: 12,
		id: "CC012331",
	},
	{
		state: "Minnesota",
		city: "Minneapolis",
		services: 12,
		sales: "$ 510",
		employee: 12,
		id: "CC012332",
	},
]

const ActivityMap = () => {
	const [state, setState] = useState<undefined | string>(undefined)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [tabs] = useState(["Map", "List view"])
	const { openKey, handleToggle } = useOpenKey()

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
		<Pane>
			<Pane display="flex">
				<Pane>
					<MyHeading marginBottom={8} fontWeight={600} fontSize={24}>
						Activity map
					</MyHeading>
					<Pane marginBottom={28} display="flex" alignItems="center">
						<MyText color="var(--dark-green)">Details</MyText>
						<ChevronRightIcon color="var(--dark-green)" />
					</Pane>
				</Pane>
				<Pane marginLeft="calc(25%)">
					<Tablist>
						{tabs.map((tab, index) => (
							<Tab
								key={tab}
								id={tab}
								onSelect={() => setSelectedIndex(index)}
								isSelected={index === selectedIndex}
								aria-controls={`panel-${tab}`}
							>
								{tab}
							</Tab>
						))}
					</Tablist>
				</Pane>
			</Pane>
			{tabs.map((tab, index) => (
				<Pane
					key={tab}
					aria-labelledby={tab}
					aria-hidden={index !== selectedIndex}
					display={index === selectedIndex ? "block" : "none"}
				>
					{tab === "Map" ? (
						<Pane
							display="grid"
							gridAutoColumns="1fr"
							gridTemplateColumns="3fr 1fr"
							gap="0px 0px"
						>
							<Pane>
								<Pane>
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
												customize={statesCustomConfig(
													state,
												)}
											/>
										</Pane>
										<Pane
											padding={8}
											boxShadow="0px 2px 9px rgba(0, 0, 0, 0.1)"
											borderRadius={10}
											justifyContent="space-between"
											display="flex"
										>
											<Pane
												gap={20}
												alignItems="center"
												display="flex"
											>
												<MyHeading>Category</MyHeading>
												<Select>
													<option value="foo">
														Foo
													</option>
													<option value="bar">
														Bar
													</option>
												</Select>
											</Pane>
											<Pane
												gap={20}
												alignItems="center"
												display="flex"
											>
												<MyHeading>
													Sub-category
												</MyHeading>
												<Select>
													<option value="foo">
														Foo
													</option>
													<option value="bar">
														Bar
													</option>
												</Select>
											</Pane>
											<MyButton
												small="true"
												appearance="primary"
											>
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
											<MyHeading
												marginBottom={4}
												fontSize={24}
											>
												List of Services
											</MyHeading>
											<Pane
												marginBottom={20}
												display="flex"
												flexDirection="column"
											>
												<MyText>14 services</MyText>
												<MyText color="var(--dark-green)">
													See more
												</MyText>
											</Pane>
											<Table border="none">
												<Table.Body>
													{services.map((service) => (
														<Table.Row
															width={400}
															key={service.id}
														>
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
																		size={
																			40
																		}
																	/>
																	<Pane>
																		<MyHeading
																			fontSize={
																				12
																			}
																			fontWeight={
																				400
																			}
																		>
																			{
																				service.name
																			}
																		</MyHeading>
																		{
																			service.rate
																		}{" "}
																		by{" "}
																		{
																			service.review
																		}
																	</Pane>
																</Pane>
															</Table.TextCell>
															<Table.TextCell>
																<MyHeading
																	fontWeight={
																		400
																	}
																	fontSize={
																		12
																	}
																>
																	# Customers
																</MyHeading>
																{
																	service.customers
																}
															</Table.TextCell>
															<Table.TextCell>
																<MyHeading
																	fontWeight={
																		400
																	}
																	fontSize={
																		12
																	}
																>
																	Coverage
																	area
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
												<MyText>
													Service list statistics
												</MyText>
											</Pane>
											<Table border="none">
												<Table.Body>
													{stats.map((stat) => (
														<Table.Row
															width={200}
															key={stat.id}
														>
															<Table.TextCell>
																<MyText>
																	{stat.name}
																</MyText>
															</Table.TextCell>
															<Table.TextCell>
																<Pane
																	gap={8}
																	display="flex"
																>
																	{
																		stat.number
																	}
																	{stat.trend}
																	{
																		stat.percent
																	}
																</Pane>
															</Table.TextCell>
														</Table.Row>
													))}
												</Table.Body>
											</Table>
										</Pane>
									</Pane>
								</Pane>
							</Pane>
							<Pane
								paddingLeft={30}
								borderLeft="1px solid var(--dark-grey)"
							>
								<Pane
									paddingY={28}
									paddingX={40}
									borderRadius={10}
									backgroundColor="var(--dark-green)"
									marginBottom={20}
								>
									<MyHeading
										fontSize={24}
										color="var(--white)"
									>
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
											<MyText
												fontSize={12}
												color="var(--black)"
											>
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
									<Select
										marginTop={8}
										height={40}
										width="100%"
									>
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
					) : (
						<Pane>
							<MyHeading
								marginBottom={8}
								fontSize={25}
								fontWeight={600}
							>
								List view
							</MyHeading>
							<MyHeading>List of locations</MyHeading>
							<Pane marginTop={16}>
								<Pane
									border="1px solid var(--white)"
									display="flex"
									alignItems="center"
									gap="30px"
									backgroundColor="var(--white)"
									padding={minorScale(7)}
								>
									<MyText>50 Locations</MyText>
									<SearchInput placeholder="Search anything" />
									<Select>
										<option value="foo">Foo</option>
										<option value="bar">Bar</option>
									</Select>
									<Select>
										<option value="foo">Foo</option>
										<option value="bar">Bar</option>
									</Select>
									<Pane display="flex" gap="10px">
										<MyHeading>Sort by:</MyHeading>
										<MyText color="var(--dark-green)">
											Type
										</MyText>
										<MyText>Rating</MyText>
										<MyText>Region</MyText>
									</Pane>
								</Pane>
								<Table>
									<Table.Head>
										<Table.TextHeaderCell>
											Country
										</Table.TextHeaderCell>
										<Table.TextHeaderCell>
											State
										</Table.TextHeaderCell>
										<Table.TextHeaderCell>
											City
										</Table.TextHeaderCell>
										<Table.TextHeaderCell>
											Services
										</Table.TextHeaderCell>
										<Table.TextHeaderCell>
											Sales
										</Table.TextHeaderCell>
										<Table.TextHeaderCell>
											Employees
										</Table.TextHeaderCell>
										<Table.TextHeaderCell>
											Sub locations
										</Table.TextHeaderCell>
									</Table.Head>
									<Table.Body>
										{views.map((view) => (
											<Pane key={view.id}>
												<Table.Row
													onSelect={() =>
														handleToggle(view.id)
													}
													isSelectable
												>
													<Table.TextCell>
														<Avatar
															src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
															size={40}
														/>
													</Table.TextCell>
													<Table.TextCell>
														{view.state}
													</Table.TextCell>
													<Table.TextCell>
														{view.city}
													</Table.TextCell>
													<Table.TextCell>
														{view.services}
													</Table.TextCell>
													<Table.TextCell>
														<MyText color="var(--green)">
															{view.sales}
														</MyText>
													</Table.TextCell>
													<Table.TextCell>
														{view.employee}
													</Table.TextCell>
													<Table.TextCell>
														{openKey === view.id ? (
															<ChevronUpIcon />
														) : (
															<ChevronDownIcon />
														)}
													</Table.TextCell>
												</Table.Row>
												{openKey === view.id && (
													<Table userSelect="text">
														<Table.Head>
															<Table.TextHeaderCell textTransform="none">
																Type of service
															</Table.TextHeaderCell>
															<Table.TextHeaderCell textTransform="none">
																Service ID
															</Table.TextHeaderCell>
															<Table.TextHeaderCell textTransform="none">
																Price
															</Table.TextHeaderCell>
															<Table.TextHeaderCell textTransform="none">
																Area
															</Table.TextHeaderCell>
															<Table.TextHeaderCell textTransform="none">
																Status
															</Table.TextHeaderCell>
															<Table.TextHeaderCell textTransform="none">
																Number of
																Employees
															</Table.TextHeaderCell>
															<Table.TextHeaderCell textTransform="none">
																Action
															</Table.TextHeaderCell>
														</Table.Head>
														<Table.Body>
															{subCategories.map(
																(
																	subCategory,
																) => (
																	<Table.Row
																		key={
																			subCategory.id
																		}
																		isSelectable
																	>
																		<Table.TextCell>
																			{
																				subCategory.type
																			}
																		</Table.TextCell>
																		<Table.TextCell>
																			{
																				subCategory.id
																			}
																		</Table.TextCell>
																		<Table.TextCell
																			isNumber
																		>
																			{
																				subCategory.price
																			}
																		</Table.TextCell>
																		<Table.TextCell>
																			{
																				subCategory.area
																			}
																		</Table.TextCell>
																		<Table.TextCell>
																			<MyBadge backgroundColor="var(--green)">
																				{
																					subCategory.status
																				}
																			</MyBadge>
																		</Table.TextCell>
																		<Table.TextCell
																			isNumber
																		>
																			{
																				subCategory.employees
																			}
																		</Table.TextCell>
																		<Table.TextCell>
																			<Button
																				iconBefore={
																					EditIcon
																				}
																			>
																				Edit
																			</Button>
																		</Table.TextCell>
																	</Table.Row>
																),
															)}
														</Table.Body>
													</Table>
												)}
											</Pane>
										))}
									</Table.Body>
								</Table>
							</Pane>
							<Pagination
								marginTop={25}
								display="flex"
								justifyContent="center"
								page={1}
								totalPages={7}
							/>
						</Pane>
					)}
				</Pane>
			))}
		</Pane>
	)
}

export default ActivityMap
