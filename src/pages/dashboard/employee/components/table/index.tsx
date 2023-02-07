import { Spinner } from "evergreen-ui"
import DataTable, { TableProps } from "react-data-table-component"
import { ReactComponent as IconDoubleCaret } from "./icons/double-caret-vertical.svg"

interface TableTypes<C> extends TableProps<C> {
	isLoading: boolean
	isFetching?: boolean
	handleChangePage?: (page: number) => void
	handleChangePerPage?: (perPage: number) => void
}

export const Table = <C,>({
	data,
	columns,
	keyField,
	isLoading,
	isFetching,
	onRowClicked,
	selectableRows,
	handleChangePage,
	handleChangePerPage,
	selectableRowsHighlight,
	...props
}: TableTypes<C>) => (
	<div>
		{isFetching && <div className="linear">LinearProgress</div>}
		<DataTable
			responsive
			fixedHeader
			data={data}
			columns={columns}
			keyField={keyField}
			progressPending={isLoading}
			progressComponent={
				<div>
					<Spinner />
				</div>
			}
			noDataComponent={<div>Empty</div>}
			sortIcon={<IconDoubleCaret />}
			selectableRows={selectableRows}
			onRowClicked={onRowClicked}
			selectableRowsHighlight={selectableRowsHighlight}
			{...props}
		/>
	</div>
)
