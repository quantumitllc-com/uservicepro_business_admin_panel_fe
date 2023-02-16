import { Spinner } from "evergreen-ui"
import { Empty } from "components/empty"
import DataTable, { TableProps } from "react-data-table-component"
import { ReactComponent as IconDoubleCaret } from "./icons/double-caret-vertical.svg"
import styles from "./styles.module.scss"

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
	<div className={styles.container}>
		{isFetching && (
			<div className={styles.wrapperProgres}>
				<div className={styles.progressBar}>
					<div className={`${styles.bar} ${styles.bar1}`} />
					<div className={`${styles.bar} ${styles.bar1}`} />
				</div>
			</div>
		)}
		<DataTable
			responsive
			fixedHeader
			data={data}
			columns={columns}
			keyField={keyField}
			progressPending={isLoading}
			progressComponent={
				<div className={styles.wrapSpinner}>
					<Spinner />
				</div>
			}
			noDataComponent={<Empty />}
			sortIcon={<IconDoubleCaret />}
			selectableRows={selectableRows}
			onRowClicked={onRowClicked}
			selectableRowsHighlight={selectableRowsHighlight}
			{...props}
		/>
	</div>
)
