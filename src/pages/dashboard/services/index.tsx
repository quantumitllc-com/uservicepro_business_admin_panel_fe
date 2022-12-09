import {
	AddIcon,
	minorScale,
	Pane,
	Table,
	EditIcon,
	Button,
	Pagination,
	ChevronDownIcon,
	ChevronUpIcon,
	SearchInput,
	FilterIcon,
	Popover,
	Position,
	Card,
} from "evergreen-ui"
import { Link } from "react-router-dom"

import MyHeading from "shared/ui/heading"
import MyButton from "shared/ui/button"
import MyBadge from "shared/ui/badge"
import { useOpenKey } from "entities/accordion/hooks/useOpenKey"
import MyText from "shared/ui/text"
import MyCheckbox from "shared/ui/checkbox"
import { MyInput } from "shared/ui/input"
import styles from "../../reg/business/styles.module.scss"

export const categories = [
	{
		name: "Cleaning",
		id: "CC012336",
	},
	{
		name: "Something",
		id: "CC012330",
	},
	{
		name: "Something",
		id: "CC012331",
	},
	{
		name: "Something",
		id: "CC012332",
	},
	{
		name: "Something",
		id: "CC012333",
	},
	{
		name: "Something",
		id: "CC012334",
	},
]

export const subCategories = [
	{
		type: "Car Cleaning",
		id: "CC012334",
		price: "$10/hr",
		area: "3-10 miles",
		status: "Available",
		employees: 10,
	},
	{
		type: "Car Cleaning",
		id: "CC012335",
		price: "$10/hr",
		area: "3-10 miles",
		status: "Available",
		employees: 10,
	},
]

