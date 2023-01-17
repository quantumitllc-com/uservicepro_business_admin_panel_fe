import { Pane } from "evergreen-ui"
import { Navigate, Outlet } from "react-router-dom"

import { getTokens } from "utils/getTokens"
import Header from "./header"
import Sidebar from "./sidebar"
import styles from "./styles.module.scss"

const Dashboard = () => {
	const tokens = getTokens()

	if (!tokens.preDashboardInfo.isFinished) {
		return <Navigate to="/pre-dashboard/business" />
	}

	return (
		<Pane className={styles.container}>
			<Sidebar className={styles.sidebar} />
			<Pane className={styles.main}>
				<Outlet />
			</Pane>
			<Header className={styles.header} />
		</Pane>
	)
}

export default Dashboard
