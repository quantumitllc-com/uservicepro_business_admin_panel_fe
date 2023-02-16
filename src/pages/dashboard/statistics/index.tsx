/* eslint-disable react/no-unstable-nested-components */
import { Empty } from "components/empty"
import MyHeading from "components/heading"
import { Combobox, Pane } from "evergreen-ui"
import { useLocation } from "hooks/useLocation"
import { useSearchParams } from "react-router-dom"
import { StatisticsChart } from "./components/chart"
import { EmployeeStatistics } from "./components/employee-statistics"
import { Reviews } from "./components/reviews"

const Statistics = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const { dataLocation, isLoadingLocation } = useLocation()
	const params = new URLSearchParams(searchParams)
	const officeId = params.get("officeId")

	return (
		<Pane>
			<Pane display="flex" alignItems="center" gap={20}>
				<MyHeading fontWeight={600} fontSize={24}>
					Statistics
				</MyHeading>
				<Combobox
					openOnFocus
					height={40}
					items={dataLocation}
					placeholder="Office"
					isLoading={isLoadingLocation}
					onChange={(selected) => {
						setSearchParams({ officeId: selected.id })
					}}
					itemToString={(item) =>
						item ? `${item?.name}  ${item.state}` : ""
					}
					selectedItem={dataLocation.find(
						(v: any) => v.id === officeId,
					)}
				/>
			</Pane>
			{officeId === null ? (
				<Pane
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Empty text="Please select a office!" />
				</Pane>
			) : (
				<Pane
					gap={20}
					width="100%"
					display="flex"
					marginTop={20}
					flexDirection="column"
				>
					<StatisticsChart />
					<Pane gap={20} width="100%" display="flex">
						<EmployeeStatistics />
						<Reviews />
					</Pane>
				</Pane>
			)}
		</Pane>
	)
}

export default Statistics
