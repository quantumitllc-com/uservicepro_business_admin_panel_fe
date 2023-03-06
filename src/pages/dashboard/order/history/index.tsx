import MyHeading from "components/heading"
import { PerRows } from "components/per-rows"
import { Table } from "components/table"
import { minorScale, Pagination, Pane, SearchInput } from "evergreen-ui"
import { usePage } from "./usePage"

const History = () => {
	const {
		page,
		data,
		size,
		columns,
		keyword,
		isLoading,
		isFetching,
		handleDetail,
		handleSearch,
		handleChangePage,
		handleChangePerPage,
		handleChangeNextPage,
		handleChangePrevPage,
	} = usePage()

	return (
		<Pane>
			<MyHeading fontSize={25} fontWeight={600}>
				History of orders
			</MyHeading>
			<MyHeading marginTop="10px" marginBottom="24px">
				List of orders
			</MyHeading>

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
						title="Served orders"
						onChange={handleChangePerPage}
						total={data.totalElements}
					/>
					<SearchInput
						value={keyword}
						onChange={handleSearch}
						placeholder="Search anything"
					/>
				</Pane>
			</Pane>
			<Table
				columns={columns}
				data={data.content}
				isLoading={isLoading}
				isFetching={isFetching}
				onRowClicked={handleDetail}
			/>
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

export default History
