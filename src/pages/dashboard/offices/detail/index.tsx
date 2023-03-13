import { minorScale, Pane } from "evergreen-ui"

import { Spinner } from "components/spinner"
import { Tab, Tabs } from "components/tabs"
import Employee from "pages/dashboard/employee"
import { useDetail } from "./useDetail"
import Edit from "../edit"
import Title from "./components/title"

const OfficeDetail = () => {
	const { isLoading, data } = useDetail()

	console.log(data)

	return (
		<Pane display="flex" flexDirection="column" gap={28}>
			<Title />
			<Pane
				backgroundColor="var(--white)"
				border="var(--stroke-block) 1px solid"
				borderRadius={6}
				padding={minorScale(7)}
			>
				{isLoading ? (
					<Spinner />
				) : (
					<Tabs>
						<Tab title="Branch Info">
							<Edit />
						</Tab>
						<Tab title="Employees">
							<Pane paddingTop={28}>
								<Employee officeId={data.id} />
							</Pane>
						</Tab>
						<Tab title="Services">
							<Pane paddingTop={28}>Services</Pane>
						</Tab>
					</Tabs>
				)}
			</Pane>
		</Pane>
	)
}

export default OfficeDetail
