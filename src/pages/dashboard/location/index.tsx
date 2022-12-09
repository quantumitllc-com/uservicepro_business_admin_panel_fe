import {
	AddIcon,
	minorScale,
	Pane,
	SearchInput,
	Table,
	Avatar,
	Dialog,
	Select,
} from "evergreen-ui"

import MyHeading from "shared/ui/heading"
import MyButton from "shared/ui/button"
import MyText from "shared/ui/text"
import { useState } from "react"
import AddCategory from "entities/cards/auth/add-category"
import MyLabel from "shared/ui/label"
import { MyInputField } from "shared/ui/input"
import locationIcon from "./location.png"
// import { ReactComponent as LocationIcon } from "./location.svg"

const locations = [
	{
		id: "1",
		state: "Minnesota",
		zipcode: "56484",
	},
	{
		id: "2",
		state: "Minnesota",
		zipcode: "56484",
	},
]

const Location = () => {
	const [isShown, setIsShown] = useState(false)
	const [isShownAddLocation, setIsShownAddLocation] = useState(false)

	return (
		<Pane>
			<MyHeading fontSize={25} fontWeight={600}>
				Location
			</MyHeading>
			<Pane
				display="flex"
				alignItems="flex-end"
				justifyContent="space-between"
				marginBottom={minorScale(5)}
			>
				<MyHeading>List of locations</MyHeading>
				<MyButton
					iconBefore={AddIcon}
					small="true"
					appearance="primary"
					backgroundColor="var(--green)"
					onClick={() => setIsShownAddLocation(true)}
				>
					Add Location
				</MyButton>
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
					<MyText>1 Location</MyText>
					<SearchInput placeholder="Search anything" />
					<Pane display="flex" gap="10px">
						<MyHeading>Sort by:</MyHeading>
						<MyText color="var(--dark-green)">State</MyText>
						<MyText>City</MyText>
						<MyText>ZIP Code</MyText>
					</Pane>
				</Pane>
				<Table>
					<Table.Head>
						<Table.TextHeaderCell textTransform="none">
							Country
						</Table.TextHeaderCell>
						<Table.TextHeaderCell textTransform="none">
							State
						</Table.TextHeaderCell>
						<Table.TextHeaderCell textTransform="none">
							ZIP CODE
						</Table.TextHeaderCell>
						<Table.TextHeaderCell textTransform="none">
							Category
						</Table.TextHeaderCell>
					</Table.Head>
					<Table.Body>
						{locations.map((location) => (
							<Table.Row key={location.id}>
								<Table.TextCell>
									<Avatar
										src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
										name="Alan Turing"
										size={40}
									/>
								</Table.TextCell>
								<Table.TextCell>
									{location.state}
								</Table.TextCell>
								<Table.TextCell isNumber>
									{location.zipcode}
								</Table.TextCell>
								<Table.TextCell isNumber>
									<MyButton
										paddingX="15px"
										height="26px"
										borderRadius={30}
										iconBefore={<AddIcon size={15} />}
										small="true"
										appearance="primary"
										backgroundColor="var(--green)"
										fontSize={12}
										onClick={() => setIsShown(true)}
									>
										Add
									</MyButton>
								</Table.TextCell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</Pane>
			<AddCategory isShown={isShown} setIsShown={setIsShown} />
			<Dialog
				width="50%"
				isShown={isShownAddLocation}
				title="Adding location"
				onCloseComplete={() => setIsShownAddLocation(false)}
				confirmLabel="Done"
			>
				<MyInputField
					marginBottom={minorScale(4)}
					label={<MyLabel>Address line 1 (optional)</MyLabel>}
				/>
				<MyInputField
					marginBottom={minorScale(4)}
					label={<MyLabel>Address line 2 (optional)</MyLabel>}
				/>
				<Pane display="flex" gap={16}>
					<MyInputField
						disabled
						placeholder="United States of America"
						label={<MyLabel>Country</MyLabel>}
					/>
					<MyInputField label={<MyLabel>State</MyLabel>} />
					<MyInputField label={<MyLabel>ZIP CODE</MyLabel>} />
				</Pane>
				<Pane>
					<MyLabel>Serving Area</MyLabel>
					<Select
						marginTop={minorScale(2)}
						display="block"
						height={40}
						width="25%"
					>
						<option value={10}>10 miles</option>
					</Select>
				</Pane>
				<Pane position="absolute" right={0} top={60}>
					<img src={locationIcon} alt="location" />
				</Pane>
				{/*<LocationIcon />*/}
			</Dialog>
		</Pane>
	)
}

export default Location
