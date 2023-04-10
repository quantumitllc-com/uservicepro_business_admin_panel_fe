import { AddIcon, minorScale, Pane, SearchInput } from "evergreen-ui"
import { Link } from "react-router-dom"
import { useState } from "react"

import MyHeading from "components/heading"
import { Table } from "components/table"
import MyButton from "components/button"
import { useServices } from "./useServices"
import { Detail } from "./detail"
import useBoolean from "../../../hooks/useBoolean"
import { EditFormTypes } from "../../../types/dashboard/services"

const Services = () => {
	const { value, setValue } = useBoolean(false)
	const { columns, data, isLoading, isFetching, handleSearch } = useServices()
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
			<MyHeading fontSize={25} fontWeight={600}>
				Services
			</MyHeading>
			<Pane
				display="flex"
				alignItems="flex-end"
				justifyContent="space-between"
				marginBottom={minorScale(5)}
			>
				<MyHeading>List of services</MyHeading>
				<Link to="add">
					<MyButton
						iconBefore={AddIcon}
						small="true"
						appearance="primary"
						backgroundColor="var(--green)"
					>
						Add Service
					</MyButton>
				</Link>
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
