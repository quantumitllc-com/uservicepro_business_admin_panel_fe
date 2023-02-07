import { Tabs, Tab } from "components/tabs"

const Dashboard = () => (
	<>
		<Tabs>
			<Tab title="Daily">Daily</Tab>
			<Tab title="Weekly">Weekly</Tab>
			<Tab title="Monthly">Monthly</Tab>
		</Tabs>
		<Tabs>
			<Tab title="Pending">Pending</Tab>
			<Tab title="In progress">In progress</Tab>
			<Tab title="Rejected">Rejected</Tab>
		</Tabs>
	</>
)

export default Dashboard
