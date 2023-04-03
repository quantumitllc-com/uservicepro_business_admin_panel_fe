import {
	minorScale,
	Pane,
	SearchInput
} from "evergreen-ui"

import MyHeading from "components/heading"
import { Table } from "components/table"
import { useServices } from "./useServices"

const Services = () => {
	const {
		columns,
		data,
		isLoading,
		isFetching,
		handleDetail,
		handleSearch
	} = useServices()

	return (
		<Pane>
			<MyHeading marginBottom={minorScale(5)}
			           fontSize={25} fontWeight={600}>
				Services
			</MyHeading>
			<Pane
				display="flex"
				alignItems="flex-end"
				justifyContent="space-between"
				marginBottom={minorScale(5)}
			>
				<MyHeading>List of services</MyHeading>
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
						placeholder="Search anything" />
				</Pane>
				<Table
					onRowClicked={handleDetail}
					columns={columns}
					data={data}
					isLoading={isLoading}
					isFetching={isFetching}
				/>
			</Pane>
		</Pane>
	)
}

export default Services
