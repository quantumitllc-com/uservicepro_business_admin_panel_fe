import {
	AddIcon,
	Avatar,
	MoreIcon,
	minorScale,
	Pagination,
	Pane,
	SearchInput,
	Table,
	Dialog,
	FilePicker,
	SelectField,
} from "evergreen-ui"
import { useState } from "react"

import MyHeading from "shared/ui/heading"
import MyButton from "shared/ui/button"
import MyText from "shared/ui/text"
import EmployeeDetails from "entities/employee-details"
import useIsShown from "shared/lib/hooks/useIsShown"
import MyLabel from "../../../shared/ui/label"
import { MyInputField } from "../../../shared/ui/input"

const employees = [
	{
		id: "1",
		name: "Carrie Alexander",
		dob: "12/05/1996",
		phone: "(480) 123 45 67",
		email: "carrie.a12@gmail.com",
	},
	{
		id: "2",
		name: "Carrie Alexander",
		dob: "12/05/1996",
		phone: "(480) 123 45 67",
		email: "carrie.a12@gmail.com",
	},
	{
		id: "3",
		name: "Carrie Alexander",
		dob: "12/05/1996",
		phone: "(480) 123 45 67",
		email: "carrie.a12@gmail.com",
	},
]

const Employee = () => {
	const { setIsShown, isShown } = useIsShown()
	const [isShownAdd, setIsShownAdd] = useState(false)

	return (
		<Pane>
			<MyHeading fontSize={25} fontWeight={600}>
				Employees
			</MyHeading>
			<Pane
				display="flex"
				alignItems="flex-end"
				justifyContent="space-between"
				marginBottom={minorScale(5)}
			>
				<MyHeading>List of employees</MyHeading>
				<MyButton
					iconBefore={AddIcon}
					small="true"
					appearance="primary"
					backgroundColor="var(--green)"
					onClick={() => setIsShownAdd(true)}
				>
					Add employee
				</MyButton>
				<Dialog
					isShown={isShownAdd}
					title="Employee info"
					onCloseComplete={() => setIsShownAdd(false)}
					confirmLabel="Add employee"
					width={700}
				>
					<Pane gap={14} display="flex">
						<MyInputField
							type="text"
							label={<MyLabel>Given name</MyLabel>}
							placeholder="Clark"
						/>
						<MyInputField
							type="text"
							label={<MyLabel>Last name</MyLabel>}
							placeholder="Clark"
						/>
					</Pane>
					<Pane gap={14} display="flex">
						<MyInputField
							type="text"
							label={<MyLabel>Date of birth</MyLabel>}
							placeholder="dd/mm/yyyy"
						/>
						<MyInputField
							type="text"
							label={<MyLabel>Phone number</MyLabel>}
							placeholder="+1 234 56 78"
						/>
					</Pane>
					<Pane gap={14} display="flex">
						<MyInputField
							type="text"
							label={<MyLabel>Employee email</MyLabel>}
							placeholder="email@gmail.com"
						/>
						<MyInputField
							type="text"
							label={<MyLabel>SSN</MyLabel>}
							placeholder="12345"
						/>
					</Pane>
					<Pane flexDirection="column" display="flex">
						<SelectField
							width={240}
							label={<MyLabel>Serving Location</MyLabel>}
						>
							<option value="fizz">fizz</option>
							<option value="buzz">buzz</option>
						</SelectField>
						<Pane display="flex" gap={8} flexDirection="column">
							<MyLabel>Attachment File</MyLabel>
							<FilePicker
								width={250}
								placeholder="Select the file here!"
							/>
						</Pane>
					</Pane>
				</Dialog>
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
					<MyText>45 Employees</MyText>
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
				<Table>
					<Table.Head>
						<Table.TextHeaderCell textTransform="none">
							Photo
						</Table.TextHeaderCell>
						<Table.TextHeaderCell textTransform="none">
							Name
						</Table.TextHeaderCell>
						<Table.TextHeaderCell textTransform="none">
							Employee ID
						</Table.TextHeaderCell>
						<Table.TextHeaderCell textTransform="none">
							DOB
						</Table.TextHeaderCell>
						<Table.TextHeaderCell textTransform="none">
							Phone
						</Table.TextHeaderCell>
						<Table.TextHeaderCell textTransform="none">
							Email
						</Table.TextHeaderCell>
						<Table.TextHeaderCell textTransform="none">
							Status
						</Table.TextHeaderCell>
					</Table.Head>
					<Table.Body>
						{employees.map((location) => (
							<Table.Row
								key={location.id}
								isSelectable
								onClick={() => setIsShown(true)}
							>
								<Table.TextCell>
									<Avatar
										src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
										name="Alan Turing"
										size={40}
									/>
								</Table.TextCell>
								<Table.TextCell>{location.name}</Table.TextCell>
								<Table.TextCell isNumber>
									{location.id}
								</Table.TextCell>
								<Table.TextCell>{location.dob}</Table.TextCell>
								<Table.TextCell isNumber>
									{location.phone}
								</Table.TextCell>
								<Table.TextCell>
									{location.email}
								</Table.TextCell>
								<Table.TextCell>
									<Pane
										gap={12}
										display="flex"
										alignItems="center"
									>
										<MyButton
											paddingX="15px"
											height="26px"
											borderRadius={30}
											small="true"
											appearance="primary"
											backgroundColor="var(--green)"
											fontSize={12}
										>
											Active
										</MyButton>
										<MoreIcon />
									</Pane>
								</Table.TextCell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
				<EmployeeDetails isShown={isShown} setIsShown={setIsShown} />
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

export default Employee
