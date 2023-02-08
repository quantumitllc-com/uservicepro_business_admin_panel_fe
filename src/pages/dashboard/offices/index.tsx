import {
	AddIcon,
	minorScale,
	Pane,
	SearchInput,
	Table,
	Avatar,
	Pagination,
} from "evergreen-ui"
import { useNavigate } from "react-router-dom"

import MyHeading from "components/heading"
import MyButton from "components/button"
import MyText from "components/text"
import useBoolean from "hooks/useBoolean"
import { useOffices } from "./useOffices"
import AddOffice from "./add-office"
import { tableColumns } from "./constant"

const Offices = () => {
	const { value, setFalse, setTrue } = useBoolean(false)
	const { data, page, nextPage, prevPage, handleChangePage } = useOffices()
	const navigate = useNavigate()

	console.log(data)

	return (
		<Pane>
			<MyHeading fontSize={25} fontWeight={600}>
				Offices
			</MyHeading>
			<Pane
				display="flex"
				alignItems="flex-end"
				justifyContent="space-between"
				marginBottom={minorScale(5)}
			>
				<MyHeading>List of offices</MyHeading>
				<MyButton
					iconBefore={AddIcon}
					small="true"
					appearance="primary"
					backgroundColor="var(--green)"
					onClick={setTrue}
				>
					Add Office
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
					<MyText>{data?.data.totalElements} Locations</MyText>
					<SearchInput placeholder="Search anything" />
					{/*<Pane display="flex" gap="10px">*/}
					{/*	<MyHeading>Sort by:</MyHeading>*/}
					{/*	<MyText color="var(--dark-green)">State</MyText>*/}
					{/*	<MyText>City</MyText>*/}
					{/*	<MyText>ZIP Code</MyText>*/}
					{/*</Pane>*/}
				</Pane>
				<Table>
					<Table.Head>
						{tableColumns.map((column) => (
							<Table.TextHeaderCell
								key={column}
								textTransform="none"
							>
								{column}
							</Table.TextHeaderCell>
						))}
					</Table.Head>
					<Table.Body>
						{data?.data.content.map((office: any) => (
							<Table.Row
								key={office.id}
								isSelectable
								onSelect={() => navigate(office.id)}
							>
								<Table.TextCell>
									<Avatar
										src="https://img.freepik.com/premium-vector/flag-usa-united-states-america-background_53500-169.jpg"
										name="USA flag"
										size={40}
									/>
								</Table.TextCell>
								<Table.TextCell>{office.state}</Table.TextCell>
								<Table.TextCell isNumber>
									{office.zipCode}
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
					page={page + 1}
					totalPages={data?.data.totalPages}
					onNextPage={nextPage}
					onPreviousPage={prevPage}
					onPageChange={handleChangePage}
				/>
			</Pane>
			{/*<AddCategory isShown={isShown} setIsShown={setIsShown} />*/}
			{value && <AddOffice value={value} setFalse={setFalse} />}
		</Pane>
	)
}

export default Offices
