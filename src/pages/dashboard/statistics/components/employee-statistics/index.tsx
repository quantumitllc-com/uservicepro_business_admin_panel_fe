import MyBadge from "components/badge"
import MyHeading from "components/heading"
import { Table } from "components/table"
import MyText from "components/text"
import { Pane, TextInput } from "evergreen-ui"
import { useEmployee } from "./useEmployee"

export const EmployeeStatistics = () => {
	const {
		data,
		columns,
		isLoading,
		handleDetail,
		handleChange,
		handleNavigate,
	} = useEmployee()
	return (
		<Pane
			width="50%"
			padding={10}
			borderRadius={10}
			background="white"
			border="1px solid #E9ECF1"
		>
			<Pane display="flex" justifyContent="space-between">
				<MyHeading>Employees</MyHeading>
				<MyBadge
					height={30}
					display="flex"
					paddingLeft={15}
					cursor="pointer"
					paddingRight={15}
					borderRadius={20}
					alignItems="center"
					justifyContent="center"
					onClick={handleNavigate}
					backgroundColor="var(--black)"
				>
					See more
				</MyBadge>
			</Pane>
			<Pane
				display="flex"
				marginBottom={10}
				alignItems="center"
				justifyContent="space-between"
			>
				<Pane gap={5} display="flex" flexDirection="column">
					<MyText>Number of Top Employees</MyText>
					<TextInput
						max={50}
						type="number"
						maxWidth={100}
						defaultValue={5}
						onChange={handleChange}
					/>
				</Pane>
				<MyText
					fontWeight={400}
					fontSize={16}
					lineHeight="20px"
					color=" #5F7096"
				>
					{data.activeUsers} active users
				</MyText>
			</Pane>

			<Pane borderTop="1px solid #d1d2da">
				<Table
					noTableHead
					data={data.data}
					columns={columns}
					isLoading={isLoading}
					onRowClicked={handleDetail}
				/>
			</Pane>
		</Pane>
	)
}
