import { Tabs, Tab } from "components/tabs"

const Dashboard = () => (
	<>
		<Tabs>
			<Tab>Daily</Tab>
			<Tab>Weekly</Tab>
			<Tab>Monthly</Tab>
		</Tabs>
		<Tabs>
			<Tab>Pending</Tab>
			<Tab>In progress</Tab>
			<Tab>Rejected</Tab>
		</Tabs>
	</>
)

export default Dashboard
