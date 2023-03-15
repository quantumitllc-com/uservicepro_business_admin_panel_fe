import { Pane } from "evergreen-ui"
import { Navigate, Outlet } from "react-router-dom"
import React, { Suspense, useEffect } from "react"
import { shallow } from "zustand/shallow"

import { getTokens } from "utils/getTokens"
import { Spinner } from "components/spinner"
import Header from "./header"
import Sidebar from "./sidebar"
import styles from "./styles.module.scss"
import { useUserStore } from "../../../store/user"

const Dashboard = () => {
	const tokens = getTokens()
	const { setUser } = useUserStore(
		(state) => ({
			setUser: state.setUser,
		}),
		shallow,
	)

	useEffect(() => {
		setUser(tokens)
	}, [])

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