const Services = () => {
	const { openKey, handleToggle } = useOpenKey()

	return (
		<Pane>
			<MyHeading fontSize={25} fontWeight={600}>
				Services
			</MyHeading>
			<Pane
				display="flex"
				alignItems="flex-end"
				justifyContent="space-between"
				marginBottom={minorScale(5)}
			>
				<MyHeading>List of services</MyHeading>
				<Link to="add">
					<MyButton
						iconBefore={AddIcon}
						small="true"
						appearance="primary"
						backgroundColor="var(--green)"
					>
						Add Service
					</MyButton>
				</Link>
			</Pane>
			<Pane>
				<Pane
					border="1px solid var(--white)"
					display="flex"
					alignItems="center"
					gap="30px"
					backgroundColor="var(--white)"
					padding={minorScale(7)}
				>
					<MyText>25 Services</MyText>
					<Pane display="flex" gap="10px">
						<MyText>See:</MyText>
						<MyText
							textDecoration="underline"
							color="var(--dark-green)"
						>
							25
						</MyText>
						<MyText>50</MyText>
						<MyText>75</MyText>
					</Pane>
					<SearchInput placeholder="Search anything" />
					<Pane display="flex" gap="10px">
						<MyHeading>Sort by:</MyHeading>
						<MyText color="var(--dark-green)">Type</MyText>
						<MyText>Rating</MyText>
						<MyText>Region</MyText>
					</Pane>
				</Pane>
				<Pane
					backgroundColor="var(--white)"
					borderTop="1px solid var(--stroke-block)"
					gap={minorScale(5)}
					display="flex"
					alignItems="center"
					paddingY={minorScale(5)}
					paddingX={minorScale(7)}
				>
					<Popover
						position={Position.BOTTOM_LEFT}
						content={
							<Card
								width={300}
								padding={minorScale(5)}
								border="1px solid var(--dark-green)"
							>
								<MyHeading marginBottom={minorScale(2)}>
									List of sub-categories
								</MyHeading>
								<SearchInput
									marginBottom={minorScale(2)}
									width="100%"
									placeholder="Search anything"
								/>
								<ul className={styles.container}>
									<li className={styles.list}>
										<MyCheckbox
											marginRight={minorScale(3)}
										/>
										Office-cleaning
									</li>
									<li className={styles.list}>
										<MyCheckbox
											marginRight={minorScale(3)}
										/>
										Car-cleaning
									</li>
									<li className={styles.list}>
										<MyCheckbox
											marginRight={minorScale(3)}
										/>
										Wood carving
									</li>
									<li className={styles.list}>
										<MyCheckbox
											marginRight={minorScale(3)}
										/>
										Crafting
									</li>
								</ul>
								<MyText color="var(--dark-green)">
									See more 15 sub-categories
								</MyText>
								<Pane
									marginTop={minorScale(2)}
									display="flex"
									justifyContent="space-between"
								>
									<MyButton
										borderRadius="120px"
										small="true"
										appearance="primary"
									>
										Add
									</MyButton>
									<MyButton
										borderRadius="120px"
										small="true"
										appearance="outlined"
									>
										Close
									</MyButton>
								</Pane>
							</Card>
						}
					>
						<Button
							borderColor="var(--dark-green)"
							color="var(--dark-green)"
							appearance="outlined"
							size="large"
						>
							Service type
						</Button>
					</Popover>
					<Popover
						position={Position.BOTTOM_LEFT}
						content={
							<Card
								width={300}
								padding={minorScale(5)}
								border="1px solid var(--dark-green)"
							>
								<MyHeading marginBottom={minorScale(2)}>
									Hourly Price
								</MyHeading>
								<Pane
									display="flex"
									alignItems="center"
									justifyContent="space-between"
								>
									<MyInput width={120} placeholder="Min" />
									-
									<MyInput width={120} placeholder="Max" />
								</Pane>
								<Pane
									marginTop={minorScale(2)}
									display="flex"
									justifyContent="space-between"
								>
									<MyButton
										borderRadius="120px"
										small="true"
										appearance="primary"
									>
										Done
									</MyButton>
									<MyButton
										borderRadius="120px"
										small="true"
										appearance="outlined"
									>
										Close
									</MyButton>
								</Pane>
							</Card>
						}
					>
						<Button
							borderColor="var(--dark-green)"
							color="var(--dark-green)"
							appearance="outlined"
							size="large"
						>
							Price
						</Button>
					</Popover>
					<Popover
						position={Position.BOTTOM_LEFT}
						content={
							<Card
								width={300}
								padding={minorScale(5)}
								border="1px solid var(--dark-green)"
							>
								<MyHeading marginBottom={minorScale(2)}>
									Status of Employee
								</MyHeading>
								<ul className={styles.container}>
									<li className={styles.list}>
										<MyCheckbox
											marginRight={minorScale(3)}
										/>
										Active
									</li>
									<li className={styles.list}>
										<MyCheckbox
											marginRight={minorScale(3)}
										/>
										Inactive
									</li>
									<li className={styles.list}>
										<MyCheckbox
											marginRight={minorScale(3)}
										/>
										All
									</li>
								</ul>
								<Pane
									marginTop={minorScale(2)}
									display="flex"
									justifyContent="space-between"
								>
									<MyButton
										borderRadius="120px"
										small="true"
										appearance="primary"
									>
										Add
									</MyButton>
									<MyButton
										borderRadius="120px"
										small="true"
										appearance="outlined"
									>
										Close
									</MyButton>
								</Pane>
							</Card>
						}
					>
						<Button
							borderColor="var(--dark-green)"
							color="var(--dark-green)"
							appearance="outlined"
							size="large"
						>
							Status
						</Button>
					</Popover>
					<Popover
						position={Position.BOTTOM_LEFT}
						content={
							<Card
								width={300}
								padding={minorScale(5)}
								border="1px solid var(--dark-green)"
							>
								<MyHeading marginBottom={minorScale(2)}>
									Filters
								</MyHeading>
								<SearchInput
									marginBottom={minorScale(2)}
									width="100%"
									placeholder="Search anything"
								/>
								<MyHeading marginBottom={minorScale(2)}>
									Hourly Price
								</MyHeading>
								<Pane
									display="flex"
									alignItems="center"
									justifyContent="space-between"
									marginBottom={minorScale(5)}
								>
									<MyInput width={120} placeholder="Min" />
									-
									<MyInput width={120} placeholder="Max" />
								</Pane>
								<Pane
									marginTop={minorScale(2)}
									display="flex"
									justifyContent="space-between"
								>
									<MyButton
										borderRadius="120px"
										small="true"
										appearance="primary"
									>
										Done
									</MyButton>
									<MyButton
										borderRadius="120px"
										small="true"
										appearance="outlined"
									>
										Close
									</MyButton>
								</Pane>
							</Card>
						}
					>
						<Button
							borderColor="var(--dark-green)"
							color="var(--dark-green)"
							appearance="outlined"
							size="large"
						>
							More +4
						</Button>
					</Popover>
					<MyButton small="true" appearance="primary">
						Apply filters
					</MyButton>
					<FilterIcon color="var(--grey)" />
					<MyText>Filter Applied. 5/49 fields shown.</MyText>
					<MyHeading color="var(--dark-green)">
						Clear filter
					</MyHeading>
				</Pane>
				<Table userSelect="none">
					<Table.Head>
						<Table.TextHeaderCell flexBasis="90%">
							Name
						</Table.TextHeaderCell>
						<Table.TextHeaderCell>Action</Table.TextHeaderCell>
					</Table.Head>
					<Table.Body>
						{categories.map((category) => (
							<Pane key={category.id}>
								<Table.Row
									onSelect={() => handleToggle(category.id)}
									isSelectable
								>
									<Table.TextCell flexBasis="90%">
										{category.name}
									</Table.TextCell>
									<Table.TextCell>
										{openKey === category.id ? (
											<ChevronUpIcon />
										) : (
											<ChevronDownIcon />
										)}
									</Table.TextCell>
								</Table.Row>
								{openKey === category.id && (
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
												Number of Employees
											</Table.TextHeaderCell>
											<Table.TextHeaderCell textTransform="none">
												Action
											</Table.TextHeaderCell>
										</Table.Head>
										<Table.Body>
											{subCategories.map(
												(subCategory) => (
													<Table.Row
														key={subCategory.id}
														isSelectable
													>
														<Table.TextCell>
															{subCategory.type}
														</Table.TextCell>
														<Table.TextCell>
															{subCategory.id}
														</Table.TextCell>
														<Table.TextCell
															isNumber
														>
															{subCategory.price}
														</Table.TextCell>
														<Table.TextCell>
															{subCategory.area}
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
	)
}

export default Services
