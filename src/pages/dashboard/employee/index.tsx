import { minorScale, Pagination, Pane, SearchInput } from "evergreen-ui"

import MyHeading from "components/heading"
import MyText from "components/text"
import EmployeeDetails from "entities/employee-details"
import useIsShown from "hooks/useIsShown"
import { AddEmpolyee } from "./components/add"
import { useEmployee } from "./useEmployee"
import { Table } from "./components/table"

const Employee = () => {
	const { setIsShown, isShown } = useIsShown()
	const {
		page,
		data,
		keyword,
		columns,
		isLoading,
		handleSearch,
		handleChangePage,
		handleChangePerPage,
	} = useEmployee()

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
				<AddEmpolyee />
			</Pane>
			<Pane>
				<Pane
					gap="30px"
					display="flex"
					alignItems="center"
					padding={minorScale(7)}
					backgroundColor="var(--white)"
					border="1px solid var(--white)"
				>
					<MyText>{data.numberOfElements} Employees</MyText>
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
					<SearchInput
						value={keyword}
						onChange={handleSearch}
						placeholder="Search anything"
					/>
				</Pane>
				<Table
					columns={columns}
					data={data.content}
					isLoading={isLoading}
				/>
				<EmployeeDetails isShown={isShown} setIsShown={setIsShown} />
			</Pane>
			<Pagination
				page={page}
				marginTop={25}
				display="flex"
				justifyContent="center"
				onPageChange={handleChangePage}
				totalPages={10}
			/>
		</Pane>
	)
}

export default Employee
