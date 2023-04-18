import React, { useState } from "react"
import { minorScale, Pane, SearchInput } from "evergreen-ui"

import MyHeading from "components/heading"
import { Table } from "components/table"
import { Detail } from "pages/dashboard/services/detail"
import useBoolean from "hooks/useBoolean"
import { EditFormTypes } from "types/dashboard/services"
import { useServices } from "./useServices"

export interface ServicesProps {
	officeId: string
}

const Services = ({ officeId }: ServicesProps) => {
	const { value, setValue } = useBoolean(false)
	const { columns, data, isLoading, isFetching, handleSearch } = useServices({
		officeId,
	})
	const [detail, setDetail] = useState<EditFormTypes>({
		pictureUrl: "",
		description: "",
	})

	const handleDetail = (data: any) => {
		setDetail(data)
		setValue(true)
	}

	return (
		<Pane>
			<MyHeading fontSize={25} fontWeight={600} marginBottom={20}>
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
						placeholder="Search anything"
					/>
				</Pane>
				<Table
					onRowClicked={(row) => handleDetail(row)}
					columns={columns}
					data={data}
					isLoading={isLoading}
					isFetching={isFetching}
				/>
				<Detail data={detail} setValue={setValue} value={value} />
			</Pane>
		</Pane>
	)
}

export default Services
