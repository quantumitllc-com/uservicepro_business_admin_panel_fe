import { minorScale, Pagination, Pane, SearchInput } from "evergreen-ui"
import { PerRows } from "components/per-rows"
import MyHeading from "components/heading"
import EmployeeDetails from "pages/dashboard/employee/employee-details-old"
import useIsShown from "hooks/useIsShown"
import { AddEmpolyee } from "./components/add"
import { usePage } from "./usePage"
import { Table } from "../../../components/table"

export interface EmployeeProps {
	officeId?: string
}

const Employee = ({ officeId }: EmployeeProps) => {
	const { setIsShown, isShown } = useIsShown()
	const {
		page,
		data,
		size,
		keyword,
		columns,
		isLoading,
		isFetching,
		handleSearch,
		handleDetail,
		handleChangePage,
		handleChangePerPage,
		handleChangeNextPage,
		handleChangePrevPage,
	} = usePage({ officeId })

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
				<AddEmpolyee officeId={officeId} />
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
					<PerRows
						size={size}
						title="Employees"
						onChange={handleChangePerPage}
						total={data.totalElements}
					/>
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
					isFetching={isFetching}
					onRowClicked={handleDetail}
				/>
				<EmployeeDetails isShown={isShown} setIsShown={setIsShown} />
			</Pane>
			{data.totalPages > 0 && (
				<Pagination
					page={page}
					marginTop={25}
					display="flex"
					justifyContent="center"
					totalPages={data.totalPages}
					onPageChange={handleChangePage}
					onNextPage={handleChangeNextPage}
					onPreviousPage={handleChangePrevPage}
				/>
			)}
		</Pane>
	)
}

export default Employee
