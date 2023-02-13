import { Pane } from "evergreen-ui"
import { Navigate, Outlet } from "react-router-dom"
import React, { Suspense } from "react"

import { getTokens } from "utils/getTokens"
import { Spinner } from "components/spinner"
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
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<Pane className={styles.main}>
				<Suspense fallback={<Spinner />}>
					<Outlet />
				</Suspense>
			</Pane>
		</Pane>
	)
}

export default Dashboard
