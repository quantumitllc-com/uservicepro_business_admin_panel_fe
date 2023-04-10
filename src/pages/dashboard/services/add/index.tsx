import { minorScale, Pane, SearchInput } from "evergreen-ui"
import { useState } from "react"

import MyHeading from "components/heading"
import { useAdd } from "./useAdd"
import { Table } from "../../../../components/table"
import CategoryService from "./components/category-service"

const AddServices = () => {
	const [currentRow, setCurrentRow] = useState("")
	const {
		data,
		columns,
		isFetching,
		isLoading,
		handleSearch
	} = useAdd()

	return (
		<Pane>
			<MyHeading
				fontSize={25}
				fontWeight={600}
				marginBottom={24}
			>
				Add services
			</MyHeading>
			<Pane
				display="flex"
				alignItems="flex-end"
				justifyContent="space-between"
				marginBottom={minorScale(5)}
			>
				<MyHeading>List of categories</MyHeading>
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
					<SearchInput
						onChange={handleSearch}
						placeholder="Search anything"
					/>
				</Pane>
				<Table
					isLoading={isLoading}
					isFetching={isFetching}
					columns={columns}
					data={data}
					expandableRows
					expandableRowsComponent={CategoryService}
					onRowClicked={(row) => setCurrentRow(row.id)}
					onRowExpandToggled={(bool, row) => setCurrentRow(row.id)}
					expandableRowExpanded={(row) => (row.id === currentRow)}
				/>
			</Pane>
		</Pane>
	)
}

export default AddServices
