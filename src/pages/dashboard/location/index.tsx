import {
	AddIcon,
	minorScale,
	Pane,
	SearchInput,
	Table,
	Avatar,
	Pagination,
} from "evergreen-ui"

import MyHeading from "components/heading"
import MyButton from "components/button"
import MyText from "components/text"
import useBoolean from "hooks/useBoolean"
import { useLocation } from "./useLocation"
import AddLocation from "./add-location"

const Location = () => {
	const { value: isShownAddLocation, setValue: setIsShownAddLocation } =
		useBoolean(false)
	const { locations } = useLocation()

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
					<MyText>{locations?.data.totalElements} Locations</MyText>
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
						{locations?.data.content.map((location: any) => (
							<Table.Row key={location.id}>
								<Table.TextCell>
									<Avatar
										src="https://img.freepik.com/premium-vector/flag-usa-united-states-america-background_53500-169.jpg"
										name="USA flag"
										size={40}
									/>
								</Table.TextCell>
								<Table.TextCell>
									{location.state}
								</Table.TextCell>
								<Table.TextCell isNumber>
									{location.zipCode}
								</Table.TextCell>
								<Table.TextCell>
									<MyButton
										disabled
										paddingX="15px"
										height="26px"
										borderRadius={30}
										iconBefore={<AddIcon size={15} />}
										small="true"
										appearance="primary"
										backgroundColor="var(--green)"
										fontSize={12}
										// onClick={() => setIsShown(true)}
									>
										Add
									</MyButton>
								</Table.TextCell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
				<Pagination
					marginTop={25}
					display="flex"
					justifyContent="center"
					page={1}
					totalPages={7}
				/>
			</Pane>
			{/*<AddCategory isShown={isShown} setIsShown={setIsShown} />*/}
			{/*{isShownAddLocation && }*/}
			<AddLocation
				isShownAddLocation={isShownAddLocation}
				setIsShownAddLocation={setIsShownAddLocation}
			/>
		</Pane>
	)
}

export default Location
