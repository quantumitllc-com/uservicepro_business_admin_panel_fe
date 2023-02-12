import { minorScale, Pane, SearchInput, Pagination } from "evergreen-ui"

import { PerRows } from "components/per-rows"
import { Table } from "components/table"
import MyHeading from "components/heading"
import Add from "./add"
import { useOffices } from "./useOffices"

const Offices = () => {
	const {
		data,
		page,
		size,
		columns,
		isLoading,
		isFetching,
		handleDetail,
		// handleSearch,
		handleChangePage,
		handleChangePerPage,
		handleChangeNextPage,
		handleChangePrevPage,
	} = useOffices()

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
				<Add />
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
					<PerRows
						size={size}
						title="Offices"
						onChange={handleChangePerPage}
						total={data.totalElements}
					/>
					<SearchInput placeholder="Search anything" />
				</Pane>
				<Table
					columns={columns}
					data={data.content}
					isLoading={isLoading}
					isFetching={isFetching}
					onRowClicked={handleDetail}
				/>
			</Pane>
			{/*<AddCategory isShown={isShown} setIsShown={setIsShown} />*/}
			<Pagination
				marginTop={25}
				display="flex"
				justifyContent="center"
				page={page}
				totalPages={data.totalPages}
				onNextPage={handleChangeNextPage}
				onPreviousPage={handleChangePrevPage}
				onPageChange={handleChangePage}
			/>
		</Pane>
	)
}

export default Offices
